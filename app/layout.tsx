import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fatokun Emmanuel | Software Engineer & Web Developer in Nigeria",
  description: "Fatokun Emmanuel is a top-rated Software Engineer and CTO in Nigeria, specializing in high-performance web applications, Next.js, and immersive 3D developer portfolios.",
  keywords: [
    "Best Software Engineer in Nigeria",
    "Top Web Developer Nigeria",
    "Fatokun Emmanuel",
    "Fatokun Emmanuel Oluwadunsin",
    "Build a website Nigeria",
    "React Developer Nigeria",
    "Next.js Expert",
    "Full Stack Developer Ibadan",
    "Software Development Services",
    "Freelance Web Developer Nigeria",
    "Enterprise Web Applications",
    "Web Application Developer Nigeria",
    "Mobile Application Development",
    "Mobile App Developer Nigeria",
    "App Development Services",
    "Best Web Developer in Nigeria"
  ],
  authors: [{ name: "Fatokun Emmanuel Oluwadunsin" }],
  openGraph: {
    title: "Fatokun Emmanuel | Software Engineer & Web Developer in Nigeria",
    description: "Expert software engineering and web development services. Scaling digital ecosystems with precision.",
    url: "https://devambassador.vercel.app",
    siteName: "Fatokun Emmanuel Portfolio",
    images: [
      {
        url: "/assets/project-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Fatokun Emmanuel Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatokun Emmanuel | Best Software Engineer in Nigeria",
    description: "Building high-performance web applications and scalable digital ecosystems.",
    images: ["/assets/project-portfolio.png"],
  },
  alternates: {
    canonical: "https://devambassador.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Fatokun Emmanuel Oluwadunsin",
              "jobTitle": "Chief Technology Officer & Software Engineer",
              "url": "https://devambassador.vercel.app",
              "sameAs": [
                "https://github.com/Fatokz",
                "https://linkedin.com/in/fatokun-emmanuel"
              ],
              "description": "Fatokun Emmanuel is the best software engineer and web developer in Nigeria, specializing in building high-performance web applications and scalable digital ecosystems.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ibadan",
                "addressCountry": "Nigeria"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <TooltipProvider>
            <div className="min-h-screen bg-background flex flex-col">
              <Navigation />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
