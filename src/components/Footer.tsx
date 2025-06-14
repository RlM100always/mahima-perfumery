import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Clock } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleNavigation = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.png" 
                alt="Mahima Perfumery Co." 
                className="h-12 sm:h-16 w-auto mr-3 filter brightness-0 invert"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              স্টুডেন্ট ও পেশাজীবীদের জন্য সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির পারফিউম। 
              আমাদের লক্ষ্য প্রতিটি গ্রাহকের কাছে সেরা সুগন্ধ পৌঁছে দেওয়া।
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61577424651208" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors p-2 hover:bg-blue-400/10 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://whatsapp.com/channel/0029Vb60dOO6WaKeM85xKa44/106" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-green-400/10 rounded-full"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              {[
                { name: 'হোম', key: 'home' },
                { name: 'আমাদের সম্পর্কে', key: 'about' },
                { name: 'প্রোডাক্ট', key: 'home' },
                { name: 'কাস্টমার রিভিউ', key: 'reviews' },
                { name: 'যোগাযোগ', key: 'contact' }
              ].map((item) => (
                <li key={item.key}>
                  <button 
                    onClick={() => handleNavigation(item.key)}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base text-left w-full"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">ক্যাটেগরি</h4>
            <ul className="space-y-2">
              {[
                'পুরুষদের পারফিউম',
                'মহিলাদের পারফিউম',
                'পাইকারি বিক্রয়',
                'খুচরা বিক্রয়',
                'গিফট প্যাকেজ'
              ].map((category) => (
                <li key={category}>
                  <button 
                    onClick={() => handleNavigation('home')}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base text-left w-full"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+880 1700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base break-all">info@mahimaperfumery.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">সকাল ৯টা - রাত ৯টা</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Mahima Perfumery Co. সর্বস্বত্ব সংরক্ষিত। | ডিজাইন ও ডেভেলপমেন্ট
          </p>
        </div>
      </div>
    </footer>
  );
};