import "./../styles/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata = {
  title: "Ocean Premium — Underwater Defence & AI",
  description: "Pioneering Underwater Defence, AI & Life-Saving Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} bg-deepsea text-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
