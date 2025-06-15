import React, { useState, memo } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  customerName: string;
  productName: string;
  rating: number;
  videoUrl: string;
  videoType: 'youtube' | 'facebook' | 'direct';
  thumbnailUrl: string;
  duration: string;
  verified: boolean;
  location: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    customerName: 'রাহুল আহমেদ',
    productName: 'Aroma Black Edition',
    rating: 5,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoType: 'youtube',
    thumbnailUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '0:45',
    verified: true,
    location: 'ঢাকা'
  },
  {
    id: '2',
    customerName: 'সারা খান',
    productName: 'Aroma Rose Gold',
    rating: 5,
    videoUrl: 'https://www.facebook.com/watch/?v=123456789',
    videoType: 'facebook',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '1:12',
    verified: true,
    location: 'চট্টগ্রাম'
  },
  {
    id: '3',
    customerName: 'মাহবুব রহমান',
    productName: 'Aroma Premium',
    rating: 5,
    videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
    videoType: 'youtube',
    thumbnailUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '0:38',
    verified: true,
    location: 'সিলেট'
  },
  {
    id: '4',
    customerName: 'নাদিয়া ইসলাম',
    productName: 'Aroma Floral',
    rating: 5,
    videoUrl: 'https://www.facebook.com/reel/987654321',
    videoType: 'facebook',
    thumbnailUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    duration: '0:52',
    verified: true,
    location: 'রাজশাহী'
  }
];

const VideoTestimonialCard = memo(({ testimonial }: { testimonial: VideoTestimonial }) => {
  const [showVideo, setShowVideo] = useState(false);

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getFacebookVideoId = (url: string) => {
    const regExp = /(?:facebook\.com\/.*\/videos\/|facebook\.com\/watch\/?\?v=|facebook\.com\/reel\/)(\d+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const getEmbedUrl = () => {
    if (testimonial.videoType === 'youtube') {
      const videoId = getYouTubeVideoId(testimonial.videoUrl);
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1` : null;
    } else if (testimonial.videoType === 'facebook') {
      const videoId = getFacebookVideoId(testimonial.videoUrl);
      return videoId ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(testimonial.videoUrl)}&show_text=false&autoplay=true` : null;
    }
    return testimonial.videoUrl;
  };

  const handlePlayVideo = () => {
    if (testimonial.videoType === 'youtube' || testimonial.videoType === 'facebook') {
      setShowVideo(true);
    } else {
      // For direct video links, open in new tab
      window.open(testimonial.videoUrl, '_blank');
    }
  };

  const getYouTubeThumbnail = (url: string) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : testimonial.thumbnailUrl;
  };

  const thumbnailImage = testimonial.videoType === 'youtube' 
    ? getYouTubeThumbnail(testimonial.videoUrl) 
    : testimonial.thumbnailUrl;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Video Section */}
      <div className="relative aspect-video bg-gray-900">
        {showVideo && (testimonial.videoType === 'youtube' || testimonial.videoType === 'facebook') ? (
          <div className="relative w-full h-full">
            <iframe
              src={getEmbedUrl() || ''}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${testimonial.customerName} review`}
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10"
            >
              ✕
            </button>
          </div>
        ) : (
          <div
            className="relative w-full h-full bg-cover bg-center cursor-pointer group"
            style={{ backgroundImage: `url(${thumbnailImage})` }}
            onClick={handlePlayVideo}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="h-6 w-6 text-purple-600 ml-1" />
              </div>
            </div>
            
            {/* Platform Badge */}
            <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
              {testimonial.videoType === 'youtube' && (
                <>
                  <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
                  <span>YouTube</span>
                </>
              )}
              {testimonial.videoType === 'facebook' && (
                <>
                  <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                  <span>Facebook</span>
                </>
              )}
              {testimonial.videoType === 'direct' && (
                <>
                  <ExternalLink className="w-3 h-3" />
                  <span>Video</span>
                </>
              )}
            </div>
            
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {testimonial.duration}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-sm">
            {testimonial.customerName}
          </h3>
          {testimonial.verified && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </div>

        <p className="text-xs text-gray-600 mb-2">
          {testimonial.productName} • {testimonial.location}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < testimonial.rating
                    ? 'text-yellow-500 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* External Link Button */}
          <button
            onClick={() => window.open(testimonial.videoUrl, '_blank')}
            className="text-purple-600 hover:text-purple-700 transition-colors"
            title="মূল ভিডিও দেখুন"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
});

VideoTestimonialCard.displayName = 'VideoTestimonialCard';

export const VideoTestimonials: React.FC = memo(() => {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            গ্রাহকদের <span className="text-purple-600">ভিডিও রিভিউ</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আমাদের সন্তুষ্ট গ্রাহকরা নিজেদের অভিজ্ঞতা শেয়ার করেছেন ভিডিওর মাধ্যমে
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
              <span>YouTube</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
              <span>Facebook</span>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {videoTestimonials.map((testimonial) => (
            <VideoTestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              আপনিও ভিডিও রিভিউ দিন
            </h3>
            <p className="text-gray-600 mb-6">
              আমাদের পণ্য ব্যবহার করে আপনার অভিজ্ঞতা ভিডিওর মাধ্যমে শেয়ার করুন এবং 
              বিশেষ ছাড় পান পরবর্তী অর্ডারে
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8801825008451"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp এ পাঠান</span>
              </a>
              <a
                href="mailto:mahimaperfumery@gmail.com"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                ইমেইল করুন
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">ভিডিও রিভিউ গাইডলাইন:</h4>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• YouTube বা Facebook এ আপলোড করুন</li>
                <li>• পণ্যের নাম ও আপনার অভিজ্ঞতা বলুন</li>
                <li>• ভিডিও লিংক আমাদের পাঠান</li>
                <li>• আমরা আপনার ভিডিও ফিচার করব</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VideoTestimonials.displayName = 'VideoTestimonials';