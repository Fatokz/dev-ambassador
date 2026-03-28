// components/About.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

// Register ScrollTrigger only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // 1. General stagger reveal for all content
    gsap.from(".about-reveal", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // 2. Specialized animation for the italicized "precision"
    gsap.from(".italic-reveal", {
      opacity: 0,
      x: -20,
      skewX: -10,
      duration: 1,
      delay: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    // 3. Subtle scale reveal for the headshot
    gsap.from(".image-zoom", {
      scale: 1.15,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left Content (Col 1-7) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="about-reveal inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-accent"></span>
            Professional Profile
          </div>

          <h2 className="about-reveal text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Engineering products with <br />
            <span className="text-accent italic font-medium italic-reveal inline-block">precision</span> and strategic vision.
          </h2>

          <div className="about-reveal space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              With over 3 years in the React ecosystem, I’ve transitioned from building interfaces to architecting
              scalable <span className="text-foreground font-semibold">digital ecosystems</span>. My dual role as a Frontend Engineer and CTO at <span className="text-foreground font-semibold">FarmX Nigeria </span>
              allows me to bridge the gap between high-level product strategy and granular technical execution.
            </p>
            <p>
              I specialize in <span className="text-foreground font-semibold">Next.js, TypeScript, and Tailwind CSS</span>,
              focusing on creating "Obsidian-grade" applications that are as performant as they are visually stunning.
              My goal is always the same: zero feature bloat, maximum user impact.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="about-reveal grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
            <div>
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">10+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Projects Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">CTO</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Current Leadership</p>
            </div>
          </div>
        </div>

        {/* Right Visual (Col 8-12) */}
        <div className="about-reveal lg:col-span-5 relative group">
          {/* Interactive Glow Effect */}
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-muted">
            <Image
              src="/assets/CTO-Headshot.jpg"
              alt="Fatokun Emmanuel"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
              className="image-zoom object-cover transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating CTO Metric */}
          <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block">
            <p className="text-xs font-bold text-accent uppercase tracking-tighter">Current Focus</p>
            <p className="text-sm font-medium text-foreground">Scaleable AgriTech Infra</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;