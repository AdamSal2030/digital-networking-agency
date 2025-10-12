// src/app/service/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

import {
  LayoutGrid,
  List,
  Building,
  Lightbulb,
  Glasses,
  Images,
  Heart,
  Gem,
  Newspaper,
  ExternalLink,
  Star,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  publications,
  type Publication,
  type Category,
} from "@/data/publications";

/* ---------------------------
   LOGOS
----------------------------*/
const LOGO_MAP: Record<string, string> = {
  // existing entries…
  "Allure": "https://s99pr.com/wp-content/uploads/2025/04/logo-seo-2.png",
  "Apple News": "https://s99pr.com/wp-content/uploads/2025/03/Apple-News-Grit-Daily-1.png",
  "Architectural Digest": "https://s99pr.com/wp-content/uploads/2025/04/mms-architectural-digest-1.png",
  "Ars Technica": "https://s99pr.com/wp-content/uploads/2025/04/Ars_Technica_logo_circle.svg.png",
  "Ask Men": "https://s99pr.com/wp-content/uploads/2025/06/askmen-logo-1.png",
  "AV Club": "https://s99pr.com/wp-content/uploads/2025/09/The_A.V._Club_logo.svg.png",
  "Barchart PR": "https://s99pr.com/wp-content/uploads/2025/03/Barchart-Press-Release-1.png",
  "BBC": "https://s99pr.com/wp-content/uploads/2025/03/BBC_Logo_2021.svg",
  "Billboard (Italy)": "https://s99pr.com/wp-content/uploads/2025/06/Billboard_logo.svg-1.png",
  "Biz Journals Chicago": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "Biz Journals Dallas": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "Biz Journals Los Angeles": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "Biz Journals Miami": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "Biz Journals New York": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "Bon Appétit": "https://s99pr.com/wp-content/uploads/2025/04/Bon_Appetit_logo.svg-1.png",
  "California Business": "https://s99pr.com/wp-content/uploads/2025/03/California-Business-Journal.png",
  "CNET": "https://s99pr.com/wp-content/uploads/2025/06/cnet-eonxkqm075ppd3ugrezj5i-1.webp",
  "Condé Nast Traveler": "https://s99pr.com/wp-content/uploads/2025/04/logo-seo-1-1.png",
  "Cosmopolitan ME": "https://s99pr.com/wp-content/uploads/2025/03/Cosmopolitan-Middle-East-1.png",
  "Daily Express": "https://s99pr.com/wp-content/uploads/2025/09/daily-express-logo-black-white-removebg-preview.png",
  "Daily Mail": "https://s99pr.com/wp-content/uploads/2025/03/New-Daily-Mail-logoCrest-3279x567px.png",
  "Daily Star": "https://s99pr.com/wp-content/uploads/2025/03/dailystar-logo.png",
  "Distractify+MSN": "https://s99pr.com/wp-content/uploads/2025/03/Distractify.com-Syndicates-with-MSN.png",
  "Due + MSN": "https://s99pr.com/wp-content/uploads/2025/03/Due.com-Syndicates-to-Entrepreneur-Nasdaq-MSN.png",
  "Elle Canada": "https://s99pr.com/wp-content/uploads/2023/09/elle-logo.png",
  "Elle IN": "https://s99pr.com/wp-content/uploads/2023/09/elle-logo.png",
  "Entrepreneur AP": "https://s99pr.com/wp-content/uploads/2025/03/entrepreneur-.png",
  "Entrepreneur IN": "https://s99pr.com/wp-content/uploads/2025/03/entrepreneur-.png",
  "Entrepreneur ME": "https://s99pr.com/wp-content/uploads/2025/03/entrepreneur-.png",
  "Entrepreneur UK": "https://s99pr.com/wp-content/uploads/2025/03/entrepreneur-.png",
  "Epicurious": "https://s99pr.com/wp-content/uploads/2025/04/Epicurious_Logo_2014__1___1_-removebg-preview.png",
  "Esquire (Australia)": "https://s99pr.com/wp-content/uploads/2025/03/Esquire-Australia.png",
  "Esquire ME": "https://s99pr.com/wp-content/uploads/2025/03/Esquire-Middle-East.png",
  "Esquire TR": "https://s99pr.com/wp-content/uploads/2025/04/Esquire-Australia.png",
  "Extreme Tech": "https://s99pr.com/wp-content/uploads/2025/06/ExtremeTech_logo_bw_whitebg__1_-removebg-preview.png",
  "Fast Company AF": "https://s99pr.com/wp-content/uploads/2025/03/Fast-Company-Africa.png",
  "Fast Company MX": "https://s99pr.com/wp-content/uploads/2025/03/Fast-Company-Mexico.png",
  "Forbes (Italy) / Forbes ARG": "https://s99pr.com/wp-content/uploads/2023/09/forbes-logo.png",
  "Forbes AU": "https://s99pr.com/wp-content/uploads/2022/09/4-24.png",
  "Forbes Business Council": "https://s99pr.com/wp-content/uploads/2023/09/forbes-logo.png",
  "Forbes Colombia": "https://s99pr.com/wp-content/uploads/2025/01/fTQSaTwoeNCp3Og9MxIwZHirJxQ.png",
  "Forbes Israel": "https://s99pr.com/wp-content/uploads/2022/09/4-24.png",
  "Forbes IT": "https://s99pr.com/wp-content/uploads/2022/09/4-24.png",
  "Forbes MX": "https://s99pr.com/wp-content/uploads/2025/01/fTQSaTwoeNCp3Og9MxIwZHirJxQ.png",
  "Forbes TR": "https://s99pr.com/wp-content/uploads/2025/01/fTQSaTwoeNCp3Og9MxIwZHirJxQ.png",
  "Forbes US": "https://s99pr.com/wp-content/uploads/2025/01/fTQSaTwoeNCp3Og9MxIwZHirJxQ.png",
  "Glamour": "https://s99pr.com/wp-content/uploads/2025/04/Glamour-Logo-2.png",
  "Glamour SA": "https://s99pr.com/wp-content/uploads/2025/04/Glamour-Logo-2.png",
  "Geekwire": "https://s99pr.com/wp-content/uploads/2025/03/Geekwire-1-1.png",
  "Global Banking & Finance": "https://s99pr.com/wp-content/uploads/2025/03/Global-Banking-Finance.png",
  "GQ SA": "https://s99pr.com/wp-content/uploads/2025/03/gq-logo-png_seeklogo-306176.png",
  "GQ TR": "https://s99pr.com/wp-content/uploads/2025/03/gq.svg",
  "Green Matters": "https://s99pr.com/wp-content/uploads/2025/03/Green-Matters-Syndicates-with-MSN-Apple-News.png",
  "Harper's Bazaar AR": "https://s99pr.com/wp-content/uploads/2025/03/harper-removebg-preview.png",
  "Harper's Bazaar AU": "https://s99pr.com/wp-content/uploads/2025/03/harper-removebg-preview.png",
  "Harper's Bazaar TR": "https://s99pr.com/wp-content/uploads/2025/03/harper-removebg-preview.png",
  "Harper's Bazaar VN": "https://s99pr.com/wp-content/uploads/2025/03/harper-removebg-preview.png",
  "House & Garden AF": "https://s99pr.com/wp-content/uploads/2025/03/House-Garden-Africa.png",
  "HuffPost": "https://s99pr.com/wp-content/uploads/2025/06/Huffpost-01.png",
  "Hypebae AU": "https://s99pr.com/wp-content/uploads/2025/03/Hypebae-Australia.png",
  "Hypebeast AU": "https://s99pr.com/wp-content/uploads/2025/03/Hypebeast-Australia.png",
  "InStyle MX": "https://s99pr.com/wp-content/uploads/2025/03/InStyle-Mexico.png",
  "Investing": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_.png",
  "Investing AU": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_-1.png",
  "Investing CA": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_-1.png",
  "Investing China": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_-1.png",
  "Investing HK": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_-1.png",
  "Investing UK": "https://s99pr.com/wp-content/uploads/2025/03/Investing.com_-1.png",
  "Jezebel": "https://s99pr.com/wp-content/uploads/2025/03/Jezebel.com_.png",
  "Ladygunn": "https://s99pr.com/wp-content/uploads/2025/03/Ladygunn.com-1.png",
  "Lifehacker": "https://s99pr.com/wp-content/uploads/2025/06/lifehacker_wordmark_logo_icon_170251-1.webp",
  "L'Officiel Austria": "https://s99pr.com/wp-content/uploads/2025/03/LOfficiel-Austria-1.png",
  "Marie Claire NL": "https://s99pr.com/wp-content/uploads/2025/03/Marie-Claire-Netherlands.png",
  "Marie Claire UA": "https://s99pr.com/wp-content/uploads/2025/03/Marie-Claire-Ukraine-IG-Post-1.png",
  "Mashable": "https://s99pr.com/wp-content/uploads/2025/03/Mashable-NL.png",
  "Maxim": "https://s99pr.com/wp-content/uploads/2025/03/Maxim-Full-Feature.png",
  "Medical Daily": "https://s99pr.com/wp-content/uploads/2025/03/Medical-Daily-1.png",
  "Men's Health AU": "https://s99pr.com/wp-content/uploads/2025/03/Men_s_health-removebg-preview.png",
  "Metro UK": "https://s99pr.com/wp-content/uploads/2025/09/metro-co-uk-logo-vector-removebg-preview.png",
  "Miami Herald PR": "https://s99pr.com/wp-content/uploads/2025/03/Miami-Herald-Press-Release.png",
  "Mirror UK": "https://s99pr.com/wp-content/uploads/2025/05/Mirror_logo_black_text-removebg-preview.png",
  "Muscle & Fitness": "https://s99pr.com/wp-content/uploads/2025/03/Muscle-Fitness-Includes-Social-Post.png",
  "National Enquirer": "https://s99pr.com/wp-content/uploads/2025/05/Black_and_white__1_-removebg-preview.png",
  "OK! Magazine": "https://s99pr.com/wp-content/uploads/2025/03/OK-Magazine.png",
  "Paper Mag": "https://s99pr.com/wp-content/uploads/2025/03/Paper-Mag-2.png",
  "PC Mag": "https://s99pr.com/wp-content/uploads/2025/06/pcmag-logo-bw-white-bg-new-removebg-preview.png",
  "Pitchfork": "https://s99pr.com/wp-content/uploads/2025/04/Pitchfork_Wordmark__2_-removebg-preview.png",
  "Playboy NL": "https://s99pr.com/wp-content/uploads/2025/03/Playboy-Netherlands.png",
  "Press Release": "https://s99pr.com/wp-content/uploads/2025/09/Screenshot_2025-09-17_140134-removebg-preview.png",
  "Reader (San Diego Reader)": "https://s99pr.com/wp-content/uploads/2025/03/Reader-Logo-2020-Website_800x-removebg-preview-2.png",
  "Readwrite": "https://s99pr.com/wp-content/uploads/2025/03/Readwrite.com_.png",
  "Robb Report IT": "https://s99pr.com/wp-content/uploads/2025/03/Robb-Report-Italy.png",
  "Robb Report MX": "https://s99pr.com/wp-content/uploads/2025/03/Robb-Report-Mexico.png",
  "Rolling Stone": "https://s99pr.com/wp-content/uploads/2025/03/Rolling-Stone-400000-Impressions.png",
  "Rolling Stone (Australia)": "https://s99pr.com/wp-content/uploads/2025/03/Rolling-Stone-Australia.png",
  "Rolling Stone (MENA)": "https://s99pr.com/wp-content/uploads/2025/03/Rolling-Stone-400000-Impressions.png",
  "Rolling Stone (UK)": "https://s99pr.com/wp-content/uploads/2025/03/Rolling-Stone-400000-Impressions.png",
  "Rolling Stone AU": "https://s99pr.com/wp-content/uploads/2025/03/Rolling-Stone-Australia.png",
  "San Diego Reader": "https://s99pr.com/wp-content/uploads/2025/03/Reader-Logo-2020-Website_800x-removebg-preview-2.png",
  "Science Times": "https://s99pr.com/wp-content/uploads/2025/03/Science-Times-1.png",
  "Self": "https://s99pr.com/wp-content/uploads/2025/04/Self_magazine_logo.svg-1.png",
  "Silicon Valley": "https://s99pr.com/wp-content/uploads/2025/05/Silicon-Valley-pinned-logo-bw-removebg-preview.png",
  "Smart Company AU": "https://s99pr.com/wp-content/uploads/2025/03/Smart-Company-Australia.png",
  "Splinter": "https://s99pr.com/wp-content/uploads/2025/03/Splinter_logo-removebg-preview-2.png",
  "Sporting News": "https://s99pr.com/wp-content/uploads/2025/04/Sporting_News__1_-removebg-preview.png",
  "Star Magazine": "https://s99pr.com/wp-content/uploads/2025/05/star_logo_bw__1_-removebg-preview.png",
  "Technori": "https://s99pr.com/wp-content/uploads/2025/04/Technori-logo__1___1_-removebg-preview.png",
  "Teen Vogue": "https://s99pr.com/wp-content/uploads/2025/04/teen-vogue-SQUARE-GOOD-removebg-preview.png",
  "The Biz Journals Chicago": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "The Defiant": "https://s99pr.com/wp-content/uploads/2025/06/thedefiant-removebg-preview.png",
  "The Independent": "https://s99pr.com/wp-content/uploads/2025/03/The-Independent-Logo-1986.png",
  "The Sun": "https://s99pr.com/wp-content/uploads/2025/09/The-Sun-logo-black-white-removebg-preview.png",
  "Thrive Global": "https://s99pr.com/wp-content/uploads/2025/03/Thrive-Global-Mention-Quote.png",
  "Time": "https://s99pr.com/wp-content/uploads/2025/03/time-logo-black-transparent.png",
  "Time Africa": "https://s99pr.com/wp-content/uploads/2025/03/time-logo-black-transparent.png",
  "Top Gear ME": "https://s99pr.com/wp-content/uploads/2025/04/png-clipart-car-top-gear-television-show-logo-car-television-text-removebg-preview.png",
  "Travel and Leisure MX": "https://s99pr.com/wp-content/uploads/2025/03/Travel-and-Leisure-Mexico.png",
  "Variety": "https://s99pr.com/wp-content/uploads/2025/03/Variety_magazine-Logo.wine-1.png",
  "Variety AU": "https://s99pr.com/wp-content/uploads/2025/03/Variety_magazine-Logo.wine-1.png",
  "Village Voice": "https://s99pr.com/wp-content/uploads/2025/06/BW-removebg-preview.png",
  "Vogue TR": "https://s99pr.com/wp-content/uploads/2025/04/Vogue-Ukraine-1.png",
  "Vogue UA": "https://s99pr.com/wp-content/uploads/2025/03/Vogue-Ukraine.png",
  "Wired": "https://s99pr.com/wp-content/uploads/2025/07/wired-logo-png_seeklogo-153317-removebg-preview.png",
  "Women's Health AU": "https://s99pr.com/wp-content/uploads/2025/03/Womens-Health-Logo-1.png",
  "Wonderwall": "https://s99pr.com/wp-content/uploads/2025/03/Wonderwall.com-2.png",
  "Yahoo Entertainment": "https://s99pr.com/wp-content/uploads/2022/09/10-2.png",
  "ZDNET": "https://s99pr.com/wp-content/uploads/2025/06/zdnet-new-20226207.logowik.com__1_-removebg-preview.png",
  "Elite Daily": "https://s99pr.com/wp-content/uploads/2025/03/Elite-Daily-1.png",
  "The Biz Journals Dallas": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "The Biz Journals New York": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "The Biz Journals Los Angeles": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",
  "The Biz Journals Miami": "https://s99pr.com/wp-content/uploads/2025/03/BizJournals.com-Chicago-1-1.png",

  // $147 section logos
  "New York Weekly": "https://newsanchored.com/wp-content/uploads/2025/06/ny-weekly-hq-2025.png",
  "US Reporter": "https://newsanchored.com/wp-content/uploads/2025/06/us-reporter-white.png",
  "Los Angeles Wire": "https://newsanchored.com/wp-content/uploads/2025/06/la-wire-with-tm.png",
  "CEO Weekly": "https://newsanchored.com/wp-content/uploads/2025/07/CEO-Weekly-2025-Black.png",
  "Kivo Daily": "https://newsanchored.com/wp-content/uploads/2024/08/8-1.png",
  "US Insider": "https://newsanchored.com/wp-content/uploads/2025/04/us-insider-white.png",
  "US Business News": "https://newsanchored.com/wp-content/uploads/2025/06/us-busines-news-white.png",
  "World Reporter": "https://newsanchored.com/wp-content/uploads/2024/08/30.png",
  "The American News": "https://newsanchored.com/wp-content/uploads/2024/12/american-news-1-768x87-1.webp",
  "Market Daily": "https://newsanchored.com/wp-content/uploads/2024/08/23.png",
  "Economic Insider": "https://newsanchored.com/wp-content/uploads/2024/12/Economic-Insider-3.png",
  "Wall Street Times": "https://newsanchored.com/wp-content/uploads/2025/04/gqbnqgi.png",
  "Real Estate Today": "https://newsanchored.com/wp-content/uploads/2024/12/Real-Estate-Today-1.png",
  "Portland News": "https://newsanchored.com/wp-content/uploads/2025/05/pnews_white-all.png",
  "Miami Wire": "https://newsanchored.com/wp-content/uploads/2025/05/New-logos-5.png",
  "New York Wire": "https://newsanchored.com/wp-content/uploads/2025/05/New-logos-6.png",
  "Atlanta Wire": "https://newsanchored.com/wp-content/uploads/2025/05/New-logos-4.png",
  "Texas Today": "https://newsanchored.com/wp-content/uploads/2025/06/texas-today-white.png",
  "San Francisco Post": "https://newsanchored.com/wp-content/uploads/2025/06/sfp-with-tm.png",
  "California Gazette": "https://newsanchored.com/wp-content/uploads/2024/08/31.png",
  "California Observer": "https://newsanchored.com/wp-content/uploads/2023/01/California-observer-white-2.svg",
  "The Chicago Journal": "https://newsanchored.com/wp-content/uploads/2025/06/CHICAGO-JOURNAL-WHITE.png",
  "Voyage New York": "https://newsanchored.com/wp-content/uploads/2024/08/27.png",
  "Women's Journal": "https://newsanchored.com/wp-content/uploads/2025/06/wj-new-2025.png",
  "BLK News": "https://newsanchored.com/wp-content/uploads/2024/12/BLK-1-white.png",
  "Influencer Daily": "https://newsanchored.com/wp-content/uploads/2024/08/7-1.png",
  "Artist Weekly": "https://newsanchored.com/wp-content/uploads/2024/08/2-2.png",
  "Entertainment Post": "https://newsanchored.com/wp-content/uploads/2025/03/ent2.png",
  "Music Observer": "https://newsanchored.com/wp-content/uploads/2025/06/2sagagag.png",
  "Famous Times": "https://newsanchored.com/wp-content/uploads/2025/06/famous-times-white.png",
  "Celebrity News": "https://newsanchored.com/wp-content/uploads/2024/08/4-3.png",
  "Net Worth": "https://newsanchored.com/wp-content/uploads/2024/08/9-1.png",
  "Entertainment Monthly News": "https://newsanchored.com/wp-content/uploads/2025/07/e-monthly-news-white.png",
};

