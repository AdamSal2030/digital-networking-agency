"use client";

import React, { useEffect, useRef, useState } from 'react';

const Promise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span style={{color: 'rgb(203, 255, 0)'}}>
              our promise
            </span>
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-100 font-bold max-w-4xl mx-auto">
            <strong>Long Story Short,</strong> Here are the Results You Will See:
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Before Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border-2 border-red-700/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
              
              {/* Before Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-red-400 mb-4">
                  Before
                </h3>
                <div className="w-16 h-1 bg-red-400 mx-auto rounded-full"></div>
              </div>
              
              {/* Before List */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Blending in with Competitors.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Little to No Online Presence.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Weak SEO ranking.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">High Lead Costs.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Low Sales Ratio.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* After Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-green-900/20 to-yellow-600/10 rounded-2xl p-8 border-2 border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300">
              
              {/* After Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{color: 'rgb(203, 255, 0)'}}>
                  After
                </h3>
                <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: 'rgb(203, 255, 0)'}}></div>
              </div>
              
              {/* After List */}
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Featured in Top News Outlets.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Distinctive Brand Authority.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Improved SEO Ranking.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Lower Cost per Lead.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-300 font-medium">Increased Sales.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Promise;