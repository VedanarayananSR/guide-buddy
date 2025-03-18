
import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import { ArrowRightIcon } from "@/assets/icons";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="container-wide relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-40 -left-24 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative">
          <RevealAnimation direction="fade" className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
                SME Project Management Guide
              </span>
              <h1 className="text-zinc-900 leading-tight mb-4">
                Master Project Management
                <br /> 
                <span className="text-blue-600">for Small Businesses</span>
              </h1>
              <p className="text-lg md:text-xl max-w-xl text-zinc-600">
                A comprehensive end-to-end guide with proven methodologies, templates, and best practices tailored for small and medium enterprises.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#guide" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium transition-transform hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="#methodologies" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 font-medium transition-all hover:border-zinc-300 hover:bg-zinc-50"
              >
                Explore Methodologies
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-500 overflow-hidden">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-500 overflow-hidden">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center text-zinc-500 overflow-hidden">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-zinc-600">
                <span className="font-semibold">500+</span> small businesses implemented these methodologies successfully
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation direction="scale" delay={300} className="relative">
            <div className="relative aspect-square w-full max-w-lg lg:max-w-none mx-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-r from-zinc-100 to-blue-50 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="Project management dashboard" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="glass-card p-4 rounded-xl mb-4 flex items-center gap-3 w-48 animate-fade-in">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none">
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" 
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Timeline</p>
                      <p className="text-sm font-semibold">4-6 Weeks</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl mb-4 flex items-center gap-3 w-56 animate-fade-in" style={{ animationDelay: "150ms" }}>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19V13C9 11.8954 8.10457 11 7 11H5M9 19V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V19M9 19H15M15 19H19" 
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Progress</p>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1.5">
                        <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-48 animate-fade-in" style={{ animationDelay: "300ms" }}>
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Resources</p>
                      <p className="text-sm font-semibold">25+ Templates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
