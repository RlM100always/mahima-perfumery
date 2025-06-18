import React from 'react';
import { Helmet } from 'react-helmet';
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
      description: 'আমাদের পারফিউম ১০-২০ ঘন্টা পর্যন্ত টিকে থাকে, যা আপনাকে সারাদিন আত্মবিশ্বাসী রাখবে।'
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
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>আমাদের সম্পর্কে | Mahima Perfumery Co.</title>
        <meta
          name="description"
          content="Mahima Perfumery Co. বাংলাদেশের সেরা পারফিউম ব্র্যান্ড যা প্রিমিয়াম মানের ঘ্রাণ সাশ্রয়ী মূল্যে সরবরাহ করে। আমাদের সম্পর্কে আরও জানুন।"
        />
         <meta
name="keywords"
  content="perfume price in Bangladesh, Mahima Perfumery, perfume Bangladesh, budget perfume BD, long-lasting perfume, unisex perfume, online perfume store ,long lasting perfume for men, best perfume for women, attar for men, branded perfume in BD, original perfume BD, cheap perfume in Bangladesh, pocket perfume BD, Perfume shop Bangladesh, Low price perfume in bangladesh, Top 10 Perfume brands for male in bangladesh with price, Men Perfume price in bangladesh, Top 10 perfume in bangladesh with price, wholesale perfume, wholesale perfume in bd, wholesale perfume in bangladesh, paikari perfume, পাইকারি পারফিউম, খুচরা পারফিউম, জনপ্রিয় পারফিউম, পারফিউম হাব বাংলাদেশ, রিসেলার পারফিউম, পাইকারি পারফিউম এর দাম, পারফিউম বিজনেস, সুগন্ধি প্রাইস ইন বাংলাদেশ, কম দামি পারফিউম, ৫-৮ ঘন্টা স্থায়ী পারফিউম, ১০-২০ ঘন্টা স্থায়ী পারফিউম, ১-২ দিন স্থায়ী পারফিউম, বেস্ট পারফিউম প্রস্ততকারক ইন বাংলাদেশ, ভালো মানের পারফিউম, কম দামের ভালো মানের পারফিউম, low price good quality perfumes, Students budget friendly perfumes in bd, Budget friendly perfumes in bd, বাজেট ফ্রেন্ডলি পারফিউম, বেস্ট রিভিউ পারফিউম, bd perfume, oud perfume price in BD, musk perfume BD, sweet perfume for women BD, spicy perfume for men, best perfume under 1000 in Bangladesh, perfume under 500 taka, affordable perfume BD, best perfume for women in Bangladesh, body spray for girls BD, floral perfume for women, wholesale oud perfume BD, wholesale attar BD, পাইকারি আরবী পারফিউম, পাইকারি অটারের দাম, পারফিউম রিসেলার BD, artisanal perfume Bangladesh, eco‑friendly perfume BD, halal perfume Bangladesh, perfume decants BD, perfume balm wax BD, perfume shop BD, perfume store Dhaka, online perfume Bangladesh, discount perfume outlet BD, perfume mall BD, perfume under 500 BD, perfume under 1000 BD, cheap EDP BD, discount perfume BD, budget perfume online Bangladesh, body mist BD, body spray BD, unisex perfume BD, women’s floral EDP BD, floral perfume BD, jasmine perfume Bangladesh, rose scent perfume BD, citrus perfume BD, oud perfume BD, sandalwood perfume BD, patchouli perfume Bangladesh, amber perfume BD, vanilla perfume BD, chocolate musk perfume BD"
/>
        <link rel="canonical" href="https://www.mahimaperfumery.com" />
        <meta property="og:title" content="আমাদের সম্পর্কে | Mahima Perfumery" />
        <meta
          property="og:description"
          content="জানুন কীভাবে Mahima Perfumery Co. বাংলাদেশের মানুষের মাঝে সাশ্রয়ী ও দীর্ঘস্থায়ী পারফিউম পৌঁছে দিচ্ছে।"
        />
        <meta property="og:url" content="https://www.mahimaperfumery.com" />
        <meta
          property="og:image"
          content="/public/logo.png"
        />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            আমাদের <span className="text-purple-600">পরিচয়</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mahima Perfumery Co. একটি বিশ্বস্ত বাংলাদেশি ব্র্যান্ড, যারা স্টুডেন্ট ও পেশাজীবীদের জন্য সাশ্রয়ী মূল্যে
            প্রিমিয়াম পারফিউম সরবরাহ করে।
          </p>
        </header>

        {/* Our Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <article className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">আমাদের গল্প</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ২০২২ সালে আমাদের যাত্রা শুরু হয়েছিল একটি সাধারণ লক্ষ্য নিয়ে - প্রতিটি মানুষের কাছে গুণগত পারফিউম সাশ্রয়ী মূল্যে পৌঁছে দেওয়া।
              </p>
              <p>
                বাজারে উন্নত মানের পারফিউমের দাম অনেক বেশি ছিল, যা স্টুডেন্ট ও নতুন পেশাজীবীদের জন্য ব্যয়বহুল। আমরা তৈরি করি Aroma কালেকশন — একটি মানসম্মত ঘ্রাণের সমাধান।
              </p>
              <p>
                আজ আমাদের ৫০০০+ সন্তুষ্ট গ্রাহক রয়েছেন, যারা আমাদের ঘ্রাণ ব্যবহার করে আত্মবিশ্বাস অর্জন করেছেন।
              </p>
            </div>
          </article>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg"
              alt="Mahima Perfumery Story - perfume Bangladesh"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">৩+ বছর</div>
                <div className="text-sm">অভিজ্ঞতা</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের লক্ষ্য</h3>
            <p className="text-gray-700 leading-relaxed">
              বাংলাদেশের প্রতিটি স্টুডেন্ট ও পেশাজীবীর কাছে মানসম্মত ও বাজেট-ফ্রেন্ডলি পারফিউম পৌঁছে দেওয়া।
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
            <p className="text-gray-700 leading-relaxed">
              বাংলাদেশের প্রতিটি ঘরে পৌঁছানো এবং দেশীয় উৎপাদিত পারফিউম বিশ্বমঞ্চে তুলে ধরা।
            </p>
          </div>
        </section>

        {/* Why Choose Us Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            কেন <span className="text-purple-600">আমাদের</span> বেছে নেবেন?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <article
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
              </article>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">আমাদের মূল্যবোধ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article>
              <h3 className="text-xl font-semibold mb-2">সততা</h3>
              <p className="text-purple-100">আমরা সর্বদা সৎ ও স্বচ্ছভাবে ব্যবসা পরিচালনা করি।</p>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2">গুণগত মান</h3>
              <p className="text-purple-100">কোয়ালিটিতে কোনো প্রকার আপস করি না আমরা।</p>
            </article>
            <article>
              <h3 className="text-xl font-semibold mb-2">গ্রাহক সেবা</h3>
              <p className="text-purple-100">গ্রাহক সন্তুষ্টিই আমাদের প্রধান লক্ষ্য।</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};
