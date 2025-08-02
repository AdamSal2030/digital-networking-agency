"use client";

import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { Shield, Lock, CheckCircle, Clock, Star } from 'lucide-react';

const CheckoutPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate all fields are filled
    const requiredFields = Object.keys(formData);
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      alert('Please fill in all required fields!');
      return;
    }
    
    // Handle form submission here
    console.log('Order submitted:', { plan: selectedPlan, data: formData });
    alert('Order submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      
      {/* Top Guarantee Bar */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white text-center">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span className="font-bold">Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              <span className="font-bold">100% Secure Order</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-bold">Completely Done-For-You</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Form */}
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-8">
            
            {/* Offer Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 mr-2" style={{color: 'rgb(203, 255, 0)'}} />
                <h2 className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>
                  Offer Ends Soon!
                </h2>
              </div>
              <h1 className="text-3xl font-bold text-gray-100 mb-2">
                FILL OUT THE FORM & GET FEATURED TODAY!
              </h1>
              <p className="text-xl text-gray-300">
                Get Featured in a Prestigious Outlet, Completely Done-For-You.
              </p>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Payment</h3>
              
              {/* Plan Selection */}
              <div className="space-y-4 mb-6">
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPlan === 'one-time' 
                      ? 'border-lime-400 bg-gray-700' 
                      : 'border-gray-600 bg-gray-800'
                  }`}
                  onClick={() => setSelectedPlan('one-time')}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <input 
                        type="radio" 
                        checked={selectedPlan === 'one-time'} 
                        onChange={() => setSelectedPlan('one-time')}
                        className="mr-3"
                      />
                      <span className="text-gray-100 font-medium">
                        One Top-Tier Article Written & Featured For You [One-Time Payment]
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-gray-100">$97.00</span>
                  </div>
                </div>
                
                <div 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPlan === 'subscription' 
                      ? 'border-lime-400 bg-gray-700' 
                      : 'border-gray-600 bg-gray-800'
                  }`}
                  onClick={() => setSelectedPlan('subscription')}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <input 
                        type="radio" 
                        checked={selectedPlan === 'subscription'} 
                        onChange={() => setSelectedPlan('subscription')}
                        className="mr-3"
                      />
                      <span className="text-gray-100 font-medium">
                        [Subscribe & Save 20%] One article per month. Cancel anytime.
                      </span>
                      <div className="text-sm text-gray-400 ml-6">$77 per 4 weeks</div>
                    </div>
                    <span className="text-2xl font-bold text-gray-100">$77.00</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-700 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-bold text-gray-100 mb-4">Order Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-300 flex-1 mr-4">
                      {selectedPlan === 'one-time' 
                        ? 'One Top-Tier Article Written & Featured For You [One-Time Payment]' 
                        : '[Subscribe & Save 20%] One article per month. Cancel anytime.'
                      }
                    </span>
                    <span className="text-gray-100">1</span>
                    <span className="text-gray-100 ml-4">
                      ${selectedPlan === 'one-time' ? '97.00' : '77.00'}
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-600 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-100">Order Total</span>
                    <span className="text-2xl font-bold" style={{color: 'rgb(203, 255, 0)'}}>
                      ${selectedPlan === 'one-time' ? '97.00' : '77.00'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">Customer Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Website URL"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
              </div>

              {/* Payment Information */}
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">Payment Information</h4>
                <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold mr-3">
                      STRIPE
                    </div>
                    <span className="text-gray-300">Secure Payment Processing</span>
                  </div>
                  
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mb-4"
                  />
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    />
                  </div>
                  
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on Card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mb-4"
                  />
                  
                  <input
                    type="text"
                    name="billingAddress"
                    placeholder="Billing Address"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mb-4"
                  />
                  
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-400 text-sm">
                Make sure that you filled all the details!
              </p>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full text-black px-8 py-4 rounded-lg font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
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
                Complete Order
              </button>

              <div className="text-center space-y-2">
                <p className="text-gray-300 font-medium">
                  Backed by Our 100% Money Back Guarantee
                </p>
                <p className="text-gray-400 text-sm">
                  * 100% Secure & Safe Payments *
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  Backed by Our 100% Money Back Guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - What You Get */}
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-8">
            <h3 className="text-3xl font-bold text-gray-100 mb-8">Here's what you get:</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Top-Tier News Feature: </span>
                  <span className="text-gray-300">Get featured in a major news outlet Like USA News, NY Weekly, Women's Insider, Biz Weekly, CEO Times, Men's Insider & AP – gaining credibility – and increasing your business's visibility.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Article Written For You: </span>
                  <span className="text-gray-300">Our team will craft a 600-1000 word article about you & your business – highlighting your unique strengths.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Draft Review & Approval: </span>
                  <span className="text-gray-300">Review and request revisions before publishing to ensure it perfectly represents your brand.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">SEO Boost: </span>
                  <span className="text-gray-300">Gain a high domain authority backlink to your website – boosting your SEO – and improving your indexing on Google.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">"Featured On" Banner: </span>
                  <span className="text-gray-300">Install a valuable "Featured On" banner on your website, ads, social media, and share with clients – showing off your media features – attracting more customers – And increasing your credibility & value in the marketplace.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Tailored News Outlet: </span>
                  <span className="text-gray-300">Target your customer demographic with a news outlet tailored to your niche – ensuring your message reaches the right audience – and driving more engagement.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Credibility & Authority: </span>
                  <span className="text-gray-300">Published by the news outlet – ensuring credibility and authority – and establishing you as an industry leader.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Comprehensive Article Package: </span>
                  <span className="text-gray-300">Includes up to 1,000 words, 4 images, and 7 backlinks – providing extensive coverage.</span>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{color: 'rgb(203, 255, 0)'}} />
                <div>
                  <span className="font-bold text-gray-100">Quick Start: </span>
                  <span className="text-gray-300">Get started in 2 minutes – our team handles everything A to Z – saving you time and effort.</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-12 text-center bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="text-gray-400 line-through text-xl mb-2">
                Normally: $297
              </div>
              <div className="text-4xl font-bold mb-2" style={{color: 'rgb(203, 255, 0)'}}>
                Today Only ${selectedPlan === 'one-time' ? '97' : '77'}
              </div>
              {selectedPlan === 'subscription' && (
                <div className="text-gray-300 text-sm">per month</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;