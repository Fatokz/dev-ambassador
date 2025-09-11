import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import heroImage from "@/assets/hero-bg.jpg"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Hi, I'm Dev_Ambassador"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    // This will be implemented when user uploads their resume
    console.log("Resume download functionality")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Typing Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent mb-4 animate-fade-in">
          Co-Founder | Software Engineer | Problem Solver | Builder of Practical Solutions
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          I design and build interactive, scalable, and user-friendly software experiences
          that solve real problems and empower people to achieve their goals.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-4 rounded-full hover-lift shadow-medium"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            View My Work
          </Button>

          <Button
            onClick={downloadResume}
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full hover-lift"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

      </div>
    </section>
  )
}

export default Hero