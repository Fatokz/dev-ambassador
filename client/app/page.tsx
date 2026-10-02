import Hero from "@/components/Hero";
import About from "@/components/About";
import MobileApps from "@/components/MobileApps";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MobileApps />
      <Projects />
      <Skills />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
}
