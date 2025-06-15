import React, { useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { ProductFilter } from '../components/ProductFilter';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { VideoTestimonials } from '../components/VideoTestimonials';
import { AboutSection } from '../components/AboutSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';
import { products } from '../data/products';
import { Product } from '../types';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedBottleSize, setSelectedBottleSize] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['all', 'wholesale', 'retail', 'package'];
  const genders = ['all', 'men', 'women'];
  const bottleSizes = [15, 30, 60];

  // Memoize filtered products to prevent unnecessary re-renders
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const genderMatch = selectedGender === 'all' || product.gender === selectedGender;
      const sizeMatch = selectedBottleSize === 'all' || product.ml.toString() === selectedBottleSize;
      return categoryMatch && genderMatch && sizeMatch;
    });
  }, [selectedCategory, selectedGender, selectedBottleSize]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero onNavigate={onPageChange} />
      
      {/* Products Section */}
      <div id="products-section" className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              আমাদের <span className="text-purple-600">প্রিমিয়াম</span> কালেকশন
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              প্রতিটি পারফিউম তৈরি হয়েছে এমনভাবে, যাতে এটি আপনাকে দীর্ঘ সময় সুগন্ধিত ও ব্যক্তিত্বসম্পন্ন রাখে।
            </p>
          </div>

          <ProductFilter
            categories={categories}
            genders={genders}
            bottleSizes={bottleSizes}
            selectedCategory={selectedCategory}
            selectedGender={selectedGender}
            selectedBottleSize={selectedBottleSize}
            onCategoryChange={setSelectedCategory}
            onGenderChange={setSelectedGender}
            onBottleSizeChange={setSelectedBottleSize}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-base sm:text-lg">এই ফিল্টারে কোনো পণ্য পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      </div>

      {/* Video Testimonials Section */}
      <VideoTestimonials />

      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>

      {/* Reviews Section */}
      <div id="reviews-section">
        <ReviewsSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};