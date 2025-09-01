import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Eye, Upload } from "lucide-react"

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setResumeFile(file)
    } else {
      alert('Please upload a PDF file')
    }
  }

  const downloadResume = () => {
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Ambassador_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } else {
      // Fallback for demo
      alert('Resume download functionality - upload your resume first!')
    }
  }

  const previewResume = () => {
    if (resumeFile) {
      const url = URL.createObjectURL(resumeFile)
      window.open(url, '_blank')
    } else {
      alert('No resume uploaded yet')
    }
  }

  const resumeHighlights = [
    "3+ years of software development experience",
    "10+ completed projects across various domains",
    "Proficient in React, TypeScript, Django, Firebase",
    "Strong problem-solving and analytical skills",
    "Experience with both frontend and backend development",
    "Passionate about creating user-centered solutions"
  ]

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My <span className="text-gradient-accent">Resume</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Download my comprehensive resume to learn more about my experience, 
              skills, and achievements in detail.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Resume Preview/Upload */}
            <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-12 w-12 text-accent" />
                  </div>
                  
                  {resumeFile ? (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Resume Ready
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        File: {resumeFile.name}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button 
                          onClick={downloadResume}
                          className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-medium"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button 
                          onClick={previewResume}
                          variant="outline"
                          className="hover-lift"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Upload Your Resume
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Upload your PDF resume to enable download functionality
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Button 
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="hover-lift shadow-medium"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload PDF Resume
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Resume Highlights */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <Card className="bg-gradient-card border-0 shadow-medium hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Resume Highlights
                  </h3>
                  <ul className="space-y-3">
                    {resumeHighlights.map((highlight, index) => (
                      <li 
                        key={index}
                        className="flex items-start text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-primary border-0 shadow-strong">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                    Let's Connect
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Interested in working together? I'd love to hear from you!
                  </p>
                  <Button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="secondary"
                    className="hover-lift shadow-medium"
                  >
                    Get In Touch
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-accent border-0 shadow-strong max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent-foreground mb-3">
                  Ready to Download?
                </h3>
                <p className="text-accent-foreground/90 text-lg mb-6">
                  Get the complete picture of my experience, skills, and achievements. 
                  Perfect for HR teams and hiring managers.
                </p>
                <Button 
                  onClick={downloadResume}
                  size="lg"
                  variant="secondary"
                  className="hover-lift shadow-strong font-semibold px-8"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume