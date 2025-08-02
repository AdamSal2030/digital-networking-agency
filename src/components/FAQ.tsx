"use client";

import React, { useEffect, useRef, useState } from 'react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // First FAQ open by default
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Who's this perfect for?",
      answer: "If you're a business, entrepreneur, consultant, coach, author, expert, agency, e-commerce store, product, service, or brand, then this is perfect for you!"
    },
    {
      question: "What exactly do I get when I buy this?",
      answer: "This promotion covers everything, including us writing a fully custom 800–1,000 word article about your brand, unlimited revisions, and guaranteed publication in the outlet of your choice!"
    },
    {
      question: "Can I make revisions to the article?",
      answer: "Yes, absolutely! We offer unlimited revisions and you have final approval, so it won't be published until it's exactly as you'd like!"
    },
    {
      question: "Can I choose the news outlet?",
      answer: "Yes! During your intake form you'll have the choice to choose from over 60 different outlets including USA News, Women's Insider, CEO Times, Biz Weekly, Men's Insider, New York Review, and many more. We are always adding additional outlets as well!"
    },
    {
      question: "Will this help my SEO?",
      answer: "Yes, you'll get a high domain authority backlink that boosts your SEO, and your article will be indexed on Google."
    },
    {
      question: "Can I say \"As Seen On\"?",
      answer: "Yes, you can use \"As Seen On\" credentials on your website, ads, and social media."
    },
    {
      question: "Is there a guarantee?",
      answer: "Yes, we offer a 100% money-back guarantee. If we can't get your business featured in the outlet of your choice within 10 days, you will receive a full refund, no questions asked."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              got questions? we have answers.
            </span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-xl font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
              GET FEATURED TODAY
            </button>
          </div>
          
          <p className="text-gray-600 text-lg italic">
            *100% Money Back Guarantee
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;