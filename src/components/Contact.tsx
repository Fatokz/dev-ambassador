import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, Mail, Github, Linkedin, MapPin, Phone } from "lucide-react"

// TikTok Icon SVG Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const ref = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Create mailto URL with pre-filled data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      const mailtoUrl = `mailto:devambassador@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoUrl
      
      toast({
        title: "Email client opened!",
        description: "Your email client should open with the message pre-filled. Please send when ready.",
      })
      
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devambassador@gmail.com",
      href: "mailto:devambassador@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@ambassador",
      href: "https://github.com/ambassador"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Ambassador Dev",
      href: "https://linkedin.com/in/ambassador"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Globally",
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-gradient-accent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's build something amazing together!
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-2 bg-background/50 border-border/50 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="mt-2 bg-background/50 border-border/50 focus:border-accent"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or how I can help..."
                        rows={6}
                        className="mt-2 bg-background/50 border-border/50 focus:border-accent resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 hover-lift shadow-medium"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={info.label} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gradient-primary border-0 shadow-strong">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-accent-foreground mb-4">
                    Connect With Me
                  </h3>
                   <div className="flex justify-center space-x-4">
                     <Button
                       variant="secondary"
                       size="icon"
                       className="w-12 h-12 hover-lift hover-glow"
                       onClick={() => window.open('https://github.com/ambassador', '_blank')}
                     >
                       <Github className="h-5 w-5" />
                     </Button>
                     <Button
                       variant="secondary"
                       size="icon"
                       className="w-12 h-12 hover-lift hover-glow"
                       onClick={() => window.open('https://linkedin.com/in/ambassador', '_blank')}
                     >
                       <Linkedin className="h-5 w-5" />
                     </Button>
                     <Button
                       variant="secondary"
                       size="icon"
                       className="w-12 h-12 hover-lift hover-glow"
                       onClick={() => window.open('https://www.tiktok.com/@devambassador', '_blank')}
                     >
                       <TikTokIcon className="h-5 w-5" />
                     </Button>
                     <Button
                       variant="secondary"
                       size="icon"
                       className="w-12 h-12 hover-lift hover-glow"
                       onClick={() => window.open('mailto:devambassador@gmail.com', '_blank')}
                     >
                       <Mail className="h-5 w-5" />
                     </Button>
                   </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="bg-gradient-accent border-0 shadow-strong">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-accent-foreground mb-2">
                    Quick Response Guaranteed
                  </h3>
                  <p className="text-accent-foreground/90">
                    I typically respond to all inquiries within 24 hours. 
                    Looking forward to hearing from you!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact