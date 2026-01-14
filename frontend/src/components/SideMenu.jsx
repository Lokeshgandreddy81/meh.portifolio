import React from 'react';
import { X } from 'lucide-react';

const SideMenu = ({ isOpen, onClose }) => {
  const mainMenuItems = [
    { label: 'Home', href: '#home' },
    { label: "Let's work together", href: '#contact' },
    { label: 'Resume', href: 'https://customer-assets.emergentagent.com/job_daniel-autry/artifacts/6pudtwl8_Lokesh_resume.pdf', external: true }
  ];
  
  const workMenuItems = [
    { label: 'Sara.ai Platform', href: '#saraai' },
    { label: 'Autonomous Agent Framework', href: 'https://github.com/Lokeshgandr', external: true },
    { label: 'Document Intelligence', href: '#docintel' },
    { label: 'AI Hiring Platform', href: '#vaagisha' },
    { label: 'Technical Blog', href: 'https://lokeshgandreddy.hashnode.dev', external: true }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Side Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-background border-l border-border z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <button 
            onClick={onClose}
            className="mb-12 text-muted hover:text-foreground transition-colors flex items-center gap-2"
          >
            <span>Close menu</span>
            <span className="text-muted/50">·</span>
          </button>
          
          <div className="grid grid-cols-2 gap-12">
            {/* MAIN Column */}
            <nav className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-muted/70 mb-6">MAIN</h3>
              {mainMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={!item.external ? onClose : undefined}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="block text-2xl font-serif text-foreground hover:text-muted transition-colors"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* WORK Column */}
            <nav className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-muted/70 mb-6">WORK</h3>
              {workMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={!item.external ? onClose : undefined}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="block text-2xl font-serif text-foreground hover:text-muted transition-colors"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;