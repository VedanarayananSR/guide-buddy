
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MethodologyCards from "@/components/MethodologyCards";
import GuideSection from "@/components/GuideSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const anchor = target as HTMLAnchorElement;
        const href = anchor.getAttribute('href');
        
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for header height
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50/50 to-white">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-blue-50/70 to-emerald-50/30">
          <MethodologyCards />
        </div>
        <div className="bg-gradient-to-b from-emerald-50/30 to-amber-50/30">
          <GuideSection />
        </div>
        <ResourcesSection />
        <div className="bg-gradient-to-b from-purple-50/30 to-blue-50/50">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
