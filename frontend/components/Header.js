'use client';

import { useState } from 'react';

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    setLogoError(true);
  };
  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-800 text-white py-1 px-2">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 mb-1 sm:mb-0">
            <span>📅 ସେପ୍ଟେମ୍ବର ୨୫, ୨୦୨୫</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">☀️ ନୂଆଦିଲ୍ଲୀ: ୨୮°C</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="hover:text-blue-200 transition-colors">
              📺 Live TV
            </button>
            <span className="hidden sm:inline">|</span>
            <button className="hover:text-blue-200 transition-colors">
              📧 E-Paper
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-12 sm:w-20 sm:h-16 flex-shrink-0">
              {!logoError ? (
                <img 
                  src="/srishti-logo.png" 
                  alt="SRISHTI NEWS Logo" 
                  className="w-full h-full object-contain"
                  onError={handleLogoError}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-900 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg sm:text-xl">SRISHTI</div>
                    <div className="text-red-500 font-bold text-xs sm:text-sm">NEWS</div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 font-serif">
                SRISHTI NEWS
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ ସମାଚାର ସାଥୀ କହିବେ ଆପଣଙ୍କ କଥା</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="flex-1 lg:flex-initial">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ସନ୍ଧାନ କରନ୍ତୁ..."
                  className="w-full lg:w-80 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-100 border-t">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-start py-2 px-4">
            <div className="flex flex-wrap gap-1 sm:gap-2 justify-center lg:justify-start">
              {[
                "ମୁଖ୍ୟ ପୃଷ୍ଠା",
                "ରାଜ୍ୟ",
                "ଦେଶ",
                "ଅନ୍ତର୍ଜାତୀୟ",
                "କ୍ରୀଡ଼ା",
                "ମନୋରଞ୍ଜନ",
                "ବ୍ୟବସାୟ",
                "ପ୍ରଯୁକ୍ତି",
                "ଶିକ୍ଷା"
              ].map((item) => (
                <button
                  key={item}
                  className="px-3 py-2 text-xs sm:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors rounded whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
