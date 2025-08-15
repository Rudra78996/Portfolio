import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Settings, Palette, Briefcase } from 'lucide-react';

const Skills = ({ portfolioData }) => {
  const { skills, certifications } = portfolioData;

  // Icon mapping for skill categories
  const categoryIcons = {
    'Frontend': Code,
    'Backend': Database,
    'Database': Database,
    'DevOps & Cloud': Cloud,
    'Tools & Others': Settings,
    'Design': Palette,
    'default': Briefcase
  };

  const getIconForCategory = (category) => {
    const IconComponent = categoryIcons[category] || categoryIcons.default;
    return IconComponent;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The technologies, tools, and methodologies I use to bring ideas to life.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.technical.map((category, index) => {
                const IconComponent = getIconForCategory(category.category);
                
                return (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {category.category}
                        </h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary/20 transition-colors duration-200 cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Certifications
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                          <Badge className="h-5 w-5 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-foreground mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-primary mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground mb-2">
                            Issued: {cert.date}
                          </p>
                          {cert.credentialId && (
                            <p className="text-xs text-muted-foreground">
                              ID: {cert.credentialId}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Skills Summary */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What I Bring to the Table
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                With a strong foundation in modern web technologies and a passion for clean, efficient code, 
                I enjoy tackling complex problems and building scalable solutions. I'm always eager to learn 
                new technologies and stay up-to-date with industry best practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Full-Stack Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    End-to-end application development with modern frameworks
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Cloud & DevOps
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Scalable infrastructure and automated deployment pipelines
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-2">
                    Problem Solving
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Analytical thinking and creative solutions to complex challenges
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
