// components/MobileApps.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { Smartphone } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const apps = [
  {
    name: "FarmX",
    tagline: "Fresh For You",
    role: "CTO & Team Lead — Hands-on Developer",
    desc: "A farm-to-buyer marketplace connecting farmers, wholesalers, retailers and exporters across Nigeria. I led the engineering team as CTO while building core parts of the app myself — from the shopping experience to secure payments.",
    features: [
      "Paystack payments with escrow protection",
      "Pre-orders for upcoming harvests",
      "Bulk purchasing & curated bundle deals",
      "Order tracking & delivery confirmation",
    ],
    tech: ["React Native", "TypeScript", "iOS", "Android"],
    appStore: "https://apps.apple.com/app/farmx-fresh-for-you/id6758057356",
    playStore: "https://play.google.com/store/apps/details?id=com.farmx.app",
    screens: ["/assets/apppreview5.png", "/assets/apppreview6.png"],
  },
];

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M16.37 12.78c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.51 1.25-2.58-.03-.01-2.39-.92-2.4-3.66ZM14.1 6.03c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.05-.51 2.68-1.27Z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M3.6 2.3a1.5 1.5 0 0 0-.6 1.22v16.96c0 .5.23.94.6 1.22L13.4 12 3.6 2.3Zm11.03 8.47 2.6-2.6L5.6 1.5l9.03 9.27Zm0 2.46L5.6 22.5l11.63-6.67-2.6-2.6Zm5.84-3.07-2.2-1.26-2.82 2.82 2.82 2.82 2.2-1.26c.95-.55.95-2.57 0-3.12Z" />
  </svg>
);

const StoreButton = ({ href, icon, small, label }: { href: string; icon: React.ReactNode; small: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-foreground text-background hover:bg-accent hover:text-white transition-colors shadow-lg"
  >
    {icon}
    <span className="flex flex-col leading-none text-left">
      <span className="text-[9px] uppercase tracking-wider opacity-70">{small}</span>
      <span className="text-sm font-bold">{label}</span>
    </span>
  </a>
);

const MobileApps = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".apps-reveal", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    gsap.from(".apps-screens", {
      y: 80,
      opacity: 0,
      rotate: 2,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: sectionRef });

  return (
    <section id="apps" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16">
          <div className="apps-reveal inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <span className="w-8 h-[1px] bg-accent"></span>
            Beyond the Browser
          </div>
          <h2 className="apps-reveal text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Mobile <span className="text-accent italic font-medium">Applications</span>
          </h2>
          <p className="apps-reveal text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            Shipped to the App Store & Google Play
          </p>
        </div>

        {apps.map((app) => (
          <div key={app.name} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Details */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="apps-reveal flex flex-wrap items-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{app.name}</h3>
                <span className="text-muted-foreground text-lg italic">— {app.tagline}</span>
              </div>

              <div className="apps-reveal flex flex-wrap items-center gap-3">
                <p className="text-accent/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{app.role}</p>
                <span className="inline-flex items-center gap-1 text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">
                  <Smartphone size={10} /> iOS & Android
                </span>
              </div>

              <p className="apps-reveal text-base text-muted-foreground leading-relaxed max-w-xl">
                {app.desc}
              </p>

              <ul className="apps-reveal grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {app.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="apps-reveal flex flex-wrap gap-2">
                {app.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-border/60 rounded-full bg-background/50 text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="apps-reveal flex flex-wrap gap-3 pt-2">
                <StoreButton href={app.appStore} icon={<AppleIcon />} small="Download on the" label="App Store" />
                <StoreButton href={app.playStore} icon={<PlayIcon />} small="Get it on" label="Google Play" />
              </div>
            </div>

            {/* Screens — the store previews form one continuous panorama, so they sit flush */}
            <div className="apps-screens lg:col-span-6 order-1 lg:order-2 group relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="relative flex max-w-md mx-auto overflow-hidden rounded-[2rem] border border-border/40 shadow-2xl bg-muted">
                {app.screens.map((src, i) => (
                  <div key={src} className="relative w-1/2 aspect-[1242/2688]">
                    <Image
                      src={src}
                      alt={`${app.name} app screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 224px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileApps;
