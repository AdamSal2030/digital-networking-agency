// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LiveChat from "@/components/LiveChat";
import MotionRoot from "@/components/MotionRoot";
import PageCurtain from "@/components/PageCurtain";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Networking Agency",
  description: "Global PR agency for guaranteed publicity - Digital Networking Agency",
  keywords: ["PR agency", "media placements", "guaranteed publicity", "USA Today", "CEO Weekly"],
  openGraph: {
    title: "Digital Networking Agency",
    description: "Global PR agency for guaranteed publicity",
    url: "https://www.digitalnetworkingagency.com/",
    siteName: "Digital Networking Agency",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",            // tweak to your brand
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body className="antialiased" suppressHydrationWarning>
        <MotionRoot>{children}</MotionRoot>
        <PageCurtain />
        <LiveChat />
      </body>
    </html>
  );
}
