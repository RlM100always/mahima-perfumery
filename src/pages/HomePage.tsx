import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
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

      {/* ✅ SEO Helmet Tags */}
      <Helmet>
        <title>Mahima Perfumery | Premium & Budget Perfumes in Bangladesh</title>
        <meta name="description" content="Discover long-lasting, budget-friendly perfumes in Bangladesh. Mahima Perfumery offers premium unisex fragrances for daily and special occasions." />
        <meta
name="keywords"
  content="perfume price in Bangladesh, Mahima Perfumery, perfume Bangladesh, budget perfume BD, long-lasting perfume, unisex perfume, online perfume store ,long lasting perfume for men, best perfume for women, attar for men, branded perfume in BD, original perfume BD, cheap perfume in Bangladesh, pocket perfume BD, Perfume shop Bangladesh, Low price perfume in bangladesh, Top 10 Perfume brands for male in bangladesh with price, Men Perfume price in bangladesh, Top 10 perfume in bangladesh with price, wholesale perfume, wholesale perfume in bd, wholesale perfume in bangladesh, paikari perfume, পাইকারি পারফিউম, খুচরা পারফিউম, জনপ্রিয় পারফিউম, পারফিউম হাব বাংলাদেশ, রিসেলার পারফিউম, পাইকারি পারফিউম এর দাম, পারফিউম বিজনেস, সুগন্ধি প্রাইস ইন বাংলাদেশ, কম দামি পারফিউম, ৫-৮ ঘন্টা স্থায়ী পারফিউম, ১০-২০ ঘন্টা স্থায়ী পারফিউম, ১-২ দিন স্থায়ী পারফিউম, বেস্ট পারফিউম প্রস্ততকারক ইন বাংলাদেশ, ভালো মানের পারফিউম, কম দামের ভালো মানের পারফিউম, low price good quality perfumes, Students budget friendly perfumes in bd, Budget friendly perfumes in bd, বাজেট ফ্রেন্ডলি পারফিউম, বেস্ট রিভিউ পারফিউম, bd perfume, oud perfume price in BD, musk perfume BD, sweet perfume for women BD, spicy perfume for men, best perfume under 1000 in Bangladesh, perfume under 500 taka, affordable perfume BD, best perfume for women in Bangladesh, body spray for girls BD, floral perfume for women, wholesale oud perfume BD, wholesale attar BD, পাইকারি আরবী পারফিউম, পাইকারি অটারের দাম, পারফিউম রিসেলার BD, artisanal perfume Bangladesh, eco‑friendly perfume BD, halal perfume Bangladesh, perfume decants BD, perfume balm wax BD, perfume shop BD, perfume store Dhaka, online perfume Bangladesh, discount perfume outlet BD, perfume mall BD, perfume under 500 BD, perfume under 1000 BD, cheap EDP BD, discount perfume BD, budget perfume online Bangladesh, body mist BD, body spray BD, unisex perfume BD, women’s floral EDP BD, floral perfume BD, jasmine perfume Bangladesh, rose scent perfume BD, citrus perfume BD, oud perfume BD, sandalwood perfume BD, patchouli perfume Bangladesh, amber perfume BD, vanilla perfume BD, chocolate musk perfume BD"
/>

        <meta property="og:title" content="Mahima Perfumery | Premium Perfumes in Bangladesh" />
        <meta property="og:description" content="Buy elegant and affordable perfumes from Mahima Perfumery. Premium, long-lasting unisex fragrances with nationwide delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mahimaperfumery.com/" />
        <meta property="og:image" content="https://www.mahimaperfumery.com/logo.png" />
        <link rel="canonical" href="https://www.mahimaperfumery.com/" />
      </Helmet>
      {/* Hero Section */}
      <Hero onNavigate={onPageChange} />
      
      {/* Products Section */}
      <div id="products-section" className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              মাহিমা পারফিউমারি কো. এর <span className="text-purple-600">প্রিমিয়াম এবং বাজেট </span> ফ্রেন্ডলি কালেকশন

            </h1>
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