'use client';

import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';
import { MdOpacity } from 'react-icons/md';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options = [
    {
      title: "Fundraise Preparation",
      shortTitle: "Fundraise Preparation",
      description: "Before you hit the market to raise funds, it's vital to be prepared with pitch materials that will pique the curiosity of investors. We craft attractive decks, dynamic models and comprehensive data rooms that make your fund raising journey seamless.",
      bgGradient: "from-purple-600 via-pink-600 to-red-600",
      icon: <FaCampground size={32} className="text-white" />
    },
    {
      title: "Business Valuation",
      shortTitle: "Business Valuation",
      description: "Understanding your Startup's net-worth is vital to ensure that you're not diluting too much equity when raising funds. We can help you uncover the true value of your business that's fair to you as well as the investors. .",
      bgGradient: "from-green-600 via-emerald-600 to-teal-600",
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
      description: "SAs the founder of a venture that's growing at a fast pace, managing all functions by yourself can be tough. Our seasoned financial experts can take complete charge of your finance function providing leadership and insights your business needs, precisely when you need them.",
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

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#000D23] font-sans text-white">
      {/* Header Section */}
      <div className="w-full max-w-7xl px-6 mt-8 mb-2 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">Are you a Startup?</h1>
        {/* <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto animate-fadeInTop delay-600">Discover our strategic investment sectors driving innovation and transformation.</p> */}
      </div>

      <div className="h-16"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[95vw] h-[600px]  rounded-xl  mx-auto  items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              background: `linear-gradient(0deg, ${
                activeIndex === index
                  ? 'var(--tw-gradient-stops, )'
                  : '#18242fe6'
              })`,
              
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              // borderRadius: '16px',
            
              cursor: 'pointer',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(0,0,0,0.50)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background',
              ...(activeIndex === index && {
                background: `linear-gradient(180deg, ${option.bgGradient.split(' ').map(c => {
                  const colorMap: Record<string, string> = {
                    'from-purple-600': '#001D4E',
                    'via-pink-600': '#000D23',
                    'to-red-600': '#000D23',
                    'from-green-600': '#001D4E',
                    'via-emerald-600': '#000D23',
                    'to-teal-600': '#000D23',
                    'from-blue-600': '#001D4E',
                    'via-indigo-600': '#000D23',
                    'to-purple-600': '#000D23',
                    'from-red-600': '#001D4E',
                    'via-rose-600': '#000D23',
                    'to-pink-600': '#000D23',
                    'from-cyan-600': '#001D4E',
                    'via-blue-600': '#000D23',
                    'to-indigo-600': '#000D23',
                  };
                  return colorMap[c] || '#333';
                }).join(', ')})`
              })
            }}
            onMouseEnter={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000'
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>

            {/* Content Area - Shows when active */}
            {activeIndex === index && (
              <div className="absolute inset-0 p-12 flex flex-col justify-center items-start z-1 animate-fadeIn">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  {option.title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md max-w-[85%]">
                  {option.description}
                </p>
              </div>
            )}

            {/* Collapsed Title - Shows when not active */}
            {activeIndex !== index && (
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                style={{
                  opacity: activeIndex !== index ? 1 : 0,
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed'
                }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-300 tracking-wider">
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