// Build a logo URL (uses LOGO_MAP first; otherwise attempts a predictable path on s99pr)
function getLogoUrl(name: string, customLogo?: string) {
  if (customLogo) return customLogo;
  if (LOGO_MAP[name]) return LOGO_MAP[name];
  const safeName = name.replace(/[^a-zA-Z0-9]/g, "-");
  return `https://s99pr.com/wp-content/uploads/2025/03/${safeName}.png`;
}

/* ---------------------------
   TYPES
----------------------------*/
type UiCategory = Category | "all";

type Top147Item = {
  name: string;
  dr: number | string; // not shown
  link?: string | null;
  logo?: string | null;
};

type Top147Group = { title: string; items: Top147Item[] };

/* ---------------------------
   $147 DATA (flattened into one list)
----------------------------*/
const TOP147_GROUPS: Top147Group[] = [
  {
    title: "Power Network",
    items: [
      { name: "New York Weekly", dr: 74, logo: LOGO_MAP["New York Weekly"] },
      { name: "US Reporter", dr: 59, logo: LOGO_MAP["US Reporter"] },
      { name: "Los Angeles Wire", dr: 64, logo: LOGO_MAP["Los Angeles Wire"] },
      { name: "CEO Weekly", dr: 62, logo: LOGO_MAP["CEO Weekly"] },
      { name: "Kivo Daily", dr: 62, logo: LOGO_MAP["Kivo Daily"] },
    ],
  },
  {
    title: "National Publications",
    items: [
      { name: "US Insider", dr: 49, logo: LOGO_MAP["US Insider"] },
      { name: "US Business News", dr: 52, logo: LOGO_MAP["US Business News"] },
      { name: "World Reporter", dr: 51, logo: LOGO_MAP["World Reporter"] },
      { name: "The American News", dr: 18, logo: LOGO_MAP["The American News"] },
      { name: "Market Daily", dr: 59, logo: LOGO_MAP["Market Daily"] },
      { name: "Economic Insider", dr: 53, logo: LOGO_MAP["Economic Insider"] },
      { name: "Wall Street Times", dr: 52, logo: LOGO_MAP["Wall Street Times"] },
      { name: "Real Estate Today", dr: 50, logo: LOGO_MAP["Real Estate Today"] },
    ],
  },
  {
    title: "Regional Publications",
    items: [
      { name: "Portland News", dr: 53, logo: LOGO_MAP["Portland News"] },
      { name: "Miami Wire", dr: 57, logo: LOGO_MAP["Miami Wire"] },
      { name: "New York Wire", dr: 49, logo: LOGO_MAP["New York Wire"] },
      { name: "Atlanta Wire", dr: 56, logo: LOGO_MAP["Atlanta Wire"] },
      { name: "Texas Today", dr: 53, logo: LOGO_MAP["Texas Today"] },
      { name: "San Francisco Post", dr: 57, logo: LOGO_MAP["San Francisco Post"] },
      { name: "California Gazette", dr: 27, logo: LOGO_MAP["California Gazette"] },
      { name: "California Observer", dr: 27, logo: LOGO_MAP["California Observer"] },
      { name: "The Chicago Journal", dr: 54, logo: LOGO_MAP["The Chicago Journal"] },
      { name: "Voyage New York", dr: 58, logo: LOGO_MAP["Voyage New York"] },
    ],
  },
  {
    title: "Niche & Specialty Publications",
    items: [
      { name: "Women's Journal", dr: 58, logo: LOGO_MAP["Women's Journal"] },
      { name: "BLK News", dr: 51, logo: LOGO_MAP["BLK News"] },
      { name: "Influencer Daily", dr: 48, logo: LOGO_MAP["Influencer Daily"] },
      { name: "Artist Weekly", dr: 54, logo: LOGO_MAP["Artist Weekly"] },
      { name: "Entertainment Post", dr: 55, logo: LOGO_MAP["Entertainment Post"] },
      { name: "Music Observer", dr: 54, logo: LOGO_MAP["Music Observer"] },
      { name: "Famous Times", dr: 52, logo: LOGO_MAP["Famous Times"] },
      { name: "Celebrity News", dr: 53, logo: LOGO_MAP["Celebrity News"] },
      { name: "Net Worth", dr: 51, logo: LOGO_MAP["Net Worth"] },
      { name: "Entertainment Monthly News", dr: 49, logo: LOGO_MAP["Entertainment Monthly News"] },
    ],
  },
];
const TOP147_ALL: Top147Item[] = TOP147_GROUPS.flatMap((g) => g.items);

