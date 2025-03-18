
import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import { ArrowRightIcon } from "@/assets/icons";

const methodologies = [
  {
    id: "agile",
    title: "Agile",
    description: "Iterative approach with frequent reassessment and adaptation. Ideal for dynamic projects with evolving requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
      </svg>
    ),
    features: ["Flexibility", "Customer collaboration", "Incremental delivery", "Adaptability to change"],
    bestFor: ["Software development", "Marketing campaigns", "Product launches"],
    color: "blue",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "lean",
    title: "Lean",
    description: "Focus on maximizing customer value while minimizing waste. Perfect for optimizing processes with limited resources.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M7 12l5 5 5-5M7 12l5-5 5 5"></path>
      </svg>
    ),
    features: ["Eliminate waste", "Build quality in", "Create knowledge", "Respect for people"],
    bestFor: ["Manufacturing", "Service delivery", "Process improvement"],
    color: "emerald",
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "waterfall",
    title: "Waterfall",
    description: "Sequential approach moving through project phases in a linear way. Suitable for projects with well-defined requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    features: ["Clear milestones", "Detailed documentation", "Structured phases", "Predictable outcomes"],
    bestFor: ["Construction", "Event planning", "Fixed-scope projects"],
    color: "amber",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "scrum",
    title: "Scrum",
    description: "Agile framework with specific roles and events designed to deliver value in short iterations. Great for complex projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
      </svg>
    ),
    features: ["Sprint planning", "Daily stand-ups", "Sprint reviews", "Retrospectives"],
    bestFor: ["Product development", "New ventures", "Team-based projects"],
    color: "violet",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
];

const MethodologyCards: React.FC = () => {
  return (
    <section id="methodologies" className="section-padding">
      <div className="container-wide">
        <RevealAnimation direction="up" className="mb-12 text-center">
          <h2 className="text-zinc-900 mb-4">Choose Your Methodology</h2>
          <p className="max-w-2xl mx-auto text-zinc-600">
            Different projects require different approaches. Select the methodology that best fits your business needs, team structure, and project goals.
          </p>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologies.map((method, index) => (
            <RevealAnimation key={method.id} direction="scale" delay={index * 100}>
              <div className="h-full card-hover rounded-xl overflow-hidden border border-zinc-100 shadow-sm transition-all hover:shadow flex flex-col">
                <div className="h-44 relative overflow-hidden">
                  <img 
                    src={method.image} 
                    alt={`${method.title} methodology`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center bg-${method.color}-100 text-${method.color}-600 border border-white/20 backdrop-blur-sm`}>
                    {method.icon}
                  </div>
                </div>

                <div className="p-6 bg-white flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">{method.title}</h3>
                  
                  <p className="text-zinc-600 mb-4 text-sm">{method.description}</p>
                  
                  <div className="mb-4 flex-grow">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {method.features.map((feature) => (
                        <li key={feature} className="text-sm text-zinc-700 flex items-center gap-1.5">
                          <span className={`block w-1.5 h-1.5 rounded-full bg-${method.color}-500`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-zinc-100">
                    <a href={`#${method.id}`} className="link-hover text-sm flex items-center gap-1 font-medium">
                      Learn more
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologyCards;
