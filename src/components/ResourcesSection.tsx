
import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import { ArrowRightIcon } from "@/assets/icons";

const resources = [
  {
    id: 1,
    title: "Project Charter Template",
    description: "Define project purpose, scope, objectives, and key stakeholders in one document.",
    category: "Template",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "Risk Assessment Matrix",
    description: "Identify and prioritize potential risks based on likelihood and impact.",
    category: "Worksheet",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "Gantt Chart Builder",
    description: "Create visual project timelines with dependencies and milestones.",
    category: "Tool",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3.01" y2="6"></line>
        <line x1="3" y1="12" x2="3.01" y2="12"></line>
        <line x1="3" y1="18" x2="3.01" y2="18"></line>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1494229789400-7cfa2d3b3348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Stakeholder Communication Plan",
    description: "Organize your communication strategy for different project stakeholders.",
    category: "Template",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Budget Tracking Spreadsheet",
    description: "Monitor planned vs. actual expenses throughout your project lifecycle.",
    category: "Tool",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Project Closure Checklist",
    description: "Ensure all project elements are properly completed and documented.",
    category: "Checklist",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"></polyline>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-amber-50/30 to-purple-50/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      <div className="container-wide relative z-10">
        <RevealAnimation direction="up" className="mb-12 text-center">
          <h2 className="text-zinc-900 mb-4">Essential Resources</h2>
          <p className="max-w-2xl mx-auto text-zinc-600">
            Access our curated collection of templates, tools, and checklists designed to streamline your project management process.
          </p>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <RevealAnimation key={resource.id} direction="scale" delay={index * 75}>
              <div className="card-hover h-full rounded-xl overflow-hidden bg-white border border-zinc-100 shadow-sm">
                <div className="h-40 overflow-hidden relative">
                  <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium py-1 px-2.5 rounded-full bg-white/90 text-zinc-700 backdrop-blur-sm">
                      {resource.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{resource.title}</h3>
                  </div>
                  
                  <p className="text-zinc-600 text-sm mb-4">{resource.description}</p>
                  
                  <a href="#" className="link-hover text-sm flex items-center gap-1 font-medium">
                    Download
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation direction="fade" delay={300} className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 bg-white text-zinc-800 font-medium transition-all hover:border-zinc-300 hover:bg-zinc-50"
          >
            View All Resources
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ResourcesSection;
