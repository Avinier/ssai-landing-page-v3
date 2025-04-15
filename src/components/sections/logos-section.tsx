"use client";

import { useState } from "react";
import ScrollAnimation from "@/components/util/scroll-animation";

const LogosSection = () => {
  const [activeCategory, setActiveCategory] = useState("AI Apps");

  const logos = [
    {
      name: "Runway",
      text: "build times went from 7m to 40s.",
      logoPath: "https://web-assets.same.dev/1014641169/2065824672.svg+xml",
    },
    {
      name: "Leonardo AI",
      text: "saw a 95% reduction in page load times.",
      logoPath: "https://web-assets.same.dev/2852969483/568545523.svg+xml",
    },
    {
      name: "Zapier",
      text: "saw 24x faster builds.",
      logoPath: "https://web-assets.same.dev/3380389822/3852659320.svg+xml",
    },
  ];

  // Additional logos that just show up in the marquee
  const additionalLogos = [
    { name: "Adobe", path: "https://web-assets.same.dev/3805056730/3665662924.svg+xml" },
    { name: "Chick-fil-A", path: "https://web-assets.same.dev/3726033089/2786626439.svg+xml" },
    { name: "Stripe", path: "https://web-assets.same.dev/1727097886/4191843970.svg+xml" },
    { name: "Box", path: "https://web-assets.same.dev/2541535306/3692273084.svg+xml" },
    { name: "Sonos", path: "https://web-assets.same.dev/3955027573/1577526629.svg+xml" },
  ];

  const categories = ["AI Apps", "Web Apps", "Ecommerce", "Marketing", "Platforms"];

  // Content for the different categories
  const categoryContent = {
    "AI Apps": "Get started using our pre-built templates. Easily stream long-running LLM responses for a better user experience with zero-config infrastructure that's always globally performant.",
    "Web Apps": "Build powerful web applications with our optimized infrastructure. Enjoy zero-config deployments, automatic HTTPS, and global CDN for lightning-fast load times.",
    "Ecommerce": "Create high-converting shopping experiences with our ecommerce-optimized platform. Benefit from global edge caching and image optimization designed for product showcases.",
    "Marketing": "Launch marketing campaigns faster with our streamlined workflows. From landing pages to campaign sites, deploy globally with built-in analytics and SEO optimization.",
    "Platforms": "Build and scale custom platforms with enterprise-grade reliability. Our infrastructure handles the complexity so you can focus on creating distinctive experiences.",
  };

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          {/* Logo marquee - animated continuous scroll */}
          <div className="relative overflow-hidden mb-12">
            <div className="flex space-x-16 animate-marquee">
              {[...additionalLogos, ...additionalLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 h-12 w-24 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.path}
                    alt={`${logo.name} logo`}
                    className="max-h-8 max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main featured logos with text */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 group hover-lift"
              >
                <div className="h-8 w-32 flex items-center justify-center">
                  <img
                    src={logo.logoPath}
                    alt={`${logo.name} logo`}
                    className="max-h-8 max-w-full"
                  />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          {/* Buttons for different categories with active state */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gray-200 text-gray-800 shadow-sm transform scale-105"
                    : "bg-transparent text-gray-500 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center transition-all duration-500 min-h-[4rem]">
            <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto">
              {categoryContent[activeCategory as keyof typeof categoryContent]}
            </p>

            <div className="mt-6 text-center">
              <a
                href={`/${activeCategory.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 relative group"
              >
                Deploy {activeCategory} in seconds
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Background decorations */}
      <div className="absolute left-0 top-10 w-64 h-64 bg-blue-100 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute right-0 bottom-10 w-64 h-64 bg-pink-100 rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default LogosSection;

// Add this to your globals.css
/*
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
*/
