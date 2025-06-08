import React from 'react';
import { Star, MapPin, Phone, Mail, MessageCircle, Facebook, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-purple-400 mr-2" />
              <div>
                <h3 className="text-xl font-bold">Mahima Perfumery</h3>
                <p className="text-sm text-purple-300">Premium Fragrances</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              স্টুডেন্ট ও পেশাজীবীদের জন্য সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির পারফিউম। 
              আমাদের লক্ষ্য প্রতিটি গ্রাহকের কাছে সেরা সুগন্ধ পৌঁছে দেওয়া।
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/mahimaperfumery" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/8801700000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">হোম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">প্রোডাক্ট</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">কাস্টমার রিভিউ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ক্যাটেগরি</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">পুরুষদের পারফিউম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">মহিলাদের পারফিউম</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">পাইকারি বিক্রয়</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">খুচরা বিক্রয়</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">গিফট প্যাকেজ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">+880 1700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">info@mahimaperfumery.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                <span className="text-gray-300">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">সকাল ৯টা - রাত ৯টা</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Mahima Perfumery Co. সর্বস্বত্ব সংরক্ষিত। | ডিজাইন ও ডেভেলপমেন্ট
          </p>
        </div>
      </div>
    </footer>
  );
};