// components/Resume.tsx
'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Resume = () => {
  const sectionRef = useRef(null);

  const resumeUrl = "/Emmanuel Fatokun Resume _ Frontend.pdf";

  useGSAP(() => {
    gsap.from(".resume-reveal", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: sectionRef });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Emmanuel_Fatokun_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden text-center">
      {/* Subliminal Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <div className="resume-reveal inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em]">
          <span className="w-8 h-[1px] bg-accent"></span>
          Professional Dossier
        </div>

        <h2 className="resume-reveal text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-tight">
          Review my technical <br />
          <span className="text-accent italic font-medium inline-block">legacy</span>.
        </h2>

        <p className="resume-reveal text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          My resume details over 3 years of engineering excellence, from architecting
          frontend infrastructures as a CTO to shipping high-fidelity products with
          Next.js and TypeScript.
        </p>

        <div className="resume-reveal flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleDownload}
            className="h-14 px-10 rounded-full bg-foreground text-background hover:bg-foreground/90 font-bold group shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" /> Download PDF
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(resumeUrl, '_blank')}
            className="h-14 px-10 rounded-full border-border hover:bg-accent/5 hover:text-accent font-bold"
          >
            <ExternalLink className="mr-2 h-5 w-5" /> View Fullscreen
          </Button>
        </div>

        {/* Technical Core Tags */}
        <div className="resume-reveal flex flex-wrap gap-2 justify-center pt-6">
          {["Next.js", "React", "TypeScript", "Tailwind CSS", "Technical Leadership"].map((skill) => (
            <span key={skill} className="px-4 py-1.5 text-[10px] font-bold border border-border/40 rounded-full bg-card/30 text-muted-foreground uppercase tracking-widest">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;