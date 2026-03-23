// components/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import Scene from "./Scene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Initial entrance for text and buttons
      tl.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
        // 2. Specific "italic" text reveal with a weight/skew shift
        .from(".italic-text", {
          opacity: 0,
          x: -20,
          skewX: -10,
          duration: 1,
          ease: "back.out(1.7)",
        }, "-=0.6")
        // 3. Background glow entrance
        .from(".bg-glow", {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
        }, "-=1");

      // 4. Scroll-driven parallax/fade-out for the entire hero
      gsap.to(heroContentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        opacity: 0,
        ease: "none"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <Scene />
      <div className="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div ref={heroContentRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="reveal text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
          Building scalable <span className="text-accent italic font-medium italic-text inline-block">ecosystems</span> <br className="hidden md:block" /> for the modern web.
        </h1>

        <p className="reveal text-base md:text-lg text-muted-foreground font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          I’m <span className="text-foreground font-bold">Fatokun Emmanuel</span>. A Software Engineer and CTO at FarmX Nigeria. I architect high-performance interfaces with Next.js and TypeScript.
        </p>

        <div className="reveal flex flex-wrap gap-4 justify-center items-center">
          <Button size="lg" className="h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold group">
            View Work <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <a href="/Emmanuel Fatokun Resume _ Frontend.pdf" download>
            <Button variant="outline" size="lg" className="h-12 px-8 rounded-full border-border hover:bg-accent/5 hover:text-accent font-bold">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </div>
      </div>

      <div className="reveal absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent/50 animate-scroll-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;