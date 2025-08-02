"use client";

import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WE SCALE BRANDS
              </span>{' '}
              INTO INDUSTRY LEADERS IN 2025
            </h2>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We know how tough it is to <strong>grow a business...</strong>
              </p>
              
              <p>
                You pour your heart, soul, and resources into building something amazing, but there's always a{' '}
                <strong>never-ending to-do list and not enough hours in the day.</strong> But{' '}
                <em className="text-blue-600 font-medium">you don't have to do it all alone...</em>
              </p>
              
              <p>
                We want to see you <em className="text-purple-600 font-medium">grow...</em> We want to see you{' '}
                <em className="text-blue-600 font-medium">help more customers...</em> We want to help you{' '}
                <em className="text-green-600 font-medium">take one thing off your to-do list...</em>
              </p>
              
              <p>
                That's why <strong>we'll write an article</strong> for your business and{' '}
                <em className="text-purple-600 font-medium">get you featured</em> in a{' '}
                <strong>top-tier news outlet,</strong> just like we've done{' '}
                <em className="text-blue-600 font-medium">for over 1,000 other businesses...</em>
              </p>
              
              <p>
                Guaranteed to <em className="text-green-600 font-medium">boost your SEO</em> presence and credibility...
              </p>
              
              <p>
                <strong>No overpriced retainers or hidden costs...</strong>
              </p>
              
              <p className="text-xl font-bold text-gray-900">
                <strong>We'll handle everything</strong> for a{' '}
                <span className="text-green-600 text-2xl">one-time payment of $147,</span>{' '}
                <strong>guaranteed</strong>.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Success Story
              </button>
            </div>
            
          </div>
          
          {/* Right Image */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Digital Publishing and Media Success"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm opacity-90">Businesses Featured</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">147</div>
                      <div className="text-sm opacity-90">One-Time Payment</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm opacity-90">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;