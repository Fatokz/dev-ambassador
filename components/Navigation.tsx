"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Refresh ScrollTrigger on mobile to fix the "no animation" issue
    ScrollTrigger.refresh();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Mobile Menu Animation using useGSAP for better React integration
  useGSAP(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.classList.add('no-scroll');

      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        WebkitClipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(".nav-link-mobile",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, ease: "power3.out" }
      );
    } else {
      // Unlock body scroll
      document.body.classList.remove('no-scroll');

      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        WebkitClipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, { dependencies: [isOpen], scope: menuRef });

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Expertise", href: "#skills" },
    { label: "Case Studies", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    // Manually remove no-scroll to ensure immediate scroll compatibility
    document.body.classList.remove('no-scroll');

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // Small delay to allow the menu closing state to settle
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${isScrolled
          ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <div className="flex flex-col cursor-pointer group" onClick={() => scrollToSection("#home")}>
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
              Fatokun <span className="text-accent">Emmanuel</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
              Software Engineer & CTO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-[110] relative p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Premium GSAP Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{
          clipPath: "circle(0% at 100% 0%)",
          WebkitClipPath: "circle(0% at 100% 0%)"
        }}
        className={`fixed inset-0 bg-background z-[150] md:hidden flex flex-col justify-center px-10 transition-all duration-300 ${isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        {/* Decorative Grid for the Menu (Obsidian Style) */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-8">
          <p className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Menu</p>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="nav-link-mobile text-4xl font-bold text-left tracking-tighter hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="h-[1px] w-full bg-border/40 my-4 nav-link-mobile" />

          {/* Socials in Mobile Menu */}
          <div className="flex gap-6 nav-link-mobile">
            <a href="https://github.com/Fatokz" className="text-muted-foreground hover:text-accent transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/fatokun-emmanuel" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:devambassador@gmail.com" className="text-muted-foreground hover:text-accent transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;