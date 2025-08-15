import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar } from 'lucide-react';

const Experience = ({ portfolioData }) => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I've made at various organizations.
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={job.id} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {job.position}
                          </h3>
                          <p className="text-lg text-primary font-medium mb-2">
                            {job.company}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {job.duration}
                            </div>
                            {job.location && (
                              <>
                                <span className="hidden sm:inline">•</span>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job description */}
                  {job.description && (
                    <div className="mb-6">
                      <h4 className="text-base font-medium text-foreground mb-3">
                        Key Responsibilities & Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {job.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies used */}
                  {job.technologies && (
                    <div>
                      <h4 className="text-base font-medium text-foreground mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Want to learn more about my professional experience?
            </p>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/data/Resume_Rudra.pdf';
                link.download = 'Resume_Rudra.pdf';
                link.click();
              }}
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Download my full resume →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
