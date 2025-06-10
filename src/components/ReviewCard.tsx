import React from 'react';
import { Star, CheckCircle, MessageCircle, Facebook, Mail } from 'lucide-react';
import { Review } from '../types';
import { LazyImage } from './LazyImage';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
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
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Profile Section */}
        <div className="flex items-start space-x-3 sm:space-x-0 sm:flex-col sm:items-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
            {review.name.charAt(0)}
          </div>
          
          {/* Review Images */}
          {review.images && review.images.length > 0 && (
            <div className="flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 sm:mt-3">
              {review.images.slice(0, 2).map((image, index) => (
                <div key={index} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={`Review image ${index + 1}`}
                    className="w-full h-full"
                  />
                </div>
              ))}
              {review.images.length > 2 && (
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium">
                  +{review.images.length - 2}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
              {review.verified && (
                <CheckCircle className="h-4 w-4 text-green-500" title="যাচাইকৃত ক্রেতা" />
              )}
            </div>
            
            {/* Source Badge */}
            {review.source && (
              <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
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
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < review.rating
                      ? 'text-yellow-500 fill-current'
                      : 'text-gray-300'
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
          
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.comment}</p>
          
          {/* Location */}
          {review.location && (
            <p className="text-xs text-gray-500 mt-2">📍 {review.location}</p>
          )}
        </div>
      </div>
    </div>
  );
};