import React from 'react';
import { Star, MapPin, Phone, Mail, MessageCircle, Facebook, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mr-2" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Mahima Perfumery</h3>
                <p className="text-xs sm:text-sm text-purple-300">Premium Fragrances</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              স্টুডেন্ট ও পেশাজীবীদের জন্য সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির পারফিউম। 
              আমাদের লক্ষ্য প্রতিটি গ্রাহকের কাছে সেরা সুগন্ধ পৌঁছে দেওয়া।
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a 
                href="https://facebook.com/mahimaperfumery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-400/10 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-400/10 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">হোম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">প্রোডাক্ট</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">কাস্টমার রিভিউ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">ক্যাটেগরি</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">পুরুষদের পারফিউম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">মহিলাদের পারফিউম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">পাইকারি বিক্রয়</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">খুচরা বিক্রয়</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">গিফট প্যাকেজ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+880 1700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@mahimaperfumery.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">সকাল ৯টা - রাত ৯টা</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Mahima Perfumery Co. সর্বস্বত্ব সংরক্ষিত। | ডিজাইন ও ডেভেলপমেন্ট
          </p>
        </div>
      </div>
    </footer>
  );
};