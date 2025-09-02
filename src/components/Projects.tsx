import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye } from "lucide-react"
import { FaGithub } from "react-icons/fa";

import portfolio from "@/assets/project-portfolio.png"
import safecoin from "@/assets/project-safecoin.png"
import assignmentImage from "@/assets/project-assignment.jpg"
import invoiceImage from "@/assets/project-invoice.jpg"
import farmImage from "@/assets/project-farm.jpg"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Previous Portfolio",
      description: "A modern, responsive portfolio website showcasing professional projects and skills with smooth animations and dark/light theme support.",
      image: portfolio, 
      technologies: ["React", "Tailwind", "Vite", "JavaScript"],
      liveDemo: "https://abtechcraft.vercel.app/",
      github: "https://github.com/Fatokz/AbTech",
      featured: true
    },
    {
      title: "Safcoin Bank App",
      description: "A comprehensive banking platform featuring secure transactions, account management, and financial validation systems built with React and Firebase.",
      image: safecoin,
      technologies: ["React", "Firebase", "TailwindCSS", "JavaScript"],
      liveDemo: "https://safecoinn.vercel.app/",
      github: "https://github.com/Fatokz/Bank-App",
      featured: true
    },
    {
      title: "Assignment Assistant",
      description: "Student productivity platform with assignment tracking, CGPA calculator, and personal diary features to help students stay organized.",
      image: assignmentImage,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveDemo: "#",
      github: "#",
      featured: true
    },
    {
      title: "AutoInvoice",
      description: "Freelancer-focused invoice generator with automated calculations, client branding customization, and payment reminder systems.",
      image: invoiceImage,
      technologies: ["React", "TypeScript", "Vite", "Supabase"],
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "FarmX Inventory",
      description: "Agricultural produce inventory management system with media upload capabilities and real-time tracking for farm operations.",
      image: farmImage,
      technologies: ["Django", "PostgreSQL", "React", "AWS S3"],
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient-accent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've built that showcase my skills in full-stack development,
              UI/UX design, and problem-solving.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group bg-gradient-card border-0 shadow-medium hover-lift hover-glow overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isVisible ? 'animate-scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button 
                      size="sm" 
                      className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-strong"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-background/90 hover:bg-background shadow-strong"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs border-border/50 hover:border-accent/50 hover:text-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground flex-1"
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift shadow-medium"
              onClick={() => window.open('#', '_blank')}
            >
              <FaGithub className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects