import React from 'react';
import { Award, Users, Clock, Heart, Shield, Truck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'প্রিমিয়াম কোয়ালিটি',
      description: 'আমরা শুধুমাত্র সর্বোচ্চ মানের উপাদান ব্যবহার করি আমাদের পারফিউম তৈরিতে।'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: '৫০০০+ সন্তুষ্ট গ্রাহক',
      description: 'আমাদের পণ্যের উপর আস্থা রাখেন হাজারো গ্রাহক, যারা নিয়মিত আমাদের বেছে নেন।'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: 'দীর্ঘস্থায়ী সুগন্ধ',
      description: 'আমাদের পারফিউম ৮-১২ ঘন্টা পর্যন্ত টিকে থাকে, যা আপনাকে সারাদিন আত্মবিশ্বাসী রাখবে।'
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      title: 'গ্রাহক সেবা',
      description: 'আমাদের ডেডিকেটেড টিম সর্বদা আপনার সেবায় নিয়োজিত, যেকোনো প্রয়োজনে।'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'নিরাপদ ও প্রাকৃতিক',
      description: 'ত্বকের জন্য নিরাপদ এবং প্রাকৃতিক উপাদান ব্যবহার করে তৈরি আমাদের সব পণ্য।'
    },
    {
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      title: 'দ্রুত ডেলিভারি',
      description: 'সারা বাংলাদেশে দ্রুত ও নিরাপদ ডেলিভারি সেবা প্রদান করি আমরা।'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            আমাদের <span className="text-purple-600">পরিচয়</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mahima Perfumery Co. একটি বিশ্বস্ত ব্র্যান্ড যা স্টুডেন্ট ও পেশাজীবীদের জন্য 
            সাশ্রয়ী মূল্যে প্রিমিয়াম কোয়ালিটির পারফিউম সরবরাহ করে থাকে।
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">আমাদের গল্প</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ২০২০ সালে আমাদের যাত্রা শুরু হয়েছিল একটি সাধারণ লক্ষ্য নিয়ে - 
                প্রতিটি মানুষের কাছে গুণগত পারফিউম সাশ্রয়ী মূল্যে পৌঁছে দেওয়া।
              </p>
              <p>
                আমরা লক্ষ্য করেছিলাম যে বাজারে উন্নত মানের পারফিউমের দাম অনেক বেশি, 
                যা স্টুডেন্ট ও নতুন পেশাজীবীদের নাগালের বাইরে। এই সমস্যার সমাধানে 
                আমরা শুরু করি Aroma কালেকশন।
              </p>
              <p>
                আজ আমরা গর্বিত যে ৫০০০+ গ্রাহক আমাদের উপর আস্থা রেখেছেন এবং 
                আমাদের পণ্য ব্যবহার করে নিজেদের আত্মবিশ্বাস বাড়িয়েছেন।
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg"
              alt="Our Story"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">৪+ বছর</div>
                <div className="text-sm">অভিজ্ঞতা</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের লক্ষ্য</h3>
            <p className="text-gray-700 leading-relaxed">
              প্রতিটি স্টুডেন্ট ও পেশাজীবীর কাছে প্রিমিয়াম কোয়ালিটির পারফিউম সাশ্রয়ী মূল্যে 
              পৌঁছে দেওয়া এবং তাদের আত্মবিশ্বাস ও ব্যক্তিত্ব বৃদ্ধিতে সহায়তা করা।
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
            <p className="text-gray-700 leading-relaxed">
              বাংলাদেশের প্রতিটি জেলায় Mahima Perfumery এর নাম পৌঁছে দেওয়া এবং 
              আন্তর্জাতিক মানের পারফিউম স্থানীয় ভাবে উৎপাদন করে দেশের অর্থনীতিতে অবদান রাখা।
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            কেন <span className="text-purple-600">আমাদের</span> বেছে নেবেন?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">আমাদের মূল্যবোধ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">সততা</h3>
              <p className="text-purple-100">
                আমরা সর্বদা সৎ ও স্বচ্ছভাবে ব্যবসা পরিচালনা করি।
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">গুণগত মান</h3>
              <p className="text-purple-100">
                কোয়ালিটিতে কোনো প্রকার আপস করি না আমরা।
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">গ্রাহক সেবা</h3>
              <p className="text-purple-100">
                গ্রাহক সন্তুষ্টিই আমাদের প্রধান লক্ষ্য।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};