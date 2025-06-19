import React, { useState, memo } from 'react';
import { MessageCircle, ExternalLink, Star, Package, Users, Gift, Play, ChevronLeft, ChevronRight, Eye, ZoomIn, X, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ product, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'wholesale':
        return <Users className="h-4 w-4" />;
      case 'retail':
        return <Package className="h-4 w-4" />;
      case 'package':
        return <Gift className="h-4 w-4" />;
      default:
        return <Package className="h-4 w-4" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'wholesale':
        return 'পাইকারি';
      case 'retail':
        return 'খুচরা';
      case 'package':
        return 'প্যাকেজ';
      default:
        return 'খুচরা';
    }
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `আমি ${product.name} (${product.ml}ml) অর্ডার করতে চাই। দাম: ৳${product.price}`;
    const whatsappUrl = `https://wa.me/8801825008451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `আমি ${product.name} (${product.ml}ml) সম্পর্কে জানতে চাই। দাম: ৳${product.price}`;
    const facebookUrl = `https://m.me/MahimaPerfumeryCo?text=${encodeURIComponent(message)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleGoogleFormOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const formUrl = `https://forms.gle/vHAQSJWNFQd52crq8`;
    window.open(formUrl, '_blank');
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const getYouTubeVideoId = (url: string) => {
    const regExp = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const handleVideoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.video) {
      if (product.videoType === 'youtube' || product.videoType === 'facebook') {
        setShowVideo(true);
      } else {
        window.open(product.video, '_blank');
      }
    }
  };

  const getEmbedUrl = () => {
    if (!product.video) return '';

    if (product.videoType === 'youtube') {
      const videoId = getYouTubeVideoId(product.video);
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
        : '';
    }

    if (product.videoType === 'facebook') {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(product.video)}&show_text=false&autoplay=true`;
    }

    return product.video;
  };

  // Zoom functionality
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (displayImage) {
      setShowZoomModal(true);
      setZoomLevel(1);
      setZoomPosition({ x: 0, y: 0 });
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setZoomPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - zoomPosition.x,
        y: e.clientY - zoomPosition.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Limit dragging to reasonable bounds
      const maxMove = 200 * zoomLevel;
      setZoomPosition({
        x: Math.max(-maxMove, Math.min(maxMove, newX)),
        y: Math.max(-maxMove, Math.min(maxMove, newY))
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const nextImageInZoom = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      setZoomLevel(1);
      setZoomPosition({ x: 0, y: 0 });
    }
  };

  const prevImageInZoom = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
      setZoomLevel(1);
      setZoomPosition({ x: 0, y: 0 });
    }
  };

  const hasImages = product.images && product.images.length > 0;
  const hasVideo = product.video;
  const hasMultipleImages = product.images && product.images.length > 1;

  // Use YouTube thumbnail if available, otherwise use first product image
  const displayImage = hasImages ? product.images[currentImageIndex] : 
    (hasVideo && product.videoType === 'youtube' ? getYouTubeThumbnail(product.video) : null);

  return (
    <>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer will-change-transform"
        onClick={() => onViewDetails(product)}
      >
        {/* Image/Video Section */}
        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-purple-50 to-pink-50">
          {showVideo && hasVideo ? (
            <div className="relative w-full h-full">
              <iframe
                src={getEmbedUrl()}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${product.name} video`}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(false);
                }}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              >
                ✕
              </button>
            </div>
          ) : displayImage ? (
            <>
              <div className="relative w-full h-full cursor-zoom-in" onClick={handleImageClick}>
                <OptimizedImage
                  src={displayImage}
                  alt={product.name}
                  className="w-full h-full transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Zoom icon overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
              
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-1.5 sm:p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </>
              )}
              
              {hasVideo && (
                <>
                  <button
                    onClick={handleVideoPlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-3 sm:p-4 hover:bg-black/80 transition-colors"
                  >
                    <Play className="h-4 w-4 sm:h-6 sm:w-6" />
                  </button>
                  
                  {/* Video Platform Badge */}
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                    {product.videoType === 'youtube' && (
                      <>
                        <div className="w-2 h-2 bg-red-600 rounded-sm"></div>
                        <span>YouTube</span>
                      </>
                    )}
                    {product.videoType === 'facebook' && (
                      <>
                        <div className="w-2 h-2 bg-blue-600 rounded-sm"></div>
                        <span>Facebook</span>
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
            {getCategoryIcon(product.category)}
            <span className="text-xs font-medium text-gray-700">
              {getCategoryName(product.category)}
            </span>
          </div>

          {/* Gender Badge */}
          <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-purple-600 text-white rounded-full px-2 sm:px-3 py-1">
            <span className="text-xs font-medium">
              {product.gender === 'men' ? 'পুরুষ' : 'মহিলা'}
            </span>
          </div>

          {/* View Details Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-purple-600 rounded-full px-3 py-1 flex items-center space-x-1 hover:bg-white transition-colors"
          >
            <Eye className="h-3 w-3" />
            <span className="text-xs font-medium">বিস্তারিত</span>
          </button>

          {/* Image Navigation Dots */}
          {hasMultipleImages && !showVideo && (
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Discount Badge */}
          {product.originalPrice && (
            <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full px-2 py-1">
              <span className="text-xs font-bold">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% ছাড়
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
            <div className="text-xs sm:text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
              {product.ml}ml
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">{product.description.split('\n')[0]}</p>

          {/* Features */}
          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-purple-600">{product.price}</span>
              {product.originalPrice && (
                <span className="text-base sm:text-lg text-gray-400 line-through">{product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 sm:space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleWhatsAppOrder}
                className="bg-green-500 text-white py-2 px-2 sm:px-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">WhatsApp</span>
              </button>
              <button
                onClick={handleFacebookMessage}
                className="bg-blue-600 text-white py-2 px-2 sm:px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
              >
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm font-medium">Facebook</span>
              </button>
            </div>
            
            <button
              onClick={handleGoogleFormOrder}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">অর্ডার করুন</span>
            </button>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {showZoomModal && displayImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={() => setShowZoomModal(false)}
              className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
              <button
                onClick={handleZoomIn}
                className="bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors"
                disabled={zoomLevel >= 4}
              >
                <Plus className="h-5 w-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors"
                disabled={zoomLevel <= 1}
              >
                <Minus className="h-5 w-5" />
              </button>
              <button
                onClick={handleZoomReset}
                className="bg-white/20 text-white rounded-full p-3 hover:bg-white/30 transition-colors text-xs"
              >
                1:1
              </button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>

            {/* Navigation Arrows for Multiple Images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImageInZoom}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImageInZoom}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-4 hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div 
              className="relative flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
              style={{
                width: '90vw',
                height: '90vh',
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              <img
                src={displayImage}
                alt={product.name}
                className="transition-transform duration-200 ease-out select-none"
                style={{
                  transform: `scale(${zoomLevel}) translate(${zoomPosition.x / zoomLevel}px, ${zoomPosition.y / zoomLevel}px)`,
                  transformOrigin: 'center center',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                }}
                draggable={false}
                onLoad={(e) => {
                  // Reset zoom when image loads
                  setZoomLevel(1);
                  setZoomPosition({ x: 0, y: 0 });
                }}
              />
            </div>

            {/* Image Counter */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {product.images.length}
              </div>
            )}

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 text-white/70 text-sm text-right">
              <div>Click and drag to pan when zoomed</div>
              <div>Use + / - to zoom in/out</div>
              <div>Press ESC to close</div>
            </div>

            
          </div>
        </div>
      )}
    </>
  );
});

ProductCard.displayName = 'ProductCard';