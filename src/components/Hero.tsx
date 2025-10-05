"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{backgroundColor: 'rgb(203, 255, 0)'}}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{backgroundColor: 'rgb(203, 255, 0)', animationDelay: '2s'}}
        ></div>
        <div 
          className="absolute top-40 left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
          style={{backgroundColor: 'rgb(203, 255, 0)', animationDelay: '4s'}}
        ></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-4 leading-tight">
            Do You Have A Personal Brand, Product, or Service?
          </h1>
          
          {/* Get Published Section */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-100 mb-4">
              <span style={{color: 'rgb(203, 255, 0)'}}>
                Get Published
              </span>{' '}
              in a Major News Outlet Like
            </h2>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-300 italic leading-relaxed">
              <div>CEO Weekly, US business news,</div>
              <div>Women journal, Wall Street Times, and</div>
              <div>New York weekly</div>
            </div>
          </div>
          
          {/* Images Section */}
          <div className="flex flex-col justify-center items-center gap-8 mb-12">
            <div className="w-full max-w-md">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747c2504db6df1adef7f0c.png"
                  alt="News Publication Example 1"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            <div className="w-full max-w-md">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747184d515b16c479d2b7c.png"
                  alt="News Publication Example 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div className="text-center mb-8">
            <p className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
              For Only <span style={{color: 'rgb(203, 255, 0)'}}>$147</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-6">
            <button 
              className="text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
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
              onClick={() => router.push('/checkout')}
            >
              GET FEATURED TODAY
            </button>
          </div>
          
          {/* Guarantee */}
          <p className="text-gray-400 text-lg italic mb-16">
            *100% Money Back Guarantee
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" style={{color: 'rgb(203, 255, 0)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;