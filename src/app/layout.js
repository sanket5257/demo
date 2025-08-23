import Footer from "@/components/Footer";
import "./../styles/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";

// Google fonts (fine if Apple privacy doesn’t block CDN, but self-host is safer)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Ocean Premium — Underwater Defence & AI",
  description: "Pioneering Underwater Defence, AI & Life-Saving Systems",
};

// 👇 Add viewport & themeColor for iOS
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // ✅ notch-safe fullscreen
  themeColor: "#061925", // matches your deepsea bg
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* ✅ iOS PWA & status bar handling */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${inter.variable} ${space.variable} 
          bg-deepsea text-body antialiased h-full min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}





























































































