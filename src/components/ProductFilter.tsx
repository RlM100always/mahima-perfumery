import React from 'react';
import { Filter } from 'lucide-react';

interface ProductFilterProps {
  categories: string[];
  genders: string[];
  selectedCategory: string;
  selectedGender: string;
  onCategoryChange: (category: string) => void;
  onGenderChange: (gender: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  genders,
  selectedCategory,
  selectedGender,
  onCategoryChange,
  onGenderChange,
}) => {
  const getCategoryName = (category: string) => {
    switch (category) {
      case 'all':
        return 'সব ধরনের';
      case 'wholesale':
        return 'পাইকারি';
      case 'retail':
        return 'খুচরা';
      case 'package':
        return 'প্যাকেজ';
      default:
        return category;
    }
  };

  const getGenderName = (gender: string) => {
    switch (gender) {
      case 'all':
        return 'সবার জন্য';
      case 'men':
        return 'পুরুষদের';
      case 'women':
        return 'মহিলাদের';
      default:
        return gender;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="flex items-center space-x-2 mb-4 sm:mb-6">
        <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">ফিল্টার করুন</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            ক্যাটেগরি
          </label>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {getCategoryName(category)}
              </button>
            ))}
          </div>
        </div>

        {/* Gender Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
            লিঙ্গ
          </label>
          <div className="grid grid-cols-3 gap-2">
            {genders.map((gender) => (
              <button
                key={gender}
                onClick={() => onGenderChange(gender)}
                className={`px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  selectedGender === gender
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                {getGenderName(gender)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};