import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';

const About = ({ portfolioData }) => {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives my passion for technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Personal Information
                  </h3>
                  
                  <div className="space-y-4">
                    {personal.location && (
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                        <span className="text-foreground">{personal.location}</span>
                      </div>
                    )}
                    
                    {personal.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <a 
                          href={`mailto:${personal.email}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {personal.email}
                        </a>
                      </div>
                    )}
                    
                    {personal.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-muted-foreground" />
                        <a 
                          href={`tel:${personal.phone}`}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {personal.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Professional Summary */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Professional Summary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {personal.summary}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    {education.map((edu) => (
                      <div key={edu.id} className="border-l-2 border-primary pl-6 pb-6 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h4>
                          <Badge variant="outline" className="shrink-0 ml-2">
                            {edu.duration}
                          </Badge>
                        </div>
                        
                        <p className="text-primary font-medium mb-2">
                          {edu.institution}
                        </p>
                        
                        {edu.location && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {edu.location}
                          </p>
                        )}
                        
                        {edu.gpa && (
                          <p className="text-sm text-muted-foreground mb-3">
                            GPA: {edu.gpa}
                          </p>
                        )}
                        
                        {edu.relevantCoursework && (
                          <div>
                            <p className="text-sm font-medium text-foreground mb-2">
                              Relevant Coursework:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {edu.relevantCoursework.map((course, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Quick Stats
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {portfolioData.experience.length}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years Experience
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {portfolioData.projects.length}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Completed
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {portfolioData.skills.technical.reduce((acc, cat) => acc + cat.skills.length, 0)}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Technologies
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {portfolioData.certifications?.length || 0}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Certifications
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
