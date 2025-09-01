import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Zap,
  Layers,
  Palette,
  Server
} from "lucide-react"

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "JavaScript", "TailwindCSS", "HTML5", "CSS3"],
      color: "text-blue-500"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Django", "Express", "REST APIs", "GraphQL", "Python"],
      color: "text-green-500"
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: ["Firebase", "PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis"],
      color: "text-purple-500"
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["Git", "AWS", "Vercel", "Docker", "Vite", "Webpack"],
      color: "text-orange-500"
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Responsive Design", "User Experience", "Prototyping"],
      color: "text-pink-500"
    },
    {
      title: "Development Practices",
      icon: GitBranch,
      skills: ["Agile", "Testing", "CI/CD", "Code Review", "Documentation", "Debugging"],
      color: "text-indigo-500"
    }
  ]

  const coreSkills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "TailwindCSS", level: 95, color: "bg-cyan-500" },
    { name: "Firebase", level: 85, color: "bg-orange-500" },
    { name: "Django", level: 80, color: "bg-green-600" },
    { name: "System Design", level: 75, color: "bg-purple-500" }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient-accent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and practices I use to build 
              exceptional digital experiences.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`bg-gradient-card border-0 shadow-medium hover-lift hover-glow ${
                  isVisible ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 mb-4 ${category.color}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Core Skills Proficiency */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Core <span className="text-accent">Proficiencies</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-accent font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-primary border-0 shadow-strong max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  Always Learning
                </h3>
                <p className="text-primary-foreground/80 text-lg">
                  Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                  frameworks, and best practices to stay at the forefront of modern development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills