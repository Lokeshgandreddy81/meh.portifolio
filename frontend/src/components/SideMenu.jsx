import React, { useState } from 'react';
import { X } from 'lucide-react';
import ProjectAccessModal from './ProjectAccessModal';

const SideMenu = ({ isOpen, onClose }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
    setModalOpen(true);
    onClose();
  };

  const mainMenuItems = [
    { label: 'Home', href: '#home' },
    { label: "Let's work together", href: '#contact' },
    { label: 'Resume', href: '/resume', external: false }
  ];

  const workMenuItems = [
    { label: 'Sara.ai Platform', projectName: 'Sara.ai', isProject: true },
    { label: 'Autonomous Agent Framework', projectName: 'Autonomous Agent Framework', isProject: true },
    { label: 'Document Intelligence', projectName: 'Document Intelligence', isProject: true },
    { label: 'AI Hiring Platform', projectName: 'AI Hiring Platform', isProject: true },
    { label: 'Technical Blog', href: 'https://lokeshgandreddy.hashnode.dev', external: true }
  ];

  const handleMenuItemClick = (href, isExternal, isInternalRoute) => {
    if (!isExternal && href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setTimeout(onClose, 300);
    } else if (isInternalRoute) {
      // For internal routes like /resume, just close menu and let the link handle navigation
      setTimeout(onClose, 300);
    }
  };

  return (
    <>
      <ProjectAccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projectName={selectedProject}
      />

      {/* Premium Backdrop with blur */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
        style={{
          animation: isOpen ? 'backdropFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
        }}
      />

      {/* Premium Side Menu - Slide from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-background border-l border-border z-50 overflow-y-auto custom-scrollbar ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          boxShadow: isOpen ? '-10px 0 40px rgba(0, 0, 0, 0.3)' : 'none'
        }}
      >
        <div className="p-8 md:p-12">
          {/* Close Button - Premium Design */}
          <button
            onClick={onClose}
            className="group mb-16 text-muted hover:text-foreground transition-all duration-300 flex items-center gap-3 relative"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <span className="text-sm uppercase tracking-widest">Close menu</span>
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
          </button>

          <div className="grid grid-cols-2 gap-16">
            {/* MAIN Column */}
            <nav className="space-y-8">
              <h3
                className="text-[10px] uppercase tracking-[0.2em] text-muted/60 mb-8 font-medium"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                }}
              >
                MAIN
              </h3>
              {mainMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    const isInternalRoute = !item.external && item.href.startsWith('/');
                    const isAnchorLink = !item.external && item.href.startsWith('#');

                    if (isAnchorLink) {
                      e.preventDefault();
                      handleMenuItemClick(item.href, false, false);
                    } else if (isInternalRoute) {
                      // Let React Router handle the navigation
                      handleMenuItemClick(item.href, false, true);
                    }
                  }}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="group block text-3xl font-light text-foreground hover:text-muted transition-all duration-300 relative"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.4 + index * 0.1}s`
                  }}
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-muted group-hover:w-full transition-all duration-500" />
                  </span>
                </a>
              ))}
            </nav>

            {/* WORK Column */}
            <nav className="space-y-8">
              <h3
                className="text-[10px] uppercase tracking-[0.2em] text-muted/60 mb-8 font-medium"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                }}
              >
                WORK
              </h3>
              {workMenuItems.map((item, index) => (
                item.isProject ? (
                  <button
                    key={index}
                    onClick={() => handleProjectClick(item.projectName)}
                    className="group block text-3xl font-light text-foreground hover:text-muted transition-all duration-300 text-left w-full relative"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + index * 0.1}s`
                    }}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-muted group-hover:w-full transition-all duration-500" />
                    </span>
                  </button>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : ''}
                    className="group block text-3xl font-light text-foreground hover:text-muted transition-all duration-300 relative"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
                      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.6 + index * 0.1}s`
                    }}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-muted group-hover:w-full transition-all duration-500" />
                    </span>
                  </a>
                )
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Premium animations */}
      <style>{`
        @keyframes backdropFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 0;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--muted);
        }
      `}</style>
    </>
  );
};

export default SideMenu;