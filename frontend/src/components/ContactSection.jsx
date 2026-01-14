import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, BookOpen } from 'lucide-react';
import siteConfig from '../config/siteConfig';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: siteConfig.location,
      href: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'lokeshh-hhh',
      href: siteConfig.linkedIn
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'Lokeshgandr',
      href: siteConfig.github
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      label: 'Technical Blog',
      value: 'lokeshgandreddy.hashnode.dev',
      href: siteConfig.blog
    }
  ];

  return (
    <section id="contact" className="py-0">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 border-b section-border min-h-screen">
          {/* Left - Contact Info */}
          <div className="px-16 py-24 flex flex-col justify-center border-r section-border">
            <h2 
              className="text-5xl font-light leading-tight mb-8 text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Let's work together
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need an AI system architect, automation engineer, or technical consultant, let's connect.
            </p>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-muted mt-1">
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-sm text-muted/70 mb-1">{method.label}</div>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : '_self'}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-foreground hover:text-muted transition-colors text-lg"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-foreground text-lg">{method.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-light text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>1,700+</div>
                <div className="text-sm text-muted">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>92%</div>
                <div className="text-sm text-muted">User Retention</div>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>99.7%</div>
                <div className="text-sm text-muted">System Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-light text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>400+</div>
                <div className="text-sm text-muted">GitHub Stars</div>
              </div>
            </div>
          </div>
          
          {/* Right - Resume & Links */}
          <div className="px-16 py-24 flex flex-col justify-center">
            <h3 
              className="text-3xl font-light mb-12 text-foreground"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Resources
            </h3>
            
            <div className="space-y-8">
              <a
                href="https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/6pudtwl8_Lokesh_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between p-6 border-2 theme-button-border rounded-2xl hover:bg-accent transition-all duration-300">
                  <div>
                    <div className="text-xl font-medium text-foreground mb-1">Download Resume</div>
                    <div className="text-sm text-muted">Complete professional experience & projects</div>
                  </div>
                  <svg className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              
              <a
                href={siteConfig.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between p-6 border-2 theme-button-border rounded-2xl hover:bg-accent transition-all duration-300">
                  <div>
                    <div className="text-xl font-medium text-foreground mb-1">Technical Blog</div>
                    <div className="text-sm text-muted">Articles on AI, system design & architecture</div>
                  </div>
                  <svg className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
              
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-center justify-between p-6 border-2 theme-button-border rounded-2xl hover:bg-accent transition-all duration-300">
                  <div>
                    <div className="text-xl font-medium text-foreground mb-1">GitHub Projects</div>
                    <div className="text-sm text-muted">Open source work & contributions</div>
                  </div>
                  <svg className="w-6 h-6 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Availability Status */}
            <div className="mt-12 p-6 bg-accent rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-foreground font-medium">Available for Projects</div>
              </div>
              <div className="text-sm text-muted">
                Open to full-time opportunities, consulting projects, and technical collaborations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
