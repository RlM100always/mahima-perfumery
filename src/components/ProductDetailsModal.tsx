import React, { useState } from 'react';
import { X, Star, MessageCircle, ExternalLink, ChevronLeft, ChevronRight, Play, Package } from 'lucide-react';
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
    const whatsappUrl = `https://wa.me/8801825008451?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFacebookMessage = () => {
    const message = `আমি ${product.name} (${product.ml}ml) সম্পর্কে জানতে চাই। দাম: ৳${product.price}`;
    const facebookUrl = `https://m.me/MahimaPerfumeryCo?text=${encodeURIComponent(message)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleGoogleFormOrder = () => {
    const formUrl = `https://forms.gle/1YV8TaLKrDvVLgW76`;
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

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const getEmbedUrl = () => {
    if (!product.video) return '';
    
    if (product.videoType === 'youtube') {
      const videoId = getYouTubeVideoId(product.video);
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : '';
    } else if (product.videoType === 'facebook') {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(product.video)}&show_text=false&autoplay=true`;
    }
    return product.video;
  };

  const handleVideoPlay = () => {
    if (product.video) {
      if (product.videoType === 'youtube' || product.videoType === 'facebook') {
        setShowVideo(true);
      } else {
        window.open(product.video, '_blank');
      }
    }
  };

  const hasImages = product.images && product.images.length > 0;
  const hasVideo = product.video;
  const hasMultipleImages = product.images && product.images.length > 1;

  // Use YouTube thumbnail if available, otherwise use first product image
  const displayImage = hasImages ? product.images[currentImageIndex] : 
    (hasVideo && product.videoType === 'youtube' ? getYouTubeThumbnail(product.video) : null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate pr-4">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6">
          {/* Image/Video Section */}
          <div className="space-y-4">
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden">
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
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                  >
                    ✕
                  </button>
                </div>
              ) : displayImage ? (
                <>
                  <OptimizedImage
                    src={displayImage}
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
                    <>
                      <button
                        onClick={handleVideoPlay}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-4 hover:bg-black/80 transition-colors"
                      >
                        <Play className="h-6 w-6" />
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
                  <Package className="h-16 w-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {hasMultipleImages && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 ${
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

            {/* Video Link */}
            {hasVideo && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">প্রোডাক্ট ভিডিও</h4>
                <button
                  onClick={() => window.open(product.video, '_blank')}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">
                    {product.videoType === 'youtube' ? 'YouTube এ দেখুন' : 
                     product.videoType === 'facebook' ? 'Facebook এ দেখুন' : 'ভিডিও দেখুন'}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                    {product.ml}ml
                  </span>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {product.gender === 'men' ? 'পুরুষদের জন্য' : 'মহিলাদের জন্য'}
                  </span>
                  <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {product.category === 'wholesale' ? 'পাইকারি' : 
                     product.category === 'retail' ? 'খুচরা' : 'প্যাকেজ'}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-purple-600">{product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg sm:text-xl text-gray-400 line-through">{product.originalPrice}</span>
                    <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% ছাড়
                    </span>
                  </>
                )}
              </div>
              
              {/* <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
                <span className="text-sm text-gray-600 ml-2">(৪.৯ - ১২৫০+ রিভিউ)</span>
              </div> */}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">বিবরণ</h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {product.description}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">বৈশিষ্ট্য</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">পণ্যের বিশেষত্ব</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">আয়তন:</span>
                  <span className="font-medium ml-2">{product.ml}ml</span>
                </div>
                <div>
                  <span className="text-gray-600">রঙ:</span>
                  <span className="font-medium ml-2">{product.color}</span>
                </div>
                <div>
                  <span className="text-gray-600">ধরন:</span>
                  <span className="font-medium ml-2">
                    {product.category === 'wholesale' ? 'পাইকারি' : 
                     product.category === 'retail' ? 'খুচরা' : 'প্যাকেজ'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">স্থায়িত্ব:</span>
                  <span className="font-medium ml-2">৮-১২ ঘন্টা</span>
                </div>
              </div>
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

            {/* Delivery Info */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">ডেলিভারি তথ্য</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• ঢাকার ভিতরে: ১-২ দিন</li>
                <li>• ঢাকার বাইরে: ৩-৫ দিন</li>
                <li>• ক্যাশ অন ডেলিভারি সুবিধা</li>
                <li>• ফ্রি ডেলিভারি ৫০০ টাকার উপরে</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};