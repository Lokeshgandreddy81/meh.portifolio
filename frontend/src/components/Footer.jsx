import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-[#222]">
      <div className="max-w-[1200px] mx-auto text-center text-sm text-[#666]">
        <p className="mb-2">
          This site is hand-crafted and coded. Feel free to{' '}
          <a 
            href="https://www.linkedin.com/in/daniel-autry/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#999] hover:text-[#e8e8e8] transition-colors underline"
          >
            visit my LinkedIn.
          </a>
        </p>
        <p>
          Copyright © Daniel Autry. Icons and illustrations courtesy of Noun Project and respective designers (paid for).
        </p>
      </div>
    </footer>
  );
};

export default Footer;