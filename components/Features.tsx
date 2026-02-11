import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, Zap, ArrowRight, MessageSquare, Terminal, ShieldCheck, Users, LineChart, Layers, ChevronRight } from 'lucide-react';
import { Button } from './Button';

// --- Sub-Components ---

const SubFeatureGrid = ({ items }: { items: { icon: React.ReactNode, title: string, description: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {items.map((item, idx) => (
      <div key={idx} className="space-y-3 group cursor-default">
        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 transition-colors group-hover:bg-blue-100 group-hover:text-blue-800">
          {item.icon}
        </div>
        <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{item.description}</p>
      </div>
    ))}
  </div>
);

// --- Feature 1: Methodology (Transformation is a Human Process) ---

export const MethodologyFeature = () => {
  return (
    <div className="py-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-6 border border-blue-100">
              <Users size={12} className="mr-1.5" /> Methodology
           </div>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Transformation is a Human Process</h2>
           <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
             We reject the "one-size-fits-all" software rollout. True adoption requires a stratified approach that respects the unique reality of your workforce.
           </p>
        </div>

        {/* Visual - Methodology Journey */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden relative p-8 mb-16">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
           
           <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Step 1 */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative group hover:border-blue-300 transition-all">
                 <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold shadow-lg">1</div>
                 <div className="mb-4 text-blue-600 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                    <BrainCircuit size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Agentic Assessment</h3>
                 <p className="text-sm text-gray-500">We map individual friction points using AI diagnostic agents to identify high-value automation targets.</p>
                 
                 {/* Chat Bubble Mockup */}
                 <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100 text-xs space-y-2">
                    <div className="flex gap-2">
                       <div className="w-4 h-4 rounded-full bg-blue-600 shrink-0"></div>
                       <div className="bg-white p-2 rounded-r-lg rounded-bl-lg shadow-sm text-gray-700">Where do you spend the most time on repetitive tasks?</div>
                    </div>
                    <div className="flex gap-2 flex-row-reverse">
                       <div className="w-4 h-4 rounded-full bg-gray-400 shrink-0"></div>
                       <div className="bg-blue-100 p-2 rounded-l-lg rounded-br-lg text-blue-900">Copy-pasting data from Email to the ERP.</div>
                    </div>
                 </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-gray-300">
                 <ChevronRight size={32} />
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative group hover:border-blue-300 transition-all">
                 <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold shadow-lg">2</div>
                 <div className="mb-4 text-purple-600 bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center">
                    <Workflow size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Build Tracks</h3>
                 <p className="text-sm text-gray-500">We co-build custom AI tools with your team—from the C-Suite to the specialist, ensuring relevance.</p>
                 <div className="mt-4 flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">+ Build</div>
                 </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-gray-300">
                 <ChevronRight size={32} />
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative group hover:border-blue-300 transition-all">
                 <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold shadow-lg">3</div>
                 <div className="mb-4 text-green-600 bg-green-50 w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap size={24} />
                 </div>
                 <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Fluency</h3>
                 <p className="text-sm text-gray-500">We don't just deliver tools; we transfer the capability to build them. Sustainable autonomy.</p>
                 <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-green-500 h-full w-3/4"></div>
                 </div>
                 <div className="mt-1 text-right text-[10px] font-bold text-green-600">75% Adoption</div>
              </div>

           </div>
        </div>

        <SubFeatureGrid 
          items={[
             { icon: <BrainCircuit size={18} />, title: "Neuroplasticity", description: "Training your organization to adapt and rewire its operational pathways." },
             { icon: <ShieldCheck size={18} />, title: "Sovereign Control", description: "You own the agents, the logic, and the data. No black boxes." },
             { icon: <LineChart size={18} />, title: "Measurable Impact", description: "Success is defined by hours reclaimed and revenue protected." }
          ]} 
        />
      </div>
    </div>
  );
};

// --- Feature 2: Strategic Tax (Case Study) ---

export const StrategicTaxFeature = () => {
   return (
     <div className="py-32 border-b border-gray-100 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mb-12">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-600 mb-6 border border-indigo-200/50">
               <Layers size={12} className="mr-1.5" /> Unified Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Eliminating the Strategic Tax</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
              When highly skilled talent spends hours acting as mechanical routers for repetitive queries, you pay a 'Strategic Tax.' We deploy Unified Intelligence Layers to reclaim that time.
            </p>
         </div>
 
         {/* Visual - Slack Bot Interface */}
         <div className="w-full bg-[#FAFAFA] rounded-2xl border border-gray-200 p-8 sm:p-16 mb-16 overflow-hidden relative flex flex-col items-center shadow-inner">
            
            <div className="bg-white rounded-lg border border-gray-200 shadow-xl w-full max-w-2xl relative overflow-hidden">
               {/* Window Header */}
               <div className="bg-[#4A154B] px-4 py-3 flex items-center justify-between">
                  <span className="text-white font-bold text-sm"># internal-support</span>
                  <div className="flex space-x-2">
                     <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                     <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                  </div>
               </div>
               
               {/* Chat Area */}
               <div className="p-6 space-y-6">
                  
                  {/* Human Question */}
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-md bg-gray-200 shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Employee" alt="User" />
                     </div>
                     <div>
                        <div className="flex items-baseline gap-2">
                           <span className="font-bold text-gray-900 text-sm">Sarah Jenkins</span>
                           <span className="text-xs text-gray-400">10:42 AM</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">What's the policy on remote work from international locations for more than 2 weeks? And does it affect my tax status?</p>
                     </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex gap-4">
                     <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                        <Zap className="text-white w-6 h-6" />
                     </div>
                     <div className="w-full">
                        <div className="flex items-baseline gap-2">
                           <span className="font-bold text-gray-900 text-sm">Workify Bot</span>
                           <span className="bg-gray-200 text-gray-600 text-[10px] px-1 rounded uppercase font-bold">App</span>
                           <span className="text-xs text-gray-400">10:42 AM</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-100">
                           <p className="mb-3">Based on the <strong>Global Mobility Policy (updated Oct 2023)</strong>:</p>
                           <ul className="list-disc pl-4 space-y-1 mb-3">
                              <li>You can work internationally for up to <strong>30 days</strong> without triggering a tax event in most jurisdictions.</li>
                              <li>For durations > 2 weeks, you must log a request in BambooHR for compliance review.</li>
                           </ul>
                           <p className="text-xs text-gray-500 italic">Source: HR Handbook v4.2 • Verified by Global Compliance</p>
                           
                           <div className="mt-4 flex gap-2">
                              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-50">Log Request in BambooHR</button>
                              <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-xs font-medium hover:bg-gray-50">View Full Policy</button>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
               
               {/* Input Area */}
               <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <div className="bg-white border border-gray-300 rounded p-2 text-xs text-gray-400">Message #internal-support...</div>
               </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-subtle">
               <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                     <LineChart size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] uppercase font-bold text-gray-500">Ticket Volume</p>
                     <p className="text-xl font-bold text-gray-900">-85%</p>
                  </div>
               </div>
            </div>

         </div>
 
         <SubFeatureGrid 
           items={[
              { icon: <Zap size={18} />, title: "Zero Latency", description: "Instant answers from static policy and live data (HRIS, ERP) without human intervention." },
              { icon: <ShieldCheck size={18} />, title: "Deterministic Accuracy", description: "Responses based on your curated Ground Truth, eliminating hallucinations." },
              { icon: <MessageSquare size={18} />, title: "Seamless Integration", description: "Lives where your team works: Slack, Teams, or Google Workspace." }
           ]} 
         />
       </div>
     </div>
   );
 };

// --- Main Export ---
export const Features = () => {
  return (
    <>
      <MethodologyFeature />
      <StrategicTaxFeature />
    </>
  );
};