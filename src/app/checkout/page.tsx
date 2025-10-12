"use client";

import React, { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import { Shield, Lock, CheckCircle, Clock } from "lucide-react";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type ProductKey = "ONE" | "TWO";

const PRODUCT_COPY: Record<
  ProductKey,
  { title: string; price: number; priceText: string; normal: string }
> = {
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

// ----- Validation -----
const phoneRegex = /^\+\d{7,15}$/;

const makeSchema = (product: ProductKey) =>
  z
    .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email: z.string().email("Enter a valid email address"),
      phone: z
        .string()
        .min(1, "Phone is required")
        .regex(phoneRegex, "Include country code (e.g., +1 555 555 5555)"),
      publication1: z.string().min(1, "Select a publication"),
      publication2: z.string().optional(), // only required for TWO
    })
    .superRefine((values, ctx) => {
      if (product === "TWO") {
        if (!values.publication2 || values.publication2.length === 0) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["publication2"],
            message: "Select your second publication",
          });
        }
        if (
          values.publication1 &&
          values.publication2 &&
          values.publication1 === values.publication2
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["publication2"],
            message: "Choose two different publications",
          });
        }
      }
    });

type FormValues = z.infer<ReturnType<typeof makeSchema>>;

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductKey>("ONE");

  // dynamic schema based on selected product
  const schema = useMemo(() => makeSchema(product), [product]);

  const {
    handleSubmit,
    control,
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      publication1: "",
      publication2: "",
    },
  });

  const selected = PRODUCT_COPY[product];
  const pub1 = watch("publication1");
  const pub2 = watch("publication2");

  const onSubmit = async (data: FormValues) => {
    // Require agreement checkbox
    const agreeEl = document.getElementById("agree") as HTMLInputElement | null;
    if (!agreeEl?.checked) {
      alert(
        "Please confirm you have read and agree to the Terms of Service, Refund Policy, and Privacy Policy."
      );
      return;
    }

    const selectedPublications =
      product === "ONE" ? [data.publication1] : [data.publication1, data.publication2!];

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          publications: selectedPublications,
          customer: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
          },
        }),
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* ===== Top Logo Bar ===== */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Digital Networking Agency" className="h-10 w-auto" />
          </div>
        </div>
      </header>

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
                        onChange={() => {
                          setProduct(key as ProductKey);
                          if (key === "ONE") setValue("publication2", "");
                        }}
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
              <div className="mb-4">
                <select
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                  {...register("publication1")}
                  defaultValue=""
                >
                  <option value="">Select 1st publication</option>
                  {PUBLICATIONS.map((pub) => (
                    <option key={pub} value={pub}>
                      {pub}
                    </option>
                  ))}
                </select>
                {errors.publication1 && (
                  <p className="text-red-400 text-sm mt-1">{errors.publication1.message}</p>
                )}
              </div>

              {/* Second Dropdown (only for Two-Tier) */}
              {product === "TWO" && (
                <div>
                  <select
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    {...register("publication2")}
                    defaultValue=""
                  >
                    <option value="">Select 2nd publication</option>
                    {PUBLICATIONS.map((pub) => (
                      <option key={pub} value={pub}>
                        {pub}
                      </option>
                    ))}
                  </select>
                  {errors.publication2 && (
                    <p className="text-red-400 text-sm mt-1">{errors.publication2.message}</p>
                  )}
                </div>
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
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h4 className="text-xl font-bold text-gray-100 mb-4">Customer Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      placeholder="First Name *"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      placeholder="Last Name *"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-gray-100 placeholder-gray-400"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* ✅ International Phone with Country Code */}
                <div className="mt-4">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <PhoneInput
                        {...field}
                        defaultCountry="us"
                        placeholder="Phone Number with country code *"
                        className="w-full [&_.PhoneInputInput]:bg-gray-700 [&_.PhoneInputInput]:border [&_.PhoneInputInput]:border-gray-600 [&_.PhoneInputInput]:rounded-lg [&_.PhoneInputInput]:p-3 [&_.PhoneInputInput]:text-gray-100 [&_.PhoneInputInput]:placeholder-gray-400"
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start space-x-3 bg-gray-700/40 border border-gray-600 rounded-lg p-4 mb-4">
                <input
                  type="checkbox"
                  id="agree"
                  className="mt-1 w-5 h-5 accent-lime-400 cursor-pointer"
                  required
                />
                <label htmlFor="agree" className="text-gray-300 text-sm leading-relaxed">
                  By proceeding, I confirm that I have read and agree to the{" "}
                  <a
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-lime-400 hover:text-lime-300"
                  >
                    Terms of Service
                  </a>
                  ,{" "}
                  <a
                    href="/refunds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-lime-400 hover:text-lime-300"
                  >
                    Refund Policy
                  </a>
                  , and{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-lime-400 hover:text-lime-300"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                disabled={loading || isSubmitting}
                className="w-full text-black px-8 py-4 rounded-lg font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide disabled:opacity-70"
                style={{
                  backgroundColor: "rgb(203, 255, 0)",
                  boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)",
                }}
              >
                {loading || isSubmitting
                  ? "Redirecting..."
                  : `Pay with Stripe — ${selected.priceText}`}
              </button>

              <div className="text-center space-y-2">
                <p className="text-gray-300 font-medium">
                  Backed by Our 100% Money Back Guarantee
                </p>
                <p className="text-gray-400 text-sm">* 100% Secure & Safe Payments *</p>
              </div>
            </form>
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
              <div className="text-gray-400 line-through text-xl mb-2">Normally: {selected.normal}</div>
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
