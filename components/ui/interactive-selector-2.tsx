'use client';

import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';
import { MdOpacity } from 'react-icons/md';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const options = [
    {
      title: "Fundraise Preparation",
      shortTitle: "Fundraise Preparation",
      description: "Before you hit the market to raise funds, it's vital to be prepared with pitch materials that will pique the curiosity of investors. We craft attractive decks, dynamic models and comprehensive data rooms that make your fund raising journey seamless.",
      bgGradient: "from-purple-600 via-pink-600 to-red-600",
      icon: <FaCampground size={32} className="text-white" />
    },
    {
      title: "Business Valuation ",
      shortTitle: "Business Valuation",
      description: "Understanding your Startup's net-worth is vital to ensure that you're not diluting too much equity when raising funds. We can help you uncover the true value of your business that's fair to you as well as the investors.",
      icon: <FaFire size={32} className="text-white" />
    },
    {
      title: "Investment Banking",
      shortTitle: "Investment Banking",
      description: "There are thousands of investors participating in the Indian Startup ecosystem, but it's vital to know which ones are right for your venture. We can devise a planned fundraising strategy for you, provide exclusive access to our extensive network of investors, and even lead the negotiations for you until closure.",
      bgGradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: <FaTint size={32} className="text-white" />
    },
    {
      title: "Shared CFO",
      shortTitle: "Shared CFO",
      description: "As the founder of a venture that's growing at a fast pace, managing all functions by yourself can be tough. Our seasoned financial experts can take complete charge of your finance function providing leadership and insights your business needs, precisely when you need them.",
      bgGradient: "from-red-600 via-rose-600 to-pink-600",
      icon: <FaHotTub size={32} className="text-white" />
    },
   
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-start md:justify-center min-h-screen bg-[#FEF9EF] font-sans text-gray-900">
      {/* Header Section */}
      <div className="w-full max-w-7xl text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm animate-fadeInTop delay-300">Are you a Startup?</h1>
        {/* <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto animate-fadeInTop delay-600">Discover our strategic investment sectors driving innovation and transformation.</p> */}
      </div>

      <div className="h-3 md:h-12"></div>

      {/* Options Container - Vertical on mobile, horizontal on desktop */}
      <div className="options flex flex-col md:flex-row w-full md:max-w-[79vw] h-auto md:h-[500px] max-w-[75vw] rounded-xl mx-auto items-stretch overflow-visible  relative gap-1.5 md:gap-2 pb-6 md:pb-0">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-start  transition-all duration-700 ease-in-out rounded-lg
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              background: activeIndex === index
                ? 'linear-gradient(135deg, #FEF9EF 0%, #FFF8E7 30%, rgba(252, 186, 0, 0.08) 100%)'
                : 'linear-gradient(135deg, rgba(254, 249, 239, 0.5) 0%, rgba(252, 186, 0, 0.03) 100%)',
              border: '1px solid rgba(152, 167, 175, 0.2)',
              backdropFilter: 'blur(10px)',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateY(0)' : 'translateY(-20px)',
              minWidth: isMobile ? '100%' : '50px',
              minHeight: isMobile
                ? (activeIndex === index ? '292px' : '50px')
                : '83px',
              margin: 0,

              cursor: 'pointer',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(252, 186, 0, 0.05), 0 10px 30px rgba(0,0,0,0.05)'
                : '0 10px 30px rgba(0,0,0,0.05)',
              flex: activeIndex === index
                ? (isMobile ? '0 0 auto' : '7 1 0%')
                : (isMobile ? '0 0 auto' : '1 1 0%'),
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background'
            }}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => {
              // Only use hover on desktop (md and up)
              if (!isMobile) {
                handleOptionClick(index);
              }
            }}
          >
            {/* Shadow effect */}
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-33px',
                height: '100px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -100px 100px -100px rgba(252, 186, 0, 0.15), inset 0 -100px 100px -67px rgba(0, 0, 0, 0.05)'
                  : 'inset 0 -100px 0px -100px rgba(0, 0, 0, 0), inset 0 -100px 0px -67px rgba(0, 0, 0, 0)'
              }}
            ></div>

            {/* Content Area - Shows when active */}
            {activeIndex === index && (
              <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end items-start z-1 animate-fadeIn overflow-y-auto">
                <h2 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 md:mb-5 drop-shadow-sm leading-tight">
                  {option.title}
                </h2>
                <p className="text-xs sm:text-xs md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-full md:max-w-[85%]">
                  {option.description}
                </p>
              </div>
            )}

            {/* Collapsed Title - Shows when not active */}
            {activeIndex !== index && (
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 px-3 py-2"
              >
                <h3
                  className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-gray-800 tracking-wide md:tracking-wider text-center md:text-left"
                  style={{
                    opacity: activeIndex !== index ? 1 : 0,
                    writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >
                  {option.shortTitle}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;





