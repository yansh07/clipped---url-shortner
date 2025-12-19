import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Viewport export (Next.js 14+ separates this from metadata)
// Good for mobile responsiveness and the "theme color" on mobile browsers.
export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 2. The SEO Heavy Lifting
export const metadata: Metadata = {
  // Use metadataBase to fix relative URL issues in production
  // CHANGE THIS to your actual deployed domain later (e.g., https://clipped.io)
  metadataBase: new URL("https://urlclipper.vercel.app/"), 

  title: {
    default: "Clipped | Shorten links, expand reach",
    template: "%s | Clipped", // Child pages will look like "Dashboard | Clipped"
  },
  description: "The high-performance URL shortener for developers. Built with FastAPI, Redis, and Next.js. Real-time analytics, custom slugs, and API access.",
  
  keywords: [
    "URL shortener", 
    "Link management", 
    "Developer tools", 
    "Analytics", 
    "FastAPI", 
    "Next.js", 
    "Open source"
  ],

  authors: [{ name: "Priyanshu Kumar Singh", url: "https://github.com/yansh07" }], // Flex your GitHub
  creator: "Priyanshu Kumar Singh",

  // 3. Open Graph - This is what shows up on Discord/LinkedIn/WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Clipped - Because your URLs are too long.",
    description: "Shorten links, track clicks, and manage your audience with real-time analytics.",
    siteName: "Clipped",
    images: [
      {
        url: "/ogimage.png", // Ensure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Clipped Dashboard Preview",
      },
    ],
  },

  // 4. Twitter Card - Essential for X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Clipped | Shorten links, expand reach",
    description: "Real-time analytics and high-performance URL shortening for pros.",
    images: ["/ogimage.png"],
    creator: "@priyanshu", // Put your X handle here if you have one
  },

  // 5. Icons - The browser tab icon
  icons: {
    icon: "/clipped.svg",
    shortcut: "/clipped-16x16.svg",
    apple: "/clipped.svg", // iOS home screen icon
  },

  // 6. Robots - Invite the spiders in
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      {/* Added 'dark' class just in case Shadcn needs it */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A]`}
      >
        {children}
      </body>
    </html>
  );
}
