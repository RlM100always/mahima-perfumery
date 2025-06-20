import { Product } from '../types';

export const products: Product[] = [
 {
  id: '1',
  name: 'Aroma Sauvage Premium',
  category: 'package',
  gender: 'men',
  price: '',
  originalPrice: '',
  ml: 15,
  color: 'Blue',
  images: [
    'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    'https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
  ],
  video: '',
  videoType: 'facebook',
  description: `ফ্রেশ, স্পাইসি ও মাসকুলিন ঘ্রাণ। পুরুষদের জন্য আদর্শ একটি প্রিমিয়াম পারফিউম।

পারফিউমের গুরুত্ব (Perfume er Gurutto):
১. ব্যক্তিত্বের প্রকাশ: একটি ভালো ঘ্রাণ ব্যক্তির ব্যক্তিত্বকে আরও আকর্ষণীয় করে তোলে। এটি আত্মবিশ্বাস বাড়াতে সাহায্য করে এবং মানুষকে সহজে প্রভাবিত করতে পারে।
২. স্মৃতি তৈরি করে: সুগন্ধি অনেক সময় কোনো বিশেষ মুহূর্ত বা মানুষের সঙ্গে স্মৃতির যোগসূত্র গড়ে তোলে। মানুষ ঘ্রাণের মাধ্যমে পুরনো স্মৃতিতে ফিরে যেতে পারে।
৩. মনের প্রশান্তি দেয়: অনেক পারফিউমে এমন উপাদান থাকে যা মানসিক চাপ কমাতে সাহায্য করে এবং মনকে প্রশান্ত করে তোলে।
৪. খারাপ গন্ধ দূর করে: ঘাম বা শরীরের অন্যান্য প্রাকৃতিক গন্ধ ঢেকে রাখতে পারফিউম কার্যকর ভূমিকা পালন করে।
৫. আকর্ষণ সৃষ্টি করে: একটি মনোমুগ্ধকর ঘ্রাণ অন্যদের কাছে আপনাকে আকর্ষণীয় করে তুলতে পারে। এটি সামাজিক সম্পর্ক তৈরিতেও সহায়ক।`,
  features: ['১০-১২ ঘন্টা স্থায়ী', 'ফ্রেশ ও স্পাইসি', 'প্রিমিয়াম কোয়ালিটি']
},
  {
    id: '2',
    name: 'Aroma Good Girl Elite',
    category: 'retail',
    gender: 'women',
    price: 350,
    originalPrice: 500,
    ml: 30,
    color: 'Black',
    images: [
      
    ],
    video: 'https://youtu.be/EPFN7ARDbz8',
    videoType: 'facebook',
    description: 'মিষ্টি ও স্পাইসি ঘ্রাণ, অনেক জনপ্রিয়। মহিলাদের জন্য একটি আকর্ষণীয় পারফিউম।',
    features: ['৮-১০ ঘন্টা স্থায়ী', 'মিষ্টি ও স্পাইসি', 'জনপ্রিয় ব্র্যান্ড']
  },
  {
    id: '3',
    name: 'Aroma Bleu Royal',
    category: 'wholesale',
    gender: 'men',
    price: 120,
    originalPrice: 150,
    ml: 30,
    color: 'Blue',
    images: [
      'https://github.com/RlM100always/Hisab/blob/main/perfume/WhatsApp%20Image%202025-06-19%20at%2010.30.19_74df208e.jpg?raw=true',
      'https://github.com/RlM100always/Hisab/blob/main/perfume/WhatsApp%20Image%202025-06-19%20at%2010.30.19_8735a196.jpg?raw=true',
      'https://github.com/RlM100always/Hisab/blob/main/perfume/WhatsApp%20Image%202025-06-19%20at%2010.30.22_b99a5e4d.jpg?raw=true'
    ],
    video: 'https://youtube.com/shorts/_SuLrBBg8DI',
    videoType: 'youtube',
    description: 'উডি-অ্যারোমাটিক টাইপ, অফিস এবং ডেটের জন্য পারফেক্ট।',
    features: ['6-8+ ঘন্টা স্থায়ী', 'উডি-অ্যারোমাটিক', 'অফিসের জন্য আদর্শ']
  },
  {
    id: '4',
    name: 'Aroma Libre Luxury',
    category: 'package',
    gender: 'women',
    price: 300,
    originalPrice: 520,
    ml: 30,
    color: 'Gold',
    images: [
      'https://images.pexels.com/photos/1190830/pexels-photo-1190830.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1961793/pexels-photo-1961793.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    video: 'https://www.facebook.com/reel/987654321',
    videoType: 'facebook',
    description: 'ল্যাভেন্ডার ও ভ্যানিলা নোটের কম্বিনেশন। একটি মার্জিত ও আকর্ষণীয় সুগন্ধ।',
    features: ['৯-১১ ঘন্টা স্থায়ী', 'ল্যাভেন্ডার ও ভ্যানিলা', 'প্রিমিয়াম ব্র্যান্ড']
  },
  {
    id: '5',
    name: 'Aroma Y Modern',
    category: 'retail',
    gender: 'men',
    price: 350,
    originalPrice: 550,
    ml: 30,
    color: 'Silver',
    images: [
      'https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    description: 'মডার্ন ফ্রেশ ঘ্রাণ, লং লাস্টিং। তরুণদের জন্য একটি আদর্শ পছন্দ।',
    features: ['৮-১০ ঘন্টা স্থায়ী', 'মডার্ন ফ্রেশ', 'তরুণদের পছন্দ']
  },
  {
    id: '6',
    name: 'Aroma Dylan Marine',
    category: 'wholesale',
    gender: 'men',
    price:  0,
    originalPrice: 7800,
    ml: 60,
    color: 'Blue',
    images: [
      'https://images.pexels.com/photos/1961797/pexels-photo-1961797.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/965993/pexels-photo-965993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    video: 'https://youtu.be/EPFN7ARDbz8',
    videoType: 'youtube',
    description: 'আকর্ষণীয় ফ্রেশ ও মেরিন ঘ্রাণ। সমুদ্রের তাজা বাতাসের মতো সুগন্ধ।',
    features: ['১০-১২ ঘন্টা স্থায়ী', 'ফ্রেশ ও মেরিন', 'আকর্ষণীয় সুগন্ধ']
  },
  {
    id: '7',
    name: 'Aroma Chance Tender',
    category: 'package',
    gender: 'women',
    price: 7500,
    originalPrice: 8000,
    ml: 100,
    color: 'Pink',
    video: 'https://www.facebook.com/watch/?v=tender123',
    videoType: 'facebook',
    description: 'ফ্রুটি ও ফ্লোরাল, ডেইলি ইউজের জন্য পারফেক্ট। মহিলাদের জন্য একটি চমৎকার পছন্দ।',
    features: ['৮-১০ ঘন্টা স্থায়ী', 'ফ্রুটি ও ফ্লোরাল', 'ডেইলি ইউজের জন্য']
  },
  {
    id: '8',
    name: 'Aroma Acqua Profumo',
    category: 'retail',
    gender: 'men',
    price: 6800,
    originalPrice: 8000,
    ml: 75,
    color: 'Blue',
    images: [
      'https://images.pexels.com/photos/1961799/pexels-photo-1961799.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1190832/pexels-photo-1190832.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    video: 'https://youtu.be/EPFN7ARDbz8',
    videoType: 'youtube',
    description: 'ডিপ অ্যাকুয়াটিক ও উডি ঘ্রাণ। একটি গভীর ও আকর্ষণীয় সুগন্ধ।',
    features: ['১১-১৩ ঘন্টা স্থায়ী', 'ডিপ অ্যাকুয়াটিক', 'উডি ঘ্রাণ']
  }
];