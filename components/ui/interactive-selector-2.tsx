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
    <div className="relative flex flex-col items-center justify-start md:justify-center min-h-screen bg-[#FEF9EF]  text-gray-900">
      {/* Header Section */}
      <div className="w-full max-w-7xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center mt-4 md:mt-6 mb-4 md:mb-6 animate-fadeInTop">
          <div className="h-[35px] w-[250px] md:h-[41px] md:w-[300px] rounded-full bg-[#fcba00]/15 border border-amber-200 flex items-center justify-center px-6 shadow-sm">
            <span className="text-xs md:text-sm font-medium text-amber-800">Service</span>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-6xl font-normal text-gray-900 tracking-tight drop-shadow-sm animate-fadeInTop delay-300" style={{ fontFamily: 'Canela Regular, serif' }}>Are you a Startup?</h1>
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
                ? 'linear-gradient(-180deg, rgba(252, 186, 0, 0.3) 0% , rgba(252, 186, 0, 0.3) 2%, rgba(252, 186, 0, 0.02) 100%)'
                : 'linear-gradient(-180deg, rgba(252, 186, 0, 0.3) 0% , rgba(252, 186, 0, 0.3) 2%, rgba(252, 186, 0, 0.02) 100%)',
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
              <div key={`content-${index}`} className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end items-start z-1 overflow-y-auto">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-1xl font-bold text-gray-900 mb-1 md:mb-5 drop-shadow-sm leading-tight animate-fadeInTitle" style={{ fontFamily: 'lato' }}>
                  {option.title}
                </h2>
                <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed max-w-full md:max-w-[85%]">
                  {option.description.split(' ').map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className="inline-block animate-fadeInWord mr-[0.3em]"
                      style={{
                        animationDelay: `${0.15 + wordIndex * 0.025}s`
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </p>
              </div>
            )}

            {/* Collapsed Title - Shows when not active */}
            {activeIndex !== index && (
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 px-3 py-2"
              >
                <div
                  className="flex flex-row items-center justify-between w-full h-full px-4 py-4 md:px-6 md:py-6"
                  style={{
                    writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)'
                  }}
                >
                  <h3 className="text-xs sm:text-sm md:text-xl lg:text-xl font-bold text-gray-800 tracking-wide md:tracking-wider text-center md:text-left">
                    {option.shortTitle}
                  </h3>
                  <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @font-face {
          font-family: 'Canela Regular';
          src: url('/fonts/fonnts.com-72102/fonts/fonnts.com-Canela-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

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

        @keyframes fadeInContent {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fadeInTitle {
          opacity: 0;
          animation: fadeInContent 0.5s ease-out forwards;
          animation-delay: 0.1s;
        }

        .animate-fadeInDescription {
          opacity: 0;
          animation: fadeInContent 0.6s ease-out forwards;
          animation-delay: 0.25s;
        }

        .animate-fadeInWord {
          opacity: 0;
          animation: fadeInContent 0.35s ease-out forwards;
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





