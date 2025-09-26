'use client';

import { useState, useEffect } from 'react';

export default function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const breakingNews = [
    "ଖୁବେତର ଖୁବର: ଅନୁବିର ଖୁବରେର କମଳ କାମାନ୍ମା ।",
    "ସମ୍ବାଦ: ଆଜିସ୍ଥ ନିର୍ବାଚନ ରୋଚ, ଦୋହୋ ମିତ ପ୍ରକାଶନ ବର୍ତ୍ତ",
    "ଶ୍ରୀମନ୍ତ ମତ ହୋ ଖୋଲିଲା ବୟାକୁ ବୁହାରା ବର୍ମାରା ହ କ ରୁ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === breakingNews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [breakingNews.length]);

  return (
    <div className="bg-white border-t-2 border-red-600 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center py-2 px-4">
          {/* Breaking News Label */}
          <div className="flex items-center bg-red-600 text-white px-3 py-1 rounded-r flex-shrink-0">
            <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="3"/>
            </svg>
            <span className="font-bold text-sm">Top Stories</span>
          </div>

          {/* Scrolling News */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div className="flex animate-scroll-news">
              <span className="text-gray-800 text-sm whitespace-nowrap">
                {breakingNews[currentIndex]}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <button 
              onClick={() => setCurrentIndex(currentIndex === 0 ? breakingNews.length - 1 : currentIndex - 1)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setCurrentIndex(currentIndex === breakingNews.length - 1 ? 0 : currentIndex + 1)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}