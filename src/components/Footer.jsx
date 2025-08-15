import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ portfolioData }) => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About section */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {personal.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {personal.title} passionate about creating innovative solutions 
                and building exceptional user experiences.
              </p>
              <div className="flex gap-4">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                
                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                
                {personal.email && (
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Contact Info
              </h3>
              <div className="space-y-2 text-sm">
                {personal.email && (
                  <p className="text-muted-foreground">
                    <span className="font-medium">Email:</span>{' '}
                    <a 
                      href={`mailto:${personal.email}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {personal.email}
                    </a>
                  </p>
                )}
                
                {personal.phone && (
                  <p className="text-muted-foreground">
                    <span className="font-medium">Phone:</span>{' '}
                    <a 
                      href={`tel:${personal.phone}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </p>
                )}
                
                {personal.location && (
                  <p className="text-muted-foreground">
                    <span className="font-medium">Location:</span> {personal.location}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} {personal.name}. Built with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
