
import React from "react";
import RevealAnimation from "./ui/RevealAnimation";
import { PlanIcon, ExecuteIcon, MonitorIcon, AdjustIcon } from "@/assets/icons";

const phases = [
  {
    id: "plan",
    title: "Plan",
    description: "Define project scope, objectives, and timeline. Create detailed action plans and allocate resources effectively.",
    icon: <PlanIcon />,
    steps: [
      "Define clear project objectives and deliverables",
      "Identify stakeholders and their requirements", 
      "Create a detailed project timeline",
      "Allocate resources and budget",
      "Assess risks and develop mitigation strategies"
    ],
    color: "blue",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "execute",
    title: "Execute",
    description: "Implement the plan while managing team members, resources, and stakeholder expectations throughout the process.",
    icon: <ExecuteIcon />,
    steps: [
      "Conduct kickoff meeting with all stakeholders",
      "Establish communication channels and protocols", 
      "Distribute tasks based on team members' skills",
      "Implement quality control measures",
      "Document progress and address emerging issues"
    ],
    color: "emerald",
    image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "monitor",
    title: "Monitor",
    description: "Track progress against plans, measure performance, and identify any deviations that require attention.",
    icon: <MonitorIcon />,
    steps: [
      "Track key performance indicators (KPIs)",
      "Conduct regular status meetings", 
      "Update project documentation as needed",
      "Manage scope changes through formal process",
      "Compare actual progress against planned milestones"
    ],
    color: "amber",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "adjust",
    title: "Adjust",
    description: "Make necessary changes based on monitoring insights to keep the project on track toward objectives.",
    icon: <AdjustIcon />,
    steps: [
      "Analyze performance data and identify improvement areas",
      "Implement corrective actions for any deviations", 
      "Reallocate resources as needed",
      "Update project plans and communicate changes",
      "Document lessons learned for future projects"
    ],
    color: "violet",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const GuideSection: React.FC = () => {
  return (
    <section id="guide" className="section-padding">
      <div className="container-wide">
        <RevealAnimation direction="up" className="mb-16 text-center">
          <h2 className="text-zinc-900 mb-4">Complete Project Management Guide</h2>
          <p className="max-w-2xl mx-auto text-zinc-600">
            Follow our proven four-phase approach to successfully manage any project from initiation to completion, regardless of your chosen methodology.
          </p>
        </RevealAnimation>

        <div className="space-y-20">
          {phases.map((phase, index) => (
            <div key={phase.id} id={phase.id} className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20">
              <RevealAnimation 
                direction="fade" 
                delay={index % 2 === 0 ? 0 : 200}
                className={`order-${index % 2 === 0 ? '1' : '2'}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-${phase.color}-100 text-${phase.color}-600 mb-6`}>
                  {phase.icon}
                </div>
                
                <h3 className="text-3xl font-semibold text-zinc-900 mb-4">
                  {index + 1}. {phase.title}
                </h3>
                
                <p className="text-lg text-zinc-600 mb-8">
                  {phase.description}
                </p>
                
                <ul className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${phase.color}-100 text-${phase.color}-600 flex items-center justify-center mt-0.5`}>
                        <span className="text-sm font-semibold">{stepIndex + 1}</span>
                      </div>
                      <p className="text-zinc-700">{step}</p>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
              
              <RevealAnimation 
                direction="scale" 
                delay={index % 2 === 0 ? 200 : 0}
                className={`order-${index % 2 === 0 ? '2' : '1'}`}
              >
                <div className="aspect-square w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img 
                      src={phase.image} 
                      alt={`${phase.title} phase visualization`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-sm border-t border-${phase.color}-100`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${phase.color}-100 text-${phase.color}-600`}>
                          {phase.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-zinc-900">
                            {phase.title} Phase Template
                          </h4>
                          <div className={`text-sm font-medium text-${phase.color}-600`}>Download Template</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
