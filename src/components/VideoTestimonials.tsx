import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, CheckCircle, MessageCircle } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  customerName: string;
  productName: string;
  rating: number;
  videoUrl: string;
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
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    duration: '0:45',
    verified: true,
    location: 'ঢাকা'
  },
  {
    id: '2',
    customerName: 'সারা খান',
    productName: 'Aroma Rose Gold',
    rating: 5,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    duration: '1:12',
    verified: true,
    location: 'চট্টগ্রাম'
  },
  {
    id: '3',
    customerName: 'মাহবুব রহমান',
    productName: 'Aroma Premium',
    rating: 5,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    duration: '0:38',
    verified: true,
    location: 'সিলেট'
  },
  {
    id: '4',
    customerName: 'নাদিয়া ইসলাম',
    productName: 'Aroma Floral',
    rating: 5,
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    thumbnailUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    duration: '0:52',
    verified: true,
    location: 'রাজশাহী'
  }
];

export const VideoTestimonials: React.FC = () => {
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
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Video Section */}
              <div className="relative aspect-video bg-gray-900">
                {playingVideo === testimonial.id ? (
                  <video
                    className="w-full h-full object-cover"
                    src={testimonial.videoUrl}
                    autoPlay
                    muted={mutedVideos.has(testimonial.id)}
                    onEnded={() => setPlayingVideo(null)}
                    controls={false}
                  />
                ) : (
                  <div
                    className="relative w-full h-full bg-cover bg-center cursor-pointer group"
                    style={{ backgroundImage: `url(${testimonial.thumbnailUrl})` }}
                    onClick={() => handlePlayPause(testimonial.id)}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <Play className="h-6 w-6 text-purple-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {testimonial.duration}
                    </div>
                  </div>
                )}

                {/* Video Controls */}
                {playingVideo === testimonial.id && (
                  <div className="absolute bottom-2 left-2 flex space-x-2">
                    <button
                      onClick={() => handlePlayPause(testimonial.id)}
                      className="w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <Pause className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleMute(testimonial.id)}
                      className="w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      {mutedVideos.has(testimonial.id) ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </button>
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
              </div>
            </div>
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
                href="https://wa.me/8801700000000?text=আমি ভিডিও রিভিউ দিতে চাই"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp এ পাঠান</span>
              </a>
              <a
                href="mailto:info@mahimaperfumery.com?subject=ভিডিও রিভিউ"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                ইমেইল করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};