import React, { useState, useRef, useEffect } from 'react';
import { Package } from 'lucide-react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Load images 100px before they come into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate optimized image URL for Pexels
  const getOptimizedImageUrl = (url: string, width: number = 800) => {
    if (url.includes('pexels.com')) {
      // Extract photo ID from Pexels URL
      const match = url.match(/photos\/(\d+)/);
      if (match) {
        const photoId = match[1];
        return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${width}&fit=crop`;
      }
    }
    return url;
  };

  const optimizedSrc = getOptimizedImageUrl(src);
  const lowQualitySrc = getOptimizedImageUrl(src, 50); // Very low quality for placeholder

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Low quality placeholder */}
      {!isLoaded && isInView && (
        <img
          src={lowQualitySrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          style={{ opacity: 0.6 }}
        />
      )}

      {/* Loading placeholder */}
      {!isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <Package className="h-8 w-8 text-gray-400" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <Package className="h-8 w-8 text-gray-400" />
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          alt={alt}
          sizes={sizes}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  );
};