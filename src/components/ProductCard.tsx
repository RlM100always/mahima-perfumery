import React, { useState, memo } from 'react';
import { MessageCircle, ExternalLink, Star, Package, Users, Gift, Play, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Product } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ product, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

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
    const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `আমি ${product.name} (${product.ml}ml) সম্পর্কে জানতে চাই। দাম: ৳${product.price}`;
    const facebookUrl = `https://m.me/mahimaperfumery?text=${encodeURIComponent(message)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleGoogleFormOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const formUrl = `https://forms.gle/PaNYbVrDqpvzqfsj9`;
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

  const hasImages = product.images && product.images.length > 0;
  const hasVideo = product.video;
  const hasMultipleImages = product.images && product.images.length > 1;

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer will-change-transform"
      onClick={() => onViewDetails(product)}
    >
      {/* Image/Video Section */}
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-purple-50 to-pink-50">
        {showVideo && hasVideo ? (
          <div className="relative w-full h-full">
            <video
              src={product.video}
              controls
              className="w-full h-full object-cover"
              onEnded={() => setShowVideo(false)}
              preload="none"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideo(false);
              }}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </div>
        ) : hasImages ? (
          <>
            <OptimizedImage
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(true);
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-3 sm:p-4 hover:bg-black/80 transition-colors"
              >
                <Play className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            )}
          </>
        ) : hasVideo ? (
          <div className="relative w-full h-full">
            <video
              src={product.video}
              controls
              className="w-full h-full object-cover"
              preload="none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 flex items-center space-x-1">
          {getCategoryIcon(product.category)}
          <span className="text-xs font-medium text-gray-700">
            {getCategoryName(product.category)}
          </span>
        </div>

        {/* Gender Badge */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-purple-600 text-white rounded-full px-2 sm:px-3 py-1">
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
            <span className="text-xl sm:text-2xl font-bold text-purple-600">৳{product.price}</span>
            {product.originalPrice && (
              <span className="text-base sm:text-lg text-gray-400 line-through">৳{product.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
            ))}
            <span className="text-xs sm:text-sm text-gray-600 ml-1">(৪.৯)</span>
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
  );
});

ProductCard.displayName = 'ProductCard';