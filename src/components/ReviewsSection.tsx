import React, { useState } from 'react';
import { Star, Users, Award, TrendingUp } from 'lucide-react';
import { ReviewCard } from './ReviewCard';
import { reviews } from '../data/reviews';

export const ReviewsSection: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState('all');

  const filteredReviews = reviews.filter(review => 
    selectedRating === 'all' || review.rating.toString() === selectedRating
  );

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;
  
  const ratingDistribution = Array.from({ length: 5 }, (_, i) => {
    const rating = 5 - i;
    const count = reviews.filter(review => review.rating === rating).length;
    const percentage = (count / totalReviews) * 100;
    return { rating, count, percentage };
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            গ্রাহক <span className="text-purple-600">রিভিউ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের সন্তুষ্ট গ্রাহকদের মতামত ও অভিজ্ঞতা দেখুন
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">
              {averageRating.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">গড় রেটিং</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              {totalReviews}+
            </div>
            <div className="text-sm text-gray-600">মোট রিভিউ</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4 mx-auto">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {Math.round((reviews.filter(r => r.rating >= 4).length / totalReviews) * 100)}%
            </div>
            <div className="text-sm text-gray-600">৪+ স্টার রেটিং</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              98%
            </div>
            <div className="text-sm text-gray-600">সন্তুষ্ট গ্রাহক</div>
          </div>
        </div>

        {/* Rating Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">রেটিং বিতরণ</h3>
              <div className="space-y-4">
                {ratingDistribution.map(({ rating, count, percentage }) => (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-20">
                      <span className="text-sm font-medium">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-purple-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ফিল্টার করুন</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedRating('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    selectedRating === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                  }`}
                >
                  সব রিভিউ ({totalReviews})
                </button>
                {[5, 4, 3, 2, 1].map(rating => {
                  const count = reviews.filter(r => r.rating === rating).length;
                  return (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating.toString())}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedRating === rating.toString()
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-purple-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>{rating}</span>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                      <span>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredReviews.slice(0, 6).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">এই রেটিংয়ে কোনো রিভিউ পাওয়া যায়নি।</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">আপনিও রিভিউ দিন</h3>
          <p className="text-purple-100 mb-6">
            আমাদের পণ্য ব্যবহার করে আপনার অভিজ্ঞতা শেয়ার করুন এবং অন্যদের সাহায্য করুন
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            রিভিউ লিখুন
          </button>
        </div>
      </div>
    </div>
  );
};