/* ---------------------------
   CATEGORY FILTER CONFIG (unchanged)
----------------------------*/
const CATEGORIES: { key: UiCategory; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "best-sellers", label: "Best Seller", icon: List },
  { key: "business", label: "Business", icon: Building },
  { key: "tech", label: "Tech", icon: Lightbulb },
  { key: "fashion", label: "Fashion", icon: Glasses },
  { key: "entertainment", label: "ENT", icon: Images },
  { key: "lifestyle", label: "Lifestyle", icon: Heart },
  { key: "luxury", label: "Luxury", icon: Gem },
  { key: "news", label: "News", icon: Newspaper },
];

/* ======================================================================
   PAGE
====================================================================== */
export default function ServicesPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<UiCategory>("all");

  // Fade-in
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Filter using your Category[]
  const filtered = useMemo(() => {
    if (active === "all") return publications;
    return publications.filter((p) => p.categories.includes(active));
  }, [active]);

  // CTA: open chat for the other publications (unchanged)
  function openCTAChat() {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = "Hi I want to get featured.";

    try {
      w?.call?.("set_session_variables", {
        page: typeof window !== "undefined" ? window.location.pathname : "/service",
        source: "cta_get_featured",
      });
    } catch {}
    try {
      w?.call?.("maximize", { messageDraft: message });
    } catch {
      try { legacy?.open_chat_window?.(); } catch {}
    }
  }

  // $147 checkout (no chat)
  const CHECKOUT_BASE = process.env.NEXT_PUBLIC_CHECKOUT_PATH || "/checkout";
  function goToCheckout(publicationName?: string) {
    const url = publicationName
      ? `${CHECKOUT_BASE}?publication=${encodeURIComponent(publicationName)}&price=147`
      : `${CHECKOUT_BASE}?price=147`;
    router.push(url);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      {/* VALUE PUBLICATIONS — one box, plain logos, single button */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-700 bg-gray-800/70 px-6 sm:px-8 py-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-100">
                Value Publication — <span className="sr-only">$147 each</span>
              </h2>
              <button
                onClick={() => goToCheckout()}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-base sm:text-lg font-extrabold bg-lime-400/95 text-black hover:bg-lime-300 transition shadow-lg hover:shadow-xl"
              >
                $147 each
              </button>
            </div>

            {/* unified grid of logos (no white background) */}
            <div className="grid gap-y-6 gap-x-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {TOP147_ALL.map((it) => (
                <LogoButton key={it.name} item={it} onClick={() => goToCheckout(it.name)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL PUBLICATIONS (unchanged visuals; just add header) */}
      <section className="py-8" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-100 mb-6">
            Premium Publications
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`flex flex-col items-center justify-center w-24 h-24 rounded-xl border text-sm font-medium transition-all ${
                    isActive
                      ? "border-transparent text-white bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-md scale-105"
                      : "border-gray-300/20 bg-gray-100/10 text-gray-400 hover:bg-gray-200/10"
                  }`}
                >
                  <Icon className="w-6 h-6 mb-2 opacity-80" />
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filtered.map((item) => (
              <PublicationTile key={item.slug ?? item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl border border-gray-600 p-12 mb-16">
            <h3 className="text-4xl font-bold text-center text-gray-100 mb-12">
              Why Choose <span style={{ color: "rgb(203, 255, 0)" }}>DNA?</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Benefit icon={<Star className="w-8 h-8" style={{ color: "rgb(203, 255, 0)" }} />} title="Top-Tier Network" desc="Robust connections with leading journalists and editors" />
              <Benefit icon={<Award className="w-8 h-8" style={{ color: "rgb(203, 255, 0)" }} />} title="Industry Authority" desc="Position your brand as a trusted industry leader" />
              <Benefit icon={<TrendingUp className="w-8 h-8" style={{ color: "rgb(203, 255, 0)" }} />} title="Elevated Visibility" desc="Maximize exposure across multiple media channels" />
              <Benefit icon={<Users className="w-8 h-8" style={{ color: "rgb(203, 255, 0)" }} />} title="Tailored Approach" desc="Customized strategies for lasting credibility" />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8">
              <span style={{ color: "rgb(203, 255, 0)" }}>Proven Results</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Your reputation, our commitment. We consistently deliver outstanding results that elevate our clients' <strong className="text-gray-100">presence</strong> and <strong className="text-gray-100">influence</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <StatBox value="1000+" label="Businesses Featured" />
              <StatBox value="500+" label="Media Placements" />
              <StatBox value="95%" label="Client Satisfaction" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl border border-gray-600 text-center py-16 px-8">
            <h3 className="text-4xl font-bold text-gray-100 mb-6">
              Ready to <span style={{ color: "rgb(203, 255, 0)" }}>Elevate Your Brand?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 opacity-90">
              Let&apos;s cultivate your influential personal brand and command the attention you deserve.
            </p>
            <button
              className="text-black px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              style={{ backgroundColor: "rgb(203, 255, 0)", boxShadow: "0 10px 25px rgba(203, 255, 0, 0.2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 40px rgba(203, 255, 0, 0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 10px 25px rgba(203, 255, 0, 0.2)")}
              onClick={openCTAChat}
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ======================================================================
   COMPONENTS
====================================================================== */

// $147 logo button — plain logo (no card/plate). Subtle glow only for very dark assets like CEO Weekly.
function LogoButton({ item, onClick }: { item: Top147Item; onClick: () => void }) {
  const [broken, setBroken] = useState(false);
  const src = getLogoUrl(item.name, item.logo ?? undefined);

  // glow only for specific dark-on-transparent marks
  const extra =
    item.name === "CEO Weekly"
      ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
      : "";

  return (
    <button
      onClick={onClick}
      className="group inline-flex flex-col items-center justify-center"
      title={`Get featured in ${item.name} for $147`}
      aria-label={`Get featured in ${item.name} for $147`}
    >
      {broken ? (
        <span className="text-[11px] tracking-wide text-gray-400">{item.name}</span>
      ) : (
        <Image
          src={src}
          alt={item.name}
          width={220}
          height={80}
          className={`max-h-14 w-auto object-contain transition-transform group-hover:scale-105 ${extra}`}
          onError={() => setBroken(true)}
          unoptimized
        />
      )}
    </button>
  );
}

function Benefit({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
        style={{ backgroundColor: "rgba(203, 255, 0, 0.1)" }}
      >
        {icon}
      </div>
      <h4 className="font-bold text-gray-100 mb-2">{title}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
      <div className="text-4xl font-bold mb-2" style={{ color: "rgb(203, 255, 0)" }}>
        {value}
      </div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
}

function PublicationTile({ item }: { item: Publication }) {
  const [broken, setBroken] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const src = getLogoUrl(item.name, (item as any).logo);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function openQuoteChat(item: Publication) {
    if (typeof window === "undefined") return;
    const w = (window as any).LiveChatWidget;
    const legacy = (window as any).LC_API;
    const message = `Hi, I want to get featured in ${item.name}`;
    try {
      w?.call?.("set_session_variables", {
        publication: item.name,
        slug: item.slug ?? "",
        categories: item.categories?.join(",") ?? "",
        link: item.link ?? "",
        page: typeof window !== "undefined" ? window.location.pathname : "/service",
        source: "services_page_get_quote",
      });
    } catch {}
    try {
      w?.call?.("maximize", { messageDraft: message });
    } catch {
      try { legacy?.open_chat_window?.(); } catch {}
    }
  }

  const PlaceholderLogo = () => (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[160px] h-[56px] rounded-md border border-gray-200 bg-white flex items-center justify-center">
        <span className="text-[10px] tracking-widest text-gray-600">SAMPLE LOGO</span>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`relative group rounded-2xl border border-gray-700 bg-gray-800 p-5 h-64 flex flex-col items-center justify-start transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } hover:border-gray-500`}
      title={`${item.name}${item.bestSeller ? " • Best Seller" : ""}`}
      data-publication={item.slug}
    >
      {item.bestSeller && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="px-3 py-1 text-[10px] font-bold uppercase rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black shadow-sm">
            Best Seller
          </div>
        </div>
      )}

      <div className="mt-3 flex items-center justify-center">
        <div className="w-[200px] h-[72px] rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-3">
          {broken ? (
            <PlaceholderLogo />
          ) : (
            <Image
              src={src}
              alt={item.name}
              width={160}
              height={56}
              className="max-h-12 w-auto object-contain"
              onError={() => setBroken(true)}
              priority={false}
            />
          )}
        </div>
      </div>

      <div className="mt-3 text-sm sm:text-[15px] text-gray-200 text-center leading-tight line-clamp-2">
        {item.name}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {item.link && (
          <a
            className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-700/60 transition"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View sample
          </a>
        )}

        <button
          onClick={() => openQuoteChat(item)}
          className="mt-3 w-full text-xs font-semibold px-3 py-2 rounded-lg bg-lime-400/90 text-black hover:bg-lime-300 transition-colors"
        >
          Get Featured
        </button>
      </div>
    </div>
  );
}
