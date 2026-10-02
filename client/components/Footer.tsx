// components/Footer.tsx
'use client';

import { Github, Linkedin, Mail, ArrowUp, Zap } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-black font-bold">
                E
              </div>
              <span className="text-xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                FATOKUN EMMANUEL
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Chief Technology Officer at FarmX Nigeria. <br />
              Architecting high-performance digital ecosystems with a focus on
              <span className="text-foreground"> precision engineering</span> and strategic vision.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/fatokun-emmanuel" },
                { icon: <Github size={18} />, href: "https://github.com/Fatokz" },
                { icon: <Mail size={18} />, href: "mailto:devambassador@gmail.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-border/40 hover:border-accent hover:text-accent bg-card/30 transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-accent transition-all group"
              >
                BACK TO TOP <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            © {currentYear} FATOKUN EMMANUEL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            <Zap size={12} className="text-accent" />
            BUILT WITH NEXT.JS & GSAP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;