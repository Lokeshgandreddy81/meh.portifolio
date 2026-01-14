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
              I'm always curious about ambitious problems, thoughtful collaboration, and the next layer of abstraction.
            </h2>
            
            <p className="text-2xl font-light text-foreground mb-12" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Let's build something that matters.
            </p>
            
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
          
          {/* Right - Closing Image & Signature */}
          <div className="px-16 py-24 flex flex-col justify-center items-center">
            {/* Closing Portrait Image */}
            <div className="mb-16">
              <img 
                src={siteConfig.closingImage}
                alt={siteConfig.name}
                className="w-64 h-64 rounded-full object-cover grayscale border-2 border-border"
              />
            </div>
            
            <p 
              className="text-5xl md:text-6xl font-light text-muted text-center mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              All the best,<br />{siteConfig.name}
            </p>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-foreground font-medium">Available for collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
