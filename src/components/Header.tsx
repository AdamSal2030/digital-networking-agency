"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>
              Digital Networking
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              Home
            </a>
            <a href="/service" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              Service
            </a>
            <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
              About
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="hidden sm:inline-flex text-black px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{backgroundColor: 'rgb(203, 255, 0)'}}
            >
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
              <a 
                href="/" 
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="block px-3 py-2 text-gray-300 hover:text-yellow-400 hover:bg-gray-700 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <div className="pt-2">
                <button 
                  className="w-full text-black px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                  style={{backgroundColor: 'rgb(203, 255, 0)'}}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;