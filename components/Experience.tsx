// components/Experience.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    company: "FarmX",
    role: "Chief Technology Officer (CTO)",
    period: "Oct 2025 — Present",
    description: "Architecting and maintaining frontend infrastructure using React, Next.js, and Tailwind CSS. Leading technical execution and collaborating on long-term digital roadmaps to deliver pixel-perfect web interfaces without feature bloat.",
    highlights: ["Infrastructure Architecture", "Technical Roadmap", "Pixel-Perfect UI"]
  },
  {
    company: "Acaduna",
    role: "Frontend Engineer",
    period: "Nov 2025 — Present",
    description: "Spearheading frontend architecture and deploying high-conversion landing pages. Engineering dynamic admin dashboard user interfaces with clean, integrated code structures designed for seamless backend integration.",
    highlights: ["Frontend Architecture", "Admin Dashboards", "Brand Identity"]
  },
  {
    company: "swotbuilds",
    role: "Frontend Engineer",
    period: "Nov 2025 — Present",
    description: "Engineering clean, practical frontend components utilizing Next.js, TypeScript, and Tailwind CSS. Synergizing with co-developers to maintain simple, high-fidelity codebases aligned with core project deliverables.",
    highlights: ["Next.js & TypeScript", "Maintainable Codebase", "High Fidelity UI"]
  },
  {
    company: "paywithchangee",
    role: "Front End Developer",
    period: "March 2025 — Aug 2025",
    description: "Engineered responsive web interfaces using React, TailwindCSS, and JavaScript. Collaborated with designers to translate design mockups into functional web applications while managing version control via Git.",
    highlights: ["Responsive Design", "Git Workflow", "UI/UX Translation"]
  },
  {
    company: "The Big 8",
    role: "Co-Founder",
    period: "2025 — Present",
    description: "Co-founded a collective initiative focused on building innovative, user-centric software solutions. Driving collective decision-making and agile technical execution to ensure high-quality, practical outcomes.",
    highlights: ["Startup Strategy", "Agile Execution", "Innovation"]
  },
  {
    company: "Book Sync",
    role: "Frontend Developer",
    period: "Academic Project",
    description: "Architected the frontend interface for a comprehensive academic assessment project using modern web frameworks, meeting strict university evaluation standards for functional, user-friendly digital products.",
    highlights: ["Academic Assessment", "Clean Code", "UX Strategy"]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 70%",
        end: "bottom 80%",
        scrub: true,
      }
    });

    gsap.from(".exp-card", {
      x: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
      }
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Professional <span className="text-accent italic font-medium">Experience</span>
          </h2>
          <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            The Legacy — Engineering & Strategic Leadership
          </p>
        </div>

        <div ref={triggerRef} className="relative pl-8 md:pl-12">
          <div className="timeline-line absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card relative">
                <div className="absolute -left-[33px] md:-left-[49px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_15px_rgba(94,234,212,0.6)]" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent/80">
                      {exp.period}
                    </p>
                  </div>

                  <div className="md:col-span-9 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {exp.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {exp.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-border/60 rounded-full bg-card/50 text-foreground/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;