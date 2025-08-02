"use client";

import React, { useEffect, useRef, useState } from 'react';

const GetStarted = () => {
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
      className={`py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            <span style={{color: 'rgb(203, 255, 0)'}}>
              Let's get started
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - What's Included */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Example Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747c2504db6df1adef7f0c.png"
                  alt="News Publication Example"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
            
            {/* What's Included Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">What's included:</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Feature in a Top-Tier News Article</strong> - Like USA News, NY Weekly, Women's Insider, Biz Weekly, CEO Times, Men's Insider & AP.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">SEO Boost</strong> - High Domain Authority Backlink to your website indexed on Google.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">"Featured On" Banner</strong> - Install valuable badges to your website, ads, social media & share with clients.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Niche-Targeted News Outlet</strong> - Publication tailored to your customer demographic.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Staff Contributor Publication</strong> - Ensuring credibility & authority.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Comprehensive Article Package</strong> - Up to 1,000 words, 4 images, and 7 backlinks.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Review and Approval Process</strong> - Make any changes before publishing.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Quick Setup</strong> - Get started in 2 minutes. Our team handles everything A to Z.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold" style={{color: 'rgb(203, 255, 0)'}}>+ Five Never-Before Released Bonuses!</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-600 pt-6">
                <p className="font-bold text-lg mb-2" style={{color: 'rgb(203, 255, 0)'}}>✅ Backed by Our 100% Money Back Guarantee</p>
                <p className="text-gray-300 flex items-center">
                  <svg className="w-5 h-5 mr-2" style={{color: 'rgb(203, 255, 0)'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Secure 256-Bit Encrypted Checkout
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Bonuses */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* First Publication Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67f73892c220406941faaf5f.png"
                  alt="News Publication Example 2"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Get Started Button */}
            <div className="text-center mb-8">
              <button 
                className="w-full text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
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
                GET STARTED NOW
              </button>
            </div>

            {/* Second Publication Image */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:shadow-yellow-400/20">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/67747184d515b16c479d2b7c.png"
                  alt="News Publication Example 3"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Pricing & Bonuses Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-3xl font-bold text-gray-100 mb-6 text-center">
                Only <span style={{color: 'rgb(203, 255, 0)'}}>$147</span> For A Top-Tier News Article
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <span className="text-black font-bold text-xs">1</span>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Bonus 1: $5 A Day Viral Brand Strategy in 2025</strong> - Access our secret viral brand machine to make your brand, products & content go viral.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <span className="text-black font-bold text-xs">2</span>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Bonus 2: Complete PR Secrets Library</strong> - Exact steps we use to get clients featured in top news outlets in 2025.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <span className="text-black font-bold text-xs">3</span>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Bonus 3: Free Major Interview Strategy</strong> - How to land TV, magazines, radio, podcasts & more in 2025.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <span className="text-black font-bold text-xs">4</span>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Bonus 4: PR to Profit Blueprint 2025</strong> - Turn your PR coverage into measurable revenue.</span>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{backgroundColor: 'rgb(203, 255, 0)'}}>
                    <span className="text-black font-bold text-xs">5</span>
                  </div>
                  <span className="text-gray-300"><strong className="text-gray-100">Bonus 5: Exclusive "Perfect PR AI"</strong> - Our secret weapon that instantly drafts unlimited flawless PR articles in 2025.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Guarantee Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              <span style={{color: 'rgb(203, 255, 0)'}}>
                Everything to gain and nothing to lose
              </span>
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/linJJKxkNTQ3VC8ZDegR/media/65f8eac34d78695539c2441a.png"
                  alt="Money Back Guarantee"
                  className="w-24 h-24"
                />
              </div>
              
              <div className="text-left">
                <p className="text-xl font-bold text-gray-100 mb-4">
                  <strong>100% money-back guarantee.</strong> That's how confident we are.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  If, for any reason, we are unable to get your business featured, you will
                  receive a full refund to your credit card — no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetStarted;