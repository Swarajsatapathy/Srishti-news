'use client';

import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoError = () => {
    setLogoError(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar - Similar to apriyasatya.com */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-1 sm:mb-0">
            <span className="text-gray-200">Friday, September 26, 2025</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-200">About Us</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-200">Contact Us</span>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 ml-4">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
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
            <Logo className="w-16 h-12 sm:w-20 sm:h-16" />
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

      {/* Navigation - Similar to apriyasatya.com */}
      <nav className="bg-red-600 shadow-lg relative">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            {[
              { name: "HOME", href: "#", active: true },
              { name: "ସମ୍ପାଦକ କଣ୍ଠ", href: "#" },
              { name: "ସ୍ୱାସ୍ଥ୍ୟ", href: "#" },
              { name: "ଶୋକୱାର୍ଡ", href: "#" },
              { name: "ଧର୍ମକର", href: "#" },
              { name: "ଚଳଚ୍ଚିତ୍ର", href: "#" },
              { name: "ରାଜନୀତି", href: "#" },
              { name: "ଶିକ୍ଷାନୀତି", href: "#" },
              { name: "ସର୍ବଶେଷ", href: "#" },
              { name: "LIVE WITH AMIYA", href: "#", highlight: true }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-3 text-white hover:bg-red-700 transition-all duration-200 font-medium text-sm ${
                  item.active ? 'bg-red-800' : ''
                } ${item.highlight ? 'bg-red-500 hover:bg-red-400' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3">
            <span className="text-white font-medium">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-red-700 border-t border-red-500">
              {[
                { name: "HOME", href: "#", active: true },
                { name: "ସମ୍ପାଦକ କଣ୍ଠ", href: "#" },
                { name: "ସ୍ୱାସ୍ଥ୍ୟ", href: "#" },
                { name: "ଶୋକୱାର୍ଡ", href: "#" },
                { name: "ଧର୍ମକର", href: "#" },
                { name: "ଚଳଚ୍ଚିତ୍ର", href: "#" },
                { name: "ରାଜନୀତି", href: "#" },
                { name: "ଶିକ୍ଷାନୀତି", href: "#" },
                { name: "ସର୍ବଶେଷ", href: "#" },
                { name: "LIVE WITH AMIYA", href: "#", highlight: true }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-white hover:bg-red-600 transition-colors font-medium text-sm border-b border-red-600 ${
                    item.active ? 'bg-red-800' : ''
                  } ${item.highlight ? 'bg-red-500 hover:bg-red-400' : ''}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
