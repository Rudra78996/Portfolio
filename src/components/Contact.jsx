import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Download } from 'lucide-react';

const Contact = ({ portfolioData }) => {
  const { personal } = portfolioData;
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {personal.email && (
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a 
                            href={`mailto:${personal.email}`}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {personal.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {personal.phone && (
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <a 
                            href={`tel:${personal.phone}`}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {personal.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {personal.location && (
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="text-foreground font-medium">
                            {personal.location}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Connect With Me
                  </h3>
                  
                  <div className="space-y-4">
                    {personal.linkedin && (
                      <a
                        href={personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Linkedin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">Professional network</p>
                        </div>
                      </a>
                    )}
                    
                    {personal.github && (
                      <a
                        href={personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Github className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium">GitHub</p>
                          <p className="text-sm text-muted-foreground">Code repositories</p>
                        </div>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a comprehensive overview of my experience and qualifications.
                  </p>
                  <Button
                    size="lg"
                    className="gap-2"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/data/Resume_Rudra.pdf';
                      link.download = 'Resume_Rudra.pdf';
                      link.click();
                    }}
                  >
                    <Download className="h-5 w-5" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send a Message
                  </h3>
                  
                  {isFormSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 dark:bg-green-900/20 p-6 rounded-lg mb-4">
                        <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-green-800 dark:text-green-400 mb-2">
                          Message Sent!
                        </h4>
                        <p className="text-green-700 dark:text-green-300">
                          Thanks for reaching out. I'll get back to you soon!
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                          placeholder="Tell me about your project or how I can help..."
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Availability Status */}
          <div className="text-center mt-16">
            <Badge variant="outline" className="mb-4 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </Badge>
            <p className="text-muted-foreground">
              I'm currently open to new freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
