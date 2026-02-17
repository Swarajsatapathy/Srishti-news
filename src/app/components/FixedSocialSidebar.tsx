"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function FixedSocialSidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/sharer/sharer.php?u=https://srishtinews.com",
      bgColor: "#3c589a",
      iconName: "facebook",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      bgColor: "#53beee",
      iconName: "instagram",
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/intent/tweet?text=Check%20out%20SRISHTI%20NEWS&url=https://srishtinews.com",
      bgColor: "#2a2a2a",
      iconName: "twitter",
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?text=Check%20out%20SRISHTI%20NEWS%20https://srishtinews.com",
      bgColor: "#55eb4c",
      iconName: "whatsapp",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/sharing/share-offsite/?url=https://srishtinews.com",
      bgColor: "#0077b5",
      iconName: "linkedin",
    },
    {
      name: "Telegram",
      href: "https://telegram.me/share/url?url=https://srishtinews.com&text=Check%20out%20SRISHTI%20NEWS",
      bgColor: "#3da5f1",
      iconName: "telegram",
    },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 z-50 left-0">
      <div className="flex items-start">
        {/* Social Media Icons Container */}
        <div
          className={`bg-white shadow-lg rounded-r-lg overflow-hidden transition-all duration-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ width: "40px" }}
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
                className="block w-10 h-10 hover:opacity-80 transition-opacity duration-200 text-white"
                style={{ backgroundColor: social.bgColor }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Icon
                    name={social.iconName}
                    className="text-lg w-5 h-5" // Added fixed size class for Icon
                    label={social.name}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Toggle Arrow - Always Visible */}
        <div
          onClick={toggleVisibility}
          className={`bg-gray-600 text-white cursor-pointer hover:bg-gray-700 transition-all duration-300 flex items-center justify-center w-6 h-8 rounded-r shadow-lg ${
            isVisible ? "ml-0" : "-ml-10"
          }`}
          title={isVisible ? "Hide" : "Show"}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${
              isVisible ? "rotate-0" : "rotate-180"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
