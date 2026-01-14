import React from 'react';
import { X } from 'lucide-react';

const SideMenu = ({ isOpen, onClose }) => {
  const menuItems = [\n    { label: 'Home', href: '#home' },\n    { label: 'Contact', href: '#contact' },\n    { label: 'Sara.ai', href: '#saraai' },\n    { label: 'Autonomous AI Engine', href: '#aiengine' },\n    { label: 'Document Intelligence', href: '#docintel' },\n    { label: 'Project Demos', href: '#demos' }\n  ];

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
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-[#0a0a0a] border-l border-[#222] z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <button 
            onClick={onClose}
            className="mb-12 text-[#999] hover:text-[#e8e8e8] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <nav className="space-y-6">
            <h2 className="text-4xl font-serif mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Navigation</h2>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : ''}
                onClick={!item.external ? onClose : undefined}
                className="block text-2xl font-serif text-[#e8e8e8] hover:text-[#999] transition-colors"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideMenu;