// components/Contact.tsx
'use client';

import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    setTimeout(() => ScrollTrigger.refresh(), 500);
  }, { scope: sectionRef });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate high-fidelity processing
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');

    setTimeout(() => {
      toast({
        title: "Communication Established",
        description: `Thanks ${name}, I'll review your transmission within 24 hours.`,
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const socials = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/Fatokz" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/in/fatokun-emmanuel" },
    { icon: <Mail size={18} />, label: "Email", href: "mailto:devambassador@gmail.com" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Subtle Grid Background to match Hero */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

        {/* Left Side: The "Call to Action" */}
        <div className="lg:col-span-5 space-y-10">
          <div className="contact-reveal inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.3em]">
            <span className="w-8 h-[1px] bg-accent"></span>
            Contact Protocol
          </div>

          <h2 className="contact-reveal text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-[0.9]">
            Let's build the <br />
            <span className="text-accent italic font-medium italic-reveal inline-block">future</span> together.
          </h2>

          <div className="space-y-6">
            <div className="contact-reveal group cursor-pointer flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/5 border border-accent/10 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email</p>
                <p className="text-foreground font-medium">devambassador@gmail.com</p>
              </div>
            </div>

            <div className="contact-reveal group cursor-pointer flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/5 border border-accent/10 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Location</p>
                <p className="text-foreground font-medium">Ibadan, Nigeria (Global Remote)</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="contact-reveal flex gap-4 pt-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-border/60 hover:border-accent hover:text-accent transition-all duration-500 bg-card/30"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: The Premium Form */}
        <div className="lg:col-span-7 contact-reveal">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-[2.5rem] border border-border/40 bg-card/20 backdrop-blur-sm space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input
                  name="name"
                  placeholder="Emmanuel Fatokun"
                  className="h-14 bg-background/50 border-border/40 focus:border-accent rounded-2xl px-6 transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="h-14 bg-background/50 border-border/40 focus:border-accent rounded-2xl px-6 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Message</label>
              <Textarea
                name="message"
                placeholder="Briefly describe your vision..."
                className="min-h-[150px] bg-background/50 border-border/40 focus:border-accent rounded-2xl p-6 transition-all resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-bold text-lg transition-all duration-500 group"
            >
              {isSubmitting ? "Transmitting..." : "Initiate Conversation"}
              <Send className={`ml-2 h-5 w-5 transition-transform duration-500 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;