import React from 'react';
import { Sparkles, Award, Users, Clock } from 'lucide-react';
import { LazyImage } from './LazyImage';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45 translate-x-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-yellow-400">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="font-medium text-sm sm:text-base">প্রিমিয়াম ফ্রেগরেন্স কালেকশন</span>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <img 
                  src="/logo.png" 
                  alt="Mahima Perfumery Co." 
                  className="h-[6rem] w-[auto] filter brightness-0 invert"
                />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Aroma
                </span>
              
                <div className='mt-4'>
                  পারফিউম কালেকশন
                </div>
      
              
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-purple-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
                স্টুডেন্ট ও পেশাজীবীদের জন্য সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির পারফিউম। 
                দীর্ঘস্থায়ী সুগন্ধ ও আকর্ষণীয় প্যাকেজিং।
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div className="text-lg sm:text-2xl font-bold">৫০০০+</div>
                <div className="text-xs sm:text-sm text-purple-200">সন্তুষ্ট গ্রাহক</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div className="text-lg sm:text-2xl font-bold">৮+</div>
                <div className="text-xs sm:text-sm text-purple-200">প্রোডাক্ট ভ্যারিয়েন্ট</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full mb-2 mx-auto">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                </div>
                <div className="text-lg sm:text-2xl font-bold">24 ঘন্টা</div>
                <div className="text-xs sm:text-sm text-purple-200">পর্যন্ত স্থায়ী</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base">
                কালেকশন দেখুন
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all text-sm sm:text-base">
                যোগাযোগ করুন
              </button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative order-first lg:order-last">
            <div className="relative z-10">
              {/* Main Product Image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <LazyImage
                    src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg"
                    alt="Aroma Perfume"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full px-3 sm:px-4 py-2 font-bold transform rotate-12 text-sm sm:text-base">
                  ৩০% ছাড়!
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3 sm:p-4 shadow-lg animate-bounce">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 sm:p-4 shadow-lg animate-pulse">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl transform scale-150"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 sm:h-12 fill-current text-gray-50">
          <path d="M0,120 C150,60 350,0 600,30 C850,60 1050,120 1200,90 L1200,120 Z"></path>
        </svg>
      </div>
    </div>
  );
};