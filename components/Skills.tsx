// components/Skills.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Code2, Terminal, PenTool, BarChart3 } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
  {
    title: "Core Stack",
    icon: <Code2 className="text-accent" size={20} />,
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js"],
    description: "Architecting high-performance web ecosystems with a focus on scalability and clean architecture.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Engineering Tools",
    icon: <Terminal className="text-accent" size={20} />,
    skills: ["Git", "GitHub", "Postman", "VS Code"],
    description: "Industry-standard version control and API testing workflows.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Design & UX",
    icon: <PenTool className="text-accent" size={20} />,
    skills: ["Figma", "UI/UX Implementation", "Responsive Design", "Optimization"],
    description: "Translating complex Figma designs into pixel-perfect, responsive interfaces.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Strategy & Leadership",
    icon: <BarChart3 className="text-accent" size={20} />,
    skills: ["Technical Leadership", "Product Strategy", "Agile/Scrum", "Collaboration"],
    description: "Driving technical roadmaps as a CTO and leading cross-functional teams to success.",
    className: "md:col-span-2 md:row-span-1",
  }
];

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 1. First, we hide them properly through GSAP to avoid the 'flash'
    gsap.set(".skill-card", { opacity: 0, y: 30 });

    // 2. We use a single batch trigger for the whole container 
    ScrollTrigger.batch(".skill-card", {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true,
        });
      },
      start: "top 85%",
      once: true
    });

    // 3. Force a refresh to ensure all positions are correct
    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Technical <span className="text-accent italic font-medium">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            The Toolkit — Architecture & Execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              // Removed initial opacity from CSS to let GSAP handle it via gsap.set
              className={`skill-card group relative p-8 rounded-3xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-accent/40 transition-all duration-700 flex flex-col justify-between overflow-hidden opacity-0 ${category.className}`}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="mb-6 p-3 w-fit rounded-xl bg-accent/5 border border-accent/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-sm">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-border/60 rounded-full bg-background/50 text-foreground/70 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;