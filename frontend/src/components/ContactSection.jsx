import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const ContactSection = () => {
  return (
    <section id="contact" className="py-0">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 border-b section-border min-h-screen">
          {/* Left - Main Message */}
          <div className="px-16 py-24 flex flex-col justify-center border-r section-border">
            <h2 
              className="text-6xl md:text-7xl font-light leading-tight mb-16 text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Always excited to collaborate on challenging AI/automation problems. Let's build something impactful together.
            </h2>
            
            <div className="space-y-6 text-lg">
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Mail className="w-5 h-5" />
                  <span className="underline">{siteConfig.email}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              
              <div>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="underline">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              
              <div>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                >
                  <Github className="w-5 h-5" />
                  <span className="underline">GitHub</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right - Final Signature */}
          <div className="px-16 py-24 flex flex-col justify-center">
            <p 
              className="text-5xl md:text-6xl font-light text-muted mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              All the best,<br />{siteConfig.name}
            </p>
            
            <div className="mt-16 space-y-4 text-muted">
              <p className="text-lg">Open to:</p>
              <ul className="space-y-2 text-base">
                <li>• Full-time opportunities</li>
                <li>• Contract projects</li>
                <li>• Technical consulting</li>
                <li>• Open source collaborations</li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-foreground font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
