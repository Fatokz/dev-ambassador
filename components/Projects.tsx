// components/Projects.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "FarmX Nigeria",
    role: "Chief Technology Officer",
    desc: "Architecting the frontend infrastructure and lead technical execution for a premier AgriTech ecosystem focused on scalable, practical solutions.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    link: "https://usefarmx.com",
    image: "/assets/project-farmx.png"
  },
  {
    title: "The Big 8",
    role: "Co-Founder & Frontend Lead",
    desc: "Co-founded a collective initiative focused on building innovative, user-centric software solutions and driving agile technical execution.",
    tech: ["React", "TypeScript", "Startup Strategy"],
    link: "https://thebig8.info",
    image: "/assets/project-thebig8.png"
  },
  {
    title: "Acaduna",
    role: "Frontend Engineer",
    desc: "Spearheaded the frontend architecture for the platform, successfully developing and deploying a high-conversion landing page.",
    tech: ["React", "Next.js", "Dashboard UI"],
    link: "https://acaduna.com",
    image: "/assets/project-acaduna.png"
  },
  {
    title: "SWOT Builds",
    role: "Frontend Engineer",
    desc: "Engineering clean, practical frontend components utilizing Next.js and TypeScript for robust, high-fidelity web applications.",
    tech: ["TypeScript", "Next.js", "Tailwind"],
    link: "https://swotbuilds.com",
    image: "/assets/project-swotbuilds.png"
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const scrollWidth = scrollRef.current.scrollWidth;
    const totalWidthToScroll = scrollWidth - window.innerWidth;

    gsap.to(scrollRef.current, {
      x: -totalWidthToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scrollWidth * 1.5}`, // Reduced slightly for better mobile feel
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      }
    });

    // Forced refresh after layout settle
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative h-screen w-full overflow-hidden bg-background border-y border-border/20"
    >
      {/* Optimization: Header is absolute on mobile to prevent layout shift 
          and backdrop-blur is removed on mobile for performance.
      */}
      <div className="flex h-full items-center">
        <div
          ref={scrollRef}
          className="flex items-center flex-nowrap h-full pr-[15vw]"
        >
          {/* Section Header - Integrated into the scroll flow for consistency */}
          <div className="flex flex-col justify-center pl-6 md:pl-20 min-w-[90vw] md:min-w-[40vw] h-full pr-10 shrink-0">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Selected <span className="text-accent italic font-medium">Works</span>
            </h2>
            <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
              Case Studies — 2024 / 2026
            </p>
            <div className="mt-8 h-[1px] w-24 bg-accent/40" />
          </div>

          {/* Project Cards Mapping */}
          {projects.map((project, i) => (
            <div
              key={i}
              className="min-w-[85vw] md:min-w-[500px] flex flex-col justify-center group shrink-0 px-4 md:px-0 mr-8 md:mr-16"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/40 mb-6 bg-muted shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 500px"
                  className="object-cover transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-accent transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-500"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="space-y-3 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{project.title}</h3>
                  <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">
                    {project.tech[0]}
                  </span>
                </div>
                <p className="text-accent/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]">{project.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md line-clamp-3 md:line-clamp-none">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map(t => (
                    <span key={t} className="text-[8px] md:text-[9px] text-muted-foreground/60 font-semibold uppercase tracking-wider">
                      # {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Final Spacer for "Precision Ending" */}
          <div className="min-w-[10vw] h-px shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default Projects;