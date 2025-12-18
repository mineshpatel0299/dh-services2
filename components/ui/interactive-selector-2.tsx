'use client';

import React, { useState, useEffect } from 'react';
import { FaRocket, FaBrain, FaShieldAlt, FaIndustry, FaStore } from 'react-icons/fa';

const InteractiveSelector2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const options = [
    {
      title: "Deep Tech & AI",
      shortTitle: "Deep Tech",
      description: "Pioneering breakthrough innovations in artificial intelligence, machine learning, and quantum computing. We invest in companies pushing the boundaries of what's technologically possible, from neural networks to autonomous systems.",
      bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
      icon: <FaBrain size={32} className="text-white" />
    },
    {
      title: "Space & Aerospace",
      shortTitle: "Space Tech",
      description: "Supporting ventures that are redefining space exploration, satellite technology, and aerospace engineering. From commercial spaceflight to earth observation systems.",
      bgGradient: "from-slate-600 via-gray-600 to-zinc-600",
      icon: <FaRocket size={32} className="text-white" />
    },
    {
      title: "Cybersecurity & Privacy",
      shortTitle: "Cybersecurity",
      description: "Investing in next-generation security solutions that protect digital infrastructure, data privacy, and enterprise systems against evolving cyber threats.",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600",
      icon: <FaShieldAlt size={32} className="text-white" />
    },
    {
      title: "Industrial IoT & Automation",
      shortTitle: "IoT",
      description: "Transforming manufacturing and industrial processes through smart sensors, robotics, and connected devices that optimize efficiency and productivity.",
      bgGradient: "from-teal-600 via-cyan-600 to-sky-600",
      icon: <FaIndustry size={32} className="text-white" />
    },
    {
      title: "E-Commerce & Retail Tech",
      shortTitle: "Retail Tech",
      description: "Revolutionizing the retail experience with omnichannel solutions, personalized shopping, and supply chain innovations that bridge digital and physical commerce.",
      bgGradient: "from-amber-600 via-orange-600 to-red-600",
      icon: <FaStore size={32} className="text-white" />
    }
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
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">Emerging Technology Sectors</h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto animate-fadeInTop delay-600">Exploring frontier technologies that are shaping the future of innovation and industry.</p>
      </div>

      <div className="h-16"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[95vw] h-[600px] mx-auto px-4 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              background: `linear-gradient(135deg, ${
                activeIndex === index
                  ? 'var(--tw-gradient-stops)'
                  : '#2a2a2a 0%, #1a1a1a 100%'
              })`,
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
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
                background: `linear-gradient(135deg, ${option.bgGradient.split(' ').map(c => {
                  const colorMap: Record<string, string> = {
                    'from-indigo-600': '#4f46e5',
                    'via-purple-600': '#9333ea',
                    'to-pink-600': '#db2777',
                    'from-slate-600': '#475569',
                    'via-gray-600': '#4b5563',
                    'to-zinc-600': '#52525b',
                    'from-red-600': '#dc2626',
                    'via-orange-600': '#ea580c',
                    'to-yellow-600': '#ca8a04',
                    'from-teal-600': '#0d9488',
                    'via-cyan-600': '#0891b2',
                    'to-sky-600': '#0284c7',
                    'from-amber-600': '#d97706',
                    'from-purple-600': '#9333ea',
                    'via-pink-600': '#db2777',
                    'to-red-600': '#dc2626',
                    'from-green-600': '#16a34a',
                    'via-emerald-600': '#059669',
                    'to-teal-600': '#0d9488',
                    'from-blue-600': '#2563eb',
                    'via-indigo-600': '#4f46e5',
                    'to-purple-600': '#9333ea',
                    'via-rose-600': '#e11d48',
                    'from-cyan-600': '#0891b2',
                    'via-blue-600': '#2563eb',
                    'to-indigo-600': '#4f46e5',
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

export default InteractiveSelector2;
