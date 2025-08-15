import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from 'lucide-react';

const Hero = ({ portfolioData }) => {
  const { personal } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6">
            <Badge variant="outline" className="mb-4 text-sm">
              Available for new opportunities
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8">
            {personal.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {personal.summary}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="gap-2 text-base px-8 py-3"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="gap-2 text-base px-8 py-3"
            >
              View My Work
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 mb-16">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            
            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            )}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
