"use client";

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Tv, BookOpen, Users, Award, TrendingUp } from 'lucide-react';

const ServicesPage = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
              <span style={{color: 'rgb(203, 255, 0)'}}>Services Beyond Measure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              "Good marketing makes the company look smart. Great marketing makes the customer feel smart."
            </p>
            <p className="text-lg text-gray-400 opacity-90">- Joe Chernov</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        ref={sectionRef}
        className={`py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-6">Elevate Your Brand Authority</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At <strong style={{color: 'rgb(203, 255, 0)'}}>DNA</strong>, we leverage a robust network of top-tier <strong className="text-gray-100">journalists</strong>, <strong className="text-gray-100">editors</strong>, and <strong className="text-gray-100">media platforms</strong> 
              to secure high-impact coverage for our clients. With features in renowned outlets like <em className="text-gray-200">The Times</em>, 
              <em className="text-gray-200">Vogue</em>, and <em className="text-gray-200">Yahoo Finance</em>, we ensure your brand earns the recognition it merits.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Media Placements */}
            <div className={`bg-gray-800 rounded-2xl border border-gray-600 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <Users className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Media Placements</h3>
              </div>
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop&crop=faces" 
                  alt="Media placements" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our clients are consistently positioned as <strong className="text-gray-100">industry authorities</strong>, cultivating influential personal brands 
                that command attention. Whether you seek comprehensive features, strategic media placements, or <strong className="text-gray-100">verified 
                social profiles</strong>, our tailored approach delivers elevated visibility and lasting <strong className="text-gray-100">credibility</strong>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">The Times</span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">Vogue</span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">Yahoo Finance</span>
              </div>
            </div>

            {/* TV Media Placements */}
            <div className={`bg-gray-800 rounded-2xl border border-gray-600 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <Tv className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">TV Media Placements</h3>
              </div>
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=faces" 
                  alt="TV studio" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's dynamic market, utilizing <strong className="text-gray-100">television</strong> as a strategic channel is key to enhancing brand <strong className="text-gray-100">credibility</strong> 
                and <strong className="text-gray-100">engaging</strong> millions of viewers. Imagine your brand showcased on respected <strong className="text-gray-100">TV networks</strong>, delivering your 
                message through a captivating visual narrative that resonates with audiences.
              </p>
              <div className="bg-gray-700 border border-gray-600 p-4 rounded-lg">
                <p className="font-medium text-sm" style={{color: 'rgb(203, 255, 0)'}}>
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Reach millions of viewers on top-tier networks
                </p>
              </div>
            </div>

            {/* Magazine Covers */}
            <div className={`bg-gray-800 rounded-2xl border border-gray-600 p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg mr-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <BookOpen className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h3 className="text-2xl font-bold text-gray-100">Magazine Covers</h3>
              </div>
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop&crop=faces" 
                  alt="Magazine covers" 
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in <strong className="text-gray-100">securing</strong> prominent magazine cover features that elevate your brand presence. Through 
                <strong className="text-gray-100"> trusted</strong> relationships with <strong className="text-gray-100">elite publications</strong>, we ensure you're not only featured—but positioned as 
                a standout leader.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">Forbes</span>
                <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-medium border border-gray-600">Entrepreneur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-12 mb-16">
            <h3 className="text-4xl font-bold text-center text-gray-100 mb-12">
              Why Choose <span style={{color: 'rgb(203, 255, 0)'}}>DNA?</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <Star className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h4 className="font-bold text-gray-100 mb-2">Top-Tier Network</h4>
                <p className="text-gray-300 text-sm">Robust connections with leading journalists and editors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <Award className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h4 className="font-bold text-gray-100 mb-2">Industry Authority</h4>
                <p className="text-gray-300 text-sm">Position your brand as a trusted industry leader</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <TrendingUp className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h4 className="font-bold text-gray-100 mb-2">Elevated Visibility</h4>
                <p className="text-gray-300 text-sm">Maximize exposure across multiple media channels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(203, 255, 0, 0.1)'}}>
                  <Users className="w-8 h-8" style={{color: 'rgb(203, 255, 0)'}} />
                </div>
                <h4 className="font-bold text-gray-100 mb-2">Tailored Approach</h4>
                <p className="text-gray-300 text-sm">Customized strategies for lasting credibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8">
              <span style={{color: 'rgb(203, 255, 0)'}}>Proven Results</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Your reputation, our commitment. We consistently deliver outstanding results that elevate our clients' <strong className="text-gray-100">presence</strong> and <strong className="text-gray-100">influence</strong>.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <div className="text-4xl font-bold mb-2" style={{color: 'rgb(203, 255, 0)'}}>
                  1000+
                </div>
                <p className="text-gray-300">Businesses Featured</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <div className="text-4xl font-bold mb-2" style={{color: 'rgb(203, 255, 0)'}}>
                  500+
                </div>
                <p className="text-gray-300">Media Placements</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <div className="text-4xl font-bold mb-2" style={{color: 'rgb(203, 255, 0)'}}>
                  95%
                </div>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl border border-gray-600 text-center py-16 px-8">
            <h3 className="text-4xl font-bold text-gray-100 mb-6">
              Ready to <span style={{color: 'rgb(203, 255, 0)'}}>Elevate Your Brand?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 opacity-90">
              Let's cultivate your influential personal brand and command the attention you deserve.
            </p>
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
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;