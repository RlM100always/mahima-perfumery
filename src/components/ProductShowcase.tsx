import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, CheckCircle, Eye } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

interface ProductVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  views: number;
  likes: number;
  productName: string;
  price: number;
}

const productVideos: ProductVideo[] = [
  {
    id: '1',
    title: 'Aroma Sauvage Premium - পারফরমেন্স টেস্ট',
    description: 'দেখুন কিভাবে ১২ ঘন্টা পর্যন্ত টিকে থাকে আমাদের প্রিমিয়াম পারফিউম',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg',
    duration: '2:15',
    views: 15420,
    likes: 1250,
    productName: 'Aroma Sauvage Premium',
    price: 6500
  },
  {
    id: '2',
    title: 'Aroma Good Girl Elite - আনবক্সিং ও রিভিউ',
    description: 'প্রিমিয়াম প্যাকেজিং এবং অরিজিনাল কোয়ালিটি দেখুন',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg',
    duration: '3:45',
    views: 22100,
    likes: 1890,
    productName: 'Aroma Good Girl Elite',
    price: 5800
  },
  {
    id: '3',
    title: 'Aroma Bleu Royal - সুগন্ধের গভীরতা',
    description: 'উডি-অ্যারোমাটিক নোটের বিশ্লেষণ এবং পারফরমেন্স',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1961794/pexels-photo-1961794.jpeg',
    duration: '4:20',
    views: 18750,
    likes: 1560,
    productName: 'Aroma Bleu Royal',
    price: 7200
  },
  {
    id: '4',
    title: 'Aroma Libre Luxury - মহিলাদের পছন্দের সুগন্ধ',
    description: 'ল্যাভেন্ডার ও ভ্যানিলার মিশ্রণে তৈরি এই অসাধারণ পারফিউম',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1190830/pexels-photo-1190830.jpeg',
    duration: '3:10',
    views: 25600,
    likes: 2100,
    productName: 'Aroma Libre Luxury',
    price: 6800
  }
];

export const ProductShowcase: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());

  const handlePlayPause = (videoId: string) => {
    if (playingVideo === videoId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = (videoId: string) => {
    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(videoId)) {
      newMutedVideos.delete(videoId);
    } else {
      newMutedVideos.add(videoId);
    }
    setMutedVideos(newMutedVideos);
  };

  const handleOrderProduct = (productName: string, price: number) => {
    const message = `আমি ${productName} অর্ডার করতে চাই। দাম: ৳${price}`;
    const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            প্রোডাক্ট <span className="text-purple-600">শোকেস</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের পণ্যের বিস্তারিত ভিডিও দেখুন এবং কোয়ালিটি সম্পর্কে নিশ্চিত হন
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {productVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Video Section */}
              <div className="relative aspect-video bg-gray-900">
                {playingVideo === video.id ? (
                  <video
                    className="w-full h-full object-cover"
                    src={video.videoUrl}
                    autoPlay
                    muted={mutedVideos.has(video.id)}
                    onEnded={() => setPlayingVideo(null)}
                    controls={false}
                  />
                ) : (
                  <div
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => handlePlayPause(video.id)}
                  >
                    <OptimizedImage
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <Play className="h-6 w-6 text-purple-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                )}

                {/* Video Controls */}
                {playingVideo === video.id && (
                  <div className="absolute bottom-2 left-2 flex space-x-2">
                    <button
                      onClick={() => handlePlayPause(video.id)}
                      className="w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <Pause className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleMute(video.id)}
                      className="w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      {mutedVideos.has(video.id) ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span>{video.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-purple-600 font-semibold">
                    ৳{video.price.toLocaleString()}
                  </div>
                </div>

                {/* Product Info */}
                <div className="bg-purple-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-900">
                      {video.productName}
                    </span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderProduct(video.productName, video.price)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
                >
                  এখনই অর্ডার করুন
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              আরও ভিডিও দেখতে চান?
            </h3>
            <p className="text-gray-600 mb-6">
              আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন এবং নতুন প্রোডাক্ট ভিডিও পেতে থাকুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@mahimaperfumery"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                ইউটিউব চ্যানেল
              </a>
              <a
                href="https://wa.me/8801700000000?text=আমি আরও প্রোডাক্ট ভিডিও দেখতে চাই"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp এ যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};