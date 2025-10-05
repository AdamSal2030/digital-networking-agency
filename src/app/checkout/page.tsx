"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Shield, Lock, CheckCircle, Clock } from "lucide-react";

type ProductKey = "ONE" | "TWO";

const PRODUCT_COPY: Record<ProductKey, { title: string; price: number; priceText: string; normal: string }> = {
  ONE: {
    title: "One Top-Tier Article Written & Featured For You",
    price: 147,
    priceText: "$147.00",
    normal: "$297.00",
  },
  TWO: {
    title: "Two Top-Tier Articles Written & Featured For You",
    price: 247,
    priceText: "$247.00",
    normal: "$600.00",
  },
};

const PUBLICATIONS = [
  "The American News",
  "Artist Weekly",
  "Atlanta Wire",
  "BLK News",
  "California Gazette",
  "California Observer",
  "CEO Weekly",
  "Celebrity News",
  "Economic Insider",
  "Entertainment Monthly News",
  "Entertainment Post",
  "Famous Times",
  "Influencer Daily",
  "Kivo Daily",
  "Los Angeles Wire",
  "Market Daily",
  "Miami Wire",
  "Music Observer",
  "Texas Today",
  "The Wall Street Times",
  "New York Weekly",
  "New York Wire",
  "Net Worth",
  "Real Estate Today",
  "Portland News",
  "San Francisco Post",
  "The Chicago Journal",
  "US Insider",
  "US Reporter",
  "US Business News",
  "Voyage New York",
  "Women’s Journal",
  "World Reporter",
];


export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductKey>("ONE");
  const [publication1, setPublication1] = useState("");
  const [publication2, setPublication2] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onBuy = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      alert("Please fill first name, last name, phone, and email.");
      return;
    }

    if (product === "ONE" && !publication1) {
      alert("Please select a publication before continuing.");
      return;
    }

    if (product === "TWO" && (!publication1 || !publication2)) {
      alert("Please select both publications before continuing.");
      return;
    }

     const selectedPublications =
    product === "ONE"
      ? [publication1]
      : [publication1, publication2].filter(Boolean);

    setLoading(true);
    try {
      console.log(selectedPublications)
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, publications: selectedPublications, customer: form }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Failed to start checkout");
      }

      const { url } = await res.json();
      window.location.href = url;
    } catch (e: any) {
      alert(e.message || "Something went wrong");
      setLoading(false);
    }
  };

  const selected = PRODUCT_COPY[product];

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
              <span className="font-bold">Done-For-You Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 mr-2" style={{ color: "rgb(203, 255, 0)" }} />
                <h2 className="text-2xl font-bold" style={{ color: "rgb(203, 255, 0)" }}>
                  Offer Ends Soon!
                </h2>
              </div>
              <h1 className="text-3xl font-bold text-gray-100 mb-2">
                FILL OUT THE FORM & GET FEATURED TODAY!
              </h1>
              <p className="text-xl text-gray-300">
                Choose your package and publication(s), then continue to checkout.
              </p>
            </div>

            {/* Product Selection */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold text-gray-100">Select Package</h4>
              {Object.entries(PRODUCT_COPY).map(([key, item]) => (
                <label
                  key={key}
                  className={`block border rounded-lg p-4 cursor-pointer transition-all ${
                    product === key ? "border-lime-400 bg-gray-700" : "border-gray-600 bg-gray-800"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="mr-3"
                        checked={product === key}
                        onChange={() => setProduct(key as ProductKey)}
                      />
                      <span className="text-gray-100 font-medium">{item.title}</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-100">{item.priceText}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Publication Dropdown(s) */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-100 mb-3">
                {product === "TWO" ? "Select Your Publications" : "Select Publication"}
              </h4>

              {/* First Dropdown */}
              <select
                value={publication1}
                onChange={(e) => setPublication1(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mb-4"
              >
                <option value="">Select 1st publication</option>
                {PUBLICATIONS.map((pub) => (
                  <option key={pub} value={pub}>
                    {pub}
                  </option>
                ))}
              </select>

              {/* Second Dropdown (only for Two-Tier) */}
              {product === "TWO" && (
                <select
                  value={publication2}
                  onChange={(e) => setPublication2(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                >
                  <option value="">Select 2nd publication</option>
                  {PUBLICATIONS.map((pub) => (
                    <option key={pub} value={pub}>
                      {pub}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-bold text-gray-100 mb-4">Order Summary</h4>
              <div className="flex justify-between items-start">
                <span className="text-gray-300 flex-1 mr-4">
                  {selected.title} [One-Time Payment]
                </span>
                <span className="text-gray-100">1</span>
                <span className="text-gray-100 ml-4">{selected.priceText}</span>
              </div>
              <div className="border-t border-gray-600 pt-4 mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-100">Order Total</span>
                <span className="text-2xl font-bold" style={{ color: "rgb(203, 255, 0)" }}>
                  {selected.priceText}
                </span>
              </div>
            </div>

            {/* Customer Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">Customer Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={onChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={onChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={onChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={onChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={onChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <input
                  type="url"
                  name="website"
                  placeholder="Website URL"
                  value={form.website}
                  onChange={onChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400 mt-4"
                />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={onChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                  <input
                    name="state"
                    placeholder="State"
                    value={form.state}
                    onChange={onChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                  <input
                    name="zipCode"
                    placeholder="Zip Code"
                    value={form.zipCode}
                    onChange={onChange}
                    className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Pay Button */}
              <button
                onClick={onBuy}
                disabled={loading}
                className="w-full text-black px-8 py-4 rounded-lg font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:opacity-70"
                style={{
                  backgroundColor: "rgb(203, 255, 0)",
                  boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)",
                }}
              >
                {loading ? "Redirecting..." : `Pay with Stripe — ${selected.priceText}`}
              </button>

              <div className="text-center space-y-2">
                <p className="text-gray-300 font-medium">Backed by Our 100% Money Back Guarantee</p>
                <p className="text-gray-400 text-sm">* 100% Secure & Safe Payments *</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-8">
            <h3 className="text-3xl font-bold text-gray-100 mb-8">Here's what you get:</h3>
            <div className="space-y-6">
              {[
                "Top-Tier News Feature: Get featured in a major news outlet—gain credibility and visibility.",
                "Article Written For You: 600–1000 words highlighting your strengths.",
                "Draft Review & Approval: Approve before publishing.",
                "SEO Boost: High-authority backlink to your site.",
                '“Featured On” Banner assets for your site & socials.',
                "Tailored Outlet: Target your niche audience.",
                "Credibility & Authority: Published by a recognized outlet.",
                "Comprehensive Package: up to 1,000 words, 4 images, 7 backlinks.",
                "Quick Start: we handle everything A to Z.",
              ].map((text) => (
                <div className="flex items-start" key={text}>
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" style={{ color: "rgb(203, 255, 0)" }} />
                  <p className="text-gray-300">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center bg-gray-700 rounded-lg p-6 border border-gray-600">
              <div className="text-gray-400 line-through text-xl mb-2">
                Normally: {selected.normal}
              </div>
              <div className="text-4xl font-bold mb-2" style={{ color: "rgb(203, 255, 0)" }}>
                {product === "ONE" ? "Today Only $147" : "Today Only $247"}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
