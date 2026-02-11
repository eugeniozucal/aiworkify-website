import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AudioWaveform, Send, Stethoscope, Building } from 'lucide-react';

// Startup Card Component
const StartupCard = ({ name, description, icon, color, className = "" }: { name: string, description: string, icon: React.ReactNode, color: string, className?: string }) => (
  <div className={`bg-white p-5 rounded-xl border border-gray-200 shadow-md flex items-start gap-4 w-72 ${className}`}>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0 ${color}`}>
       {icon}
    </div>
    <div>
       <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
       <p className="text-xs text-gray-500 mt-1 leading-snug">{description}</p>
    </div>
  </div>
);

export const Integrations: React.FC = () => {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Powered by the AIW Venture Studio</h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our expertise isn't theoretical. Through our Innovation Hub, we co-found and accelerate AI-native startups across sectors. We test our architectures in the wild before bringing them to your enterprise.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 font-medium px-6 py-3 rounded-full text-sm transition-all shadow-lg flex items-center">
               Explore the Portfolio <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
          
          <div className="flex-1 w-full h-[500px] relative">
             {/* Grid Background */}
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-30 transform -skew-y-3 scale-110 origin-center">
                {Array.from({ length: 36 }).map((_, i) => (
                   <div key={i} className="border border-gray-200 rounded-xl bg-white/50"></div>
                ))}
             </div>
             
             {/* Floating Startup Cards */}
             <div className="absolute inset-0 transform -skew-y-3 scale-100 origin-center pointer-events-none">
                
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[10%] left-[10%]"
                >
                   <StartupCard 
                      name="Powerbeans" 
                      description="AI-powered immersive audio for top publishers. +155% engagement."
                      icon={<AudioWaveform size={24} />}
                      color="bg-purple-600"
                   />
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute top-[40%] right-[5%]"
                >
                   <StartupCard 
                      name="SalesPilot" 
                      description="Hyper-personalized LinkedIn outreach via method-trained LLMs."
                      icon={<Send size={24} />}
                      color="bg-blue-600"
                   />
                </motion.div>

                <motion.div 
                   animate={{ y: [0, -12, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   className="absolute bottom-[10%] left-[20%]"
                >
                   <StartupCard 
                      name="BizMRI" 
                      description="Real-time radiographies of organizational health and human capital."
                      icon={<Stethoscope size={24} />}
                      color="bg-green-600"
                   />
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 8, 0] }}
                   transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute top-[5%] right-[30%]"
                >
                   <StartupCard 
                      name="Realtiply" 
                      description="Automating execution infrastructure for PropTech."
                      icon={<Building size={24} />}
                      color="bg-orange-500"
                      className="opacity-80 scale-90"
                   />
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};