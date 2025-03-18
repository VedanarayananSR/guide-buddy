
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
    color: "blue"
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
    color: "emerald"
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
    color: "amber"
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
    color: "violet"
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
                  <div className={`w-full max-w-sm mx-auto bg-white border border-${phase.color}-100 rounded-xl p-6 shadow-sm`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${phase.color}-100 text-${phase.color}-600 mb-4`}>
                      {phase.icon}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-zinc-900 mb-3">
                      {phase.title} Phase Template
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      {phase.steps.slice(0, 3).map((step, i) => (
                        <div 
                          key={i} 
                          className={`flex items-center p-2.5 rounded-lg ${i === 0 ? `bg-${phase.color}-50 border border-${phase.color}-100` : 'border border-zinc-100'}`}
                        >
                          <div className="w-4 h-4 mr-3 rounded-sm border border-zinc-300 flex-shrink-0 flex items-center justify-center">
                            {i === 0 && (
                              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3 h-3 text-${phase.color}-600`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm text-zinc-700">{step}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-zinc-500">1 of {phase.steps.length} tasks</div>
                      <div className={`text-sm font-medium text-${phase.color}-600`}>Download Template</div>
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
