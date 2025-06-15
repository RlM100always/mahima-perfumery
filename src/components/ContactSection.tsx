import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই যোগাযোগ করব।');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            আমাদের সাথে <span className="text-purple-600">যোগাযোগ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            যেকোনো প্রশ্ন বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সর্বদা আপনার সেবায় প্রস্তুত।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">যোগাযোগের তথ্য</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ফোন</h4>
                    <p className="text-gray-600">+8801825008451</p>
                    <p className="text-sm text-gray-500">সকাল ৯টা - রাত ১২ টা</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">+8801825008451</p>
                    <a 
                      href="https://wa.me/8801825008451" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      এখনই চ্যাট করুন →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ইমেইল</h4>
                    <p className="text-gray-600">mahimaperfumery@gmail.com</p>
                    <p className="text-sm text-gray-500">২৪ ঘন্টার মধ্যে জবাব</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ঠিকানা</h4>
                    <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
                    <p className="text-sm text-gray-500">হোম ডেলিভারি সুবিধা</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">ব্যবসার সময়</h4>
                    <p className="text-gray-600">সকাল ৯:০০ - রাত ১২:০০</p>
                    <p className="text-sm text-gray-500">সাত দিন খোলা</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">সোশ্যাল মিডিয়া</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/MahimaPerfumeryCo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/8801825008451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">বার্তা পাঠান</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    নাম *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    ফোন নম্বর *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="01825008451"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  বিষয় *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">বিষয় নির্বাচন করুন</option>
                  <option value="product-inquiry">পণ্য সম্পর্কে জানতে চাই</option>
                  <option value="order-support">অর্ডার সহায়তা</option>
                  <option value="complaint">অভিযোগ</option>
                  <option value="partnership">পার্টনারশিপ</option>
                  <option value="other">অন্যান্য</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  বার্তা *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="আপনার বার্তা লিখুন..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>বার্তা পাঠান</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            সচরাচর জিজ্ঞাসিত <span className="text-purple-600">প্রশ্ন</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  কীভাবে অর্ডার করব?
                </h4>
                <p className="text-gray-600">
                  আপনি পণ্যের কার্ডে "অর্ডার করুন" বাটনে ক্লিক করে গুগল ফর্ম পূরণ করুন অথবা 
                  WhatsApp এ সরাসরি যোগাযোগ করুন।
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  ডেলিভারি কত দিনে হয়?
                </h4>
                <p className="text-gray-600">
                  ঢাকার ভিতরে ১-২ দিন এবং ঢাকার বাইরে ৩-৫ দিনে ডেলিভারি করা হয়।
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  পেমেন্ট কীভাবে করব?
                </h4>
                <p className="text-gray-600">
                  আমরা ক্যাশ অন ডেলিভারি (COD) সুবিধা প্রদান করি। পণ্য হাতে পেয়ে টাকা দিন।
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  রিটার্ন পলিসি কী?
                </h4>
                <p className="text-gray-600">
                  যদি পণ্যে কোনো সমস্যা থাকে, তাহলে ৭ দিনের মধ্যে রিটার্ন করতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};