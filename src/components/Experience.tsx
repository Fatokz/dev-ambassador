import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const Experience = () => {
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

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      duration: "2022 - Present",
      type: "Self-Directed",
      description: "Developed and deployed multiple full-stack web applications using React, Firebase, and Django. Built responsive banking platforms, student productivity tools, and business automation systems.",
      achievements: [
        "Built 10+ production-ready web applications",
        "Implemented secure authentication and payment systems",
        "Achieved 95%+ user satisfaction across all projects",
        "Optimized applications for performance and scalability"
      ],
      technologies: ["React", "Firebase", "Django", "TailwindCSS", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Academic Projects",
      location: "University",
      duration: "2021 - 2022",
      type: "Academic",
      description: "Led frontend development for various academic projects including banking applications, inventory management systems, and student portals. Collaborated with teams to deliver pixel-perfect interfaces.",
      achievements: [
        "Converted 15+ Figma designs to responsive interfaces",
        "Reduced load times by 40% through optimization",
        "Mentored 5+ junior developers in React best practices",
        "Implemented accessibility standards (WCAG 2.1)"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Material-UI", "Git"]
    },
    {
      title: "UI/UX Developer",
      company: "Freelance Projects",
      location: "Remote",
      duration: "2020 - 2022",
      type: "Freelance",
      description: "Worked with clients to transform their design concepts into interactive, user-friendly web interfaces. Specialized in creating smooth animations and responsive layouts.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved user engagement by 60% through UX optimizations",
        "Created reusable component libraries",
        "Maintained 98% client satisfaction rating"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma"]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional <span className="text-gradient-accent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey in software development, from academic projects to building 
              production-ready applications.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title}
                  className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-medium hidden md:block" />
                  
                  {/* Content Card */}
                  <div className="md:ml-12">
                    <Card className="bg-gradient-card border-0 shadow-medium hover-lift hover-glow">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <div className="flex items-center text-accent font-semibold mb-2">
                              <Briefcase className="h-4 w-4 mr-2" />
                              {exp.company}
                            </div>
                          </div>
                          
                          <div className="flex flex-col md:items-end space-y-2">
                            <Badge 
                              variant="outline" 
                              className="border-accent/30 text-accent w-fit"
                            >
                              {exp.type}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge 
                                key={tech}
                                variant="secondary"
                                className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-accent border-0 shadow-strong max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                  Ready for New Opportunities
                </h3>
                <p className="text-accent-foreground/90 text-lg mb-4">
                  I'm actively seeking new challenges and opportunities to contribute 
                  to innovative projects and collaborative teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Badge variant="secondary" className="bg-accent-foreground/10 text-accent-foreground">
                    Open to Remote Work
                  </Badge>
                  <Badge variant="secondary" className="bg-accent-foreground/10 text-accent-foreground">
                    Full-time Positions
                  </Badge>
                  <Badge variant="secondary" className="bg-accent-foreground/10 text-accent-foreground">
                    Contract Projects
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience