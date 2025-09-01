import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who I <span className="text-gradient-accent">Am</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    I'm a passionate <span className="text-accent font-semibold">software engineer</span> and 
                    builder who thrives on solving problems with technology. I specialize in{" "}
                    <span className="text-accent font-semibold">React, Firebase, Django</span>, and 
                    modern frontend tools.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    My focus is on creating <span className="text-accent font-semibold">intuitive, responsive, 
                    and scalable applications</span> that provide exceptional user experiences. 
                    I'm persistent, detail-oriented, and always eager to learn and improve.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Beyond coding, I enjoy turning ideas into{" "}
                    <span className="text-accent font-semibold">meaningful digital products</span> that 
                    empower people and solve real-world challenges.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-card border-0 shadow-medium hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-0 shadow-medium hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-0 shadow-medium hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-0 shadow-medium hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Dedication</div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Values */}
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Core Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Clean, maintainable code
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      User-centered design
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Continuous learning
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      Problem-solving mindset
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About