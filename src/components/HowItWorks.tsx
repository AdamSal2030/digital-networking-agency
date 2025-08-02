"use client";

import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
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
      className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How to get{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              featured
            </span>{' '}
            in 2025
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            <strong>Top-tier media coverage in 3 simple steps.</strong> We handle the entire process:
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Step 1 */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 border border-gray-100 hover:border-blue-200 group">
              
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              
              {/* Step Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                STEP 1
              </h3>
              
              {/* Step Content */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Click the button below and fill out the form at checkout.
              </p>
              
              {/* Icon */}
              <div className="mt-6 text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 border border-gray-100 hover:border-purple-200 group">
              
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              
              {/* Step Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                STEP 2
              </h3>
              
              {/* Step Content */}
              <p className="text-gray-700 text-lg leading-relaxed">
                We will write your article and send it to you for approval.
              </p>
              
              {/* Icon */}
              <div className="mt-6 text-purple-600 group-hover:text-pink-600 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-gradient-to-br hover:from-green-50 hover:to-blue-50 border border-gray-100 hover:border-green-200 group">
              
              {/* Step Number */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              
              {/* Step Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                STEP 3
              </h3>
              
              {/* Step Content */}
              <p className="text-gray-700 text-lg leading-relaxed">
                Once it's exactly how you want it, we will get it published!
              </p>
              
              {/* Icon */}
              <div className="mt-6 text-green-600 group-hover:text-blue-600 transition-colors duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Assurance Text */}
          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              After you checkout, we handle everything from A to Z!
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-6">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
              GET FEATURED TODAY
            </button>
          </div>
          
          {/* Guarantee */}
          <p className="text-gray-600 text-lg italic">
            *100% Money Back Guarantee
          </p>
          
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;