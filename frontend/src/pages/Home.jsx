import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import InterestsSection from '../components/InterestsSection';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <InterestsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;