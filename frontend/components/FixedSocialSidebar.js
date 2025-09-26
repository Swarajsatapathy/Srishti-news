'use client';

import { useState } from 'react';

export default function FixedSocialSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/sharer/sharer.php?u=https://srishtinews.com',
      bgColor: '#3c589a',
      icon: (
        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 42 42">
          <path d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      bgColor: '#53beee',
      icon: (
        <svg version="1.1" viewBox="-10 -10 148 148" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M86,112H42c-14.336,0-26-11.663-26-26V42c0-14.337,11.664-26,26-26h44c14.337,0,26,11.663,26,26v44 C112,100.337,100.337,112,86,112z M42,24c-9.925,0-18,8.074-18,18v44c0,9.925,8.075,18,18,18h44c9.926,0,18-8.075,18-18V42 c0-9.926-8.074-18-18-18H42z" fill="#fff"/>
            <path d="M64,88c-13.234,0-24-10.767-24-24c0-13.234,10.766-24,24-24s24,10.766,24,24C88,77.233,77.234,88,64,88z M64,48c-8.822,0-16,7.178-16,16s7.178,16,16,16c8.822,0,16-7.178,16-16S72.822,48,64,48z" fill="#fff"/>
            <circle cx="89.5" cy="38.5" fill="#fff" r="5.5"/>
          </g>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/intent/tweet?text=Check%20out%20SRISHTI%20NEWS&url=https://srishtinews.com',
      bgColor: '#2a2a2a',
      icon: (
        <svg width="100%" height="100%" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="#fff" d="M21.751 7h3.067l-6.7 7.658L26 25.078h-6.172l-4.833-6.32-5.531 6.32h-3.07l7.167-8.19L6 7h6.328l4.37 5.777L21.75 7Zm-1.076 16.242h1.7L11.404 8.74H9.58l11.094 14.503Z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://api.whatsapp.com/send?text=Check%20out%20SRISHTI%20NEWS%20https://srishtinews.com',
      bgColor: '#55eb4c',
      icon: (
        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-6 -5 40 40">
          <path stroke="#fff" strokeWidth="2" fill="none" d="M 11.579798566743314 24.396926207859085 A 10 10 0 1 0 6.808479557110079 20.73576436351046"/>
          <path d="M 7 19 l -1 6 l 6 -1" stroke="#fff" strokeWidth="2" fill="none"/>
          <path d="M 10 10 q -1 8 8 11 c 5 -1 0 -6 -1 -3 q -4 -3 -5 -5 c 4 -2 -1 -5 -1 -4" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/sharing/share-offsite/?url=https://srishtinews.com',
      bgColor: '#0077b5',
      icon: (
        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32">
          <path d="M6.227 12.61h4.19v13.48h-4.19V12.61zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187V12.61z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: 'https://telegram.me/share/url?url=https://srishtinews.com&text=Check%20out%20SRISHTI%20NEWS',
      bgColor: '#3da5f1',
      icon: (
        <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32">
          <path fill="#fff" d="M25.515 6.896L6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"/>
        </svg>
      )
    }
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex items-start">
        {/* Social Media Icons Container */}
        <div 
          className={`bg-white shadow-lg rounded-r-lg overflow-hidden transition-all duration-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
          style={{ width: '40px' }}
        >
          <div className="flex flex-col">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="nofollow noopener"
                title={social.name}
                aria-label={social.name}
                className="block w-10 h-10 hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundColor: social.bgColor }}
              >
                <div className="w-full h-full p-1">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Toggle Arrow - Always Visible */}
        <div 
          onClick={toggleVisibility}
          className={`bg-gray-600 text-white cursor-pointer hover:bg-gray-700 transition-all duration-300 flex items-center justify-center w-6 h-8 rounded-r shadow-lg ${
            isVisible ? 'ml-0' : '-ml-10'
          }`}
          title={isVisible ? 'Hide' : 'Show'}
        >
          <svg 
            className={`w-3 h-3 transition-transform duration-300 ${
              isVisible ? 'rotate-0' : 'rotate-180'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}