"use client";

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
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
              <span style={{color: 'rgb(203, 255, 0)'}}>About Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting powerful narratives that elevate brands and build lasting legacies in today's competitive digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        ref={sectionRef}
        className={`py-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our mission is to strategically <strong className="text-gray-100">elevate</strong> your presence and amplify your distinct voice in a <strong className="text-gray-100">competitive</strong> landscape. We cultivate meaningful connections and <strong className="text-gray-100">long-term success</strong>, empowering you to lead with confidence, creativity, and <strong className="text-gray-100">forward-thinking innovation</strong>.
                </p>
              </div>
            </div>

            {/* Mission Image */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration and strategic planning"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Vision Image */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovation and media landscape"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Vision */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our goal is to <strong className="text-gray-100">redefine</strong> how stories are shared and recognized in today's <strong className="text-gray-100">evolving media</strong> landscape. We prioritize authentic engagement and foster meaningful, high-impact <strong className="text-gray-100">connections that resonate</strong> deeply with diverse <strong className="text-gray-100">audiences worldwide</strong>. By remaining committed to these core values, we consistently deliver outstanding results that elevate our clients' <strong className="text-gray-100">presence</strong> and <strong className="text-gray-100">influence</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Crafting Narratives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
              <span style={{color: 'rgb(203, 255, 0)'}}>Crafting Narratives,</span>
              <br />
              Building Legacies
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Your Story Our Legacy */}
            <div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600 mb-8">
                <h3 className="text-2xl font-bold mb-4" style={{color: 'rgb(203, 255, 0)'}}>
                  Your Story Our Legacy
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every story we tell shapes a legacy that lasts. At DNA we believe in capturing the essence of your journey, preserving each moment with integrity and purpose. Our mission is to honor your story with dedication and artistry, creating a legacy that resonates for generations to come. Together, we turn memories into milestones, leaving a mark that transcends time.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">Our Approach</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Digital Networking Agency, we believe in taking a holistic approach to PR and Marketing. We work closely with our clients to understand their unique needs and goals, and develop customized strategies that deliver real results.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Storytelling and legacy building"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white font-semibold text-lg">
                      "Your reputation, our commitment."
                    </p>
                    <p className="text-gray-300 text-sm mt-1">
                      Building bridges between brands and the world
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PR Experts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8">
              <span style={{color: 'rgb(203, 255, 0)'}}>The PR Experts</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Your reputation, our commitment. We're the PR experts building bridges between brands and the world.
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
                  100%
                </div>
                <p className="text-gray-300">Success Rate</p>
              </div>
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
                <div className="text-4xl font-bold mb-2" style={{color: 'rgb(203, 255, 0)'}}>
                  5+
                </div>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16">
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
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;