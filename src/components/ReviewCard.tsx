import React, { useState } from 'react';
import { Star, CheckCircle, MessageCircle, Facebook, Mail, X } from 'lucide-react';
import { Review } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'whatsapp':
        return <MessageCircle className="h-4 w-4 text-green-500" />;
      case 'facebook':
        return <Facebook className="h-4 w-4 text-blue-500" />;
      case 'google':
        return <Mail className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getSourceName = (source: string) => {
    switch (source) {
      case 'whatsapp':
        return 'WhatsApp';
      case 'facebook':
        return 'Facebook';
      case 'google':
        return 'Google Form';
      default:
        return '';
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Profile Initial and Images Section */}
          <div className="flex flex-col items-center flex-shrink-0 space-y-3">
            {/* Profile Initial */}
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {review.name.charAt(0)}
            </div>

            {/* Review Images (horizontally scrollable) */}
            {review.images && review.images.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto max-w-[160px] sm:max-w-[200px]">
                {review.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => setZoomImage(image)}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`Review image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Review Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-900 text-base">{review.name}</h4>
                {review.verified && (
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" title="যাচাইকৃত ক্রেতা" />
                )}
              </div>

              {/* Source Badge */}
              {review.source && (
                <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full flex-shrink-0">
                  {getSourceIcon(review.source)}
                  <span className="text-xs text-gray-600">{getSourceName(review.source)}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
              {review.productName && (
                <span className="text-xs sm:text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded">
                  {review.productName}
                </span>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-2">{review.comment}</p>

            {/* Location */}
            {review.location && (
              <p className="text-xs text-gray-500">📍 {review.location}</p>
            )}
          </div>
        </div>
      </div>

      {/* Zoom Image Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] mx-4">
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
              onClick={(e) => {
                e.stopPropagation();
                setZoomImage(null);
              }}
            >
              <X className="w-5 h-5 text-black" />
            </button>
            <img
              src={zoomImage}
              alt="Zoomed review"
              className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};
