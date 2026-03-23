// components/Projects.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "FarmX Nigeria",
    role: "Chief Technology Officer",
    desc: "Architecting frontend infrastructure and leading technical roadmaps for a premier AgriTech ecosystem.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    link: "https://usefarmx.com",
    image: "/assets/project-farm.jpg"
  },
  {
    title: "Acaduna",
    role: "Frontend Engineer",
    desc: "Spearheading high-conversion landing pages and dynamic admin dashboards for educational growth.",
    tech: ["React", "Next.js", "Dashboard UI"],
    link: "https://acaduna.com",
    image: "/assets/project-portfolio.png"
  },
  {
    title: "Swotbuilds",
    role: "Frontend Engineer",
    desc: "Engineering clean, practical frontend components utilizing Next.js and TypeScript.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://swotbuilds.com",
    image: "/assets/project-invoice.jpg"
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!scrollRef.current || !containerRef.current) return;

      const scrollWidth = scrollRef.current.offsetWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="h-screen overflow-hidden bg-background border-y border-border/20">
      <div className="flex h-full items-center px-10">
        <div className="flex flex-col justify-center min-w-[30vw] pr-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Featured <span className="text-accent italic font-medium italic-reveal">Work</span>
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-[0.2em] font-bold">
            01 — 05 / Selected Case Studies
          </p>
        </div>

        <div ref={scrollRef} className="flex gap-12 items-center flex-nowrap">
          {projects.map((project, i) => (
            <div key={i} className="min-w-[400px] md:min-w-[600px] group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/50 mb-6 bg-muted">
                <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" className="p-4 bg-white rounded-full text-black hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{project.role}</p>
              <div className="flex gap-2">
                {project.tech.map(t => <span key={t} className="px-3 py-1 bg-accent/5 border border-accent/20 rounded-full text-[10px] text-accent font-bold uppercase">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;