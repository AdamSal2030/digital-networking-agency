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
      className={`py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 transition-all duration-1000 ${
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-8 leading-tight">
              <span style={{color: 'rgb(203, 255, 0)'}}>
                WE SCALE BRANDS
              </span>{' '}
              INTO INDUSTRY LEADERS IN 2025
            </h2>
            
            {/* Content Paragraphs */}
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We know how tough it is to <strong className="text-gray-100">grow a business...</strong>
              </p>
              
              <p>
                You pour your heart, soul, and resources into building something amazing, but there's always a{' '}
                <strong className="text-gray-100">never-ending to-do list and not enough hours in the day.</strong> But{' '}
                <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>you don't have to do it all alone...</em>
              </p>
              
              <p>
                We want to see you <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>grow...</em> We want to see you{' '}
                <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>help more customers...</em> We want to help you{' '}
                <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>take one thing off your to-do list...</em>
              </p>
              
              <p>
                That's why <strong className="text-gray-100">we'll write an article</strong> for your business and{' '}
                <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>get you featured</em> in a{' '}
                <strong className="text-gray-100">top-tier news outlet,</strong> just like we've done{' '}
                <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>for over 1,000 other businesses...</em>
              </p>
              
              <p>
                Guaranteed to <em className="font-medium" style={{color: 'rgb(203, 255, 0)'}}>boost your SEO</em> presence and credibility...
              </p>
              
              <p>
                <strong className="text-gray-100">No overpriced retainers or hidden costs...</strong>
              </p>
              
              <p className="text-xl font-bold text-gray-100">
                <strong>We'll handle everything</strong> for a{' '}
                <span className="text-2xl" style={{color: 'rgb(203, 255, 0)'}}>one-time payment of $147,</span>{' '}
                <strong>guaranteed</strong>.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-10">
              <button 
                className="text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: 'rgb(203, 255, 0)',
                  boxShadow: '0 10px 25px rgba(203, 255, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(203, 255, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(203, 255, 0, 0.2)';
                }}
              >
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>1000+</div>
                      <div className="text-sm opacity-90">Businesses Featured</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>147</div>
                      <div className="text-sm opacity-90">One-Time Payment</div>
                    </div>
                    <div className="w-px h-12 bg-white/30"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>100%</div>
                      <div className="text-sm opacity-90">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20 animate-pulse"
                style={{backgroundColor: 'rgb(203, 255, 0)'}}
              ></div>
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20 animate-pulse"
                style={{backgroundColor: 'rgb(203, 255, 0)', animationDelay: '2s'}}
              ></div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;