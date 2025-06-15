import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'হোম', key: 'home', scrollTo: 'top' },
    { name: 'প্রোডাক্ট', key: 'products', scrollTo: 'products-section' },
    { name: 'আমাদের সম্পর্কে', key: 'about', scrollTo: 'about-section' },
    { name: 'কাস্টমার রিভিউ', key: 'reviews', scrollTo: 'reviews-section' },
    { name: 'যোগাযোগ', key: 'contact', scrollTo: 'contact-section' },
  ];

  // Track scroll position to highlight active section
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = [
        { id: 'top', key: 'home', offset: 0 },
        { id: 'products-section', key: 'products' },
        { id: 'about-section', key: 'about' },
        { id: 'reviews-section', key: 'reviews' },
        { id: 'contact-section', key: 'contact' },
      ];

      const scrollPosition = window.scrollY + 100; // Add offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.id === 'top') {
          if (scrollPosition < 200) {
            setActiveSection(section.key);
            break;
          }
        } else {
          const element = document.getElementById(section.id);
          if (element && scrollPosition >= element.offsetTop - 100) {
            setActiveSection(section.key);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Reset active section when changing pages
  useEffect(() => {
    if (currentPage === 'home') {
      setActiveSection('home');
    } else {
      setActiveSection(currentPage);
    }
  }, [currentPage]);

  const handleNavigation = (item: typeof navigation[0]) => {
    if (currentPage !== 'home') {
      onPageChange('home');
      // Wait for page to load then scroll
      setTimeout(() => {
        scrollToSection(item.scrollTo);
        setActiveSection(item.key);
      }, 100);
    } else {
      scrollToSection(item.scrollTo);
      setActiveSection(item.key);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (item: typeof navigation[0]) => {
    if (currentPage === 'home') {
      return activeSection === item.key;
    }
    return currentPage === item.key;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation(navigation[0])}>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mahima Perfumery</h1>
              <p className="text-xs text-purple-600">Premium Fragrances</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item)
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Contact Icons */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://wa.me/8801825008451"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:+8801825008451"
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                title="Call Us"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item)}
                  className={`text-left px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item)
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex space-x-4 px-3 pt-4 border-t">
                <a
                  href="https://wa.me/8801825008451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+8801825008451"
                  className="flex items-center space-x-2 text-blue-600"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};