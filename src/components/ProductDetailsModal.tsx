import React, { useState } from 'react';
import { X, Star, MessageCircle, ExternalLink, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Product } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ProductDetailsModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ 
  product, 
  isOpen, 
  onClose 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const message = `আমি ${product.name} (${product.ml}ml) অর্ডার করতে চাই। দাম: ৳${product.price}`;
    const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookMessage = () => {
    const message = `আমি ${product.name} (${product.ml}ml) সম্পর্কে জানতে চাই। দাম: ৳${product.price}`;
    const facebookUrl = `https://m.me/mahimaperfumery?text=${encodeURIComponent(message)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleGoogleFormOrder = () => {
    const formUrl = `https://forms.google.com/your-form-url?product=${encodeURIComponent(product.name)}&price=${product.price}&ml=${product.ml}`;
    window.open(formUrl, '_blank');
  };

  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  const hasImages = product.images && product.images.length > 0;
  const hasVideo = product.video;
  const hasMultipleImages = product.images && product.images.length > 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Image/Video Section */}
          <div className="space-y-4">
            <div className="relative h-80 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden">
              {showVideo && hasVideo ? (
                <div className="relative w-full h-full">
                  <video
                    src={product.video}
                    controls
                    className="w-full h-full object-cover"
                    onEnded={() => setShowVideo(false)}
                    preload="metadata"
                  />
                  <button
                    onClick={() => setShowVideo(false)}
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
                    className="w-full h-full"
                    priority
                  />
                  
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                  
                  {hasVideo && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-4 hover:bg-black/80 transition-colors"
                    >
                      <Play className="h-6 w-6" />
                    </button>
                  )}
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <Package className="h-16 w-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {hasMultipleImages && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-purple-600' : 'border-gray-200'
                    }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                  {product.ml}ml
                </span>
                <span className="text-sm text-gray-600">
                  {product.gender === 'men' ? 'পুরুষদের জন্য' : 'মহিলাদের জন্য'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl font-bold text-purple-600">৳{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">৳{product.originalPrice}</span>
                )}
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-1">(৪.৯)</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">বিবরণ</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">বৈশিষ্ট্য</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-medium">WhatsApp</span>
                </button>
                <button
                  onClick={handleFacebookMessage}
                  className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-medium">Facebook</span>
                </button>
              </div>
              
              <button
                onClick={handleGoogleFormOrder}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="font-medium">অর্ডার করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};