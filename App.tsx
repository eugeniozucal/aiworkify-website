import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, ChevronRight, Shield, Zap, Database, Server, Layers, Lock, Cpu, Users, Activity } from 'lucide-react';
import { Button } from './components/Button';
import { HeroDashboard } from './components/HeroDashboard';
import { Features } from './components/Features';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';

// --- Trust Logos for Infinite Carousel ---
const TRUST_LOGOS = [
  'https://aiworkify.com/images/01.png',
  'https://aiworkify.com/images/02.png',
  'https://aiworkify.com/images/03.png',
  'https://aiworkify.com/images/04.png',
  'https://aiworkify.com/images/05.png',
  'https://aiworkify.com/images/06.png',
  'https://aiworkify.com/images/07.png',
  'https://aiworkify.com/images/08.png',
  'https://aiworkify.com/images/09.png',
  'https://aiworkify.com/images/10.png',
  'https://aiworkify.com/images/11.png',
];

// Architecture Component
const Architecture = () => (
  <section className="py-32 bg-white border-t border-gray-100">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 mb-6 border border-gray-200">
               <Server size={12} className="mr-1.5" /> Agnostic Architecture
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Enterprise Security. Sovereign Control.</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
               We orchestrate the world's most powerful models within your secure environment, connecting disparate data silos into a unified intelligence layer.
            </p>
        </div>
        
        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-20 border border-gray-200 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Dot Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60"></div>

            {/* Diagram */}
            <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 z-10">
               {/* Left Nodes (Data Sources) */}
               <div className="flex flex-col space-y-4">
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors">
                     <Database size={16} className="text-blue-500" />
                     <span className="text-sm font-bold text-gray-700">BigQuery</span>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors">
                     <Layers size={16} className="text-orange-500" />
                     <span className="text-sm font-bold text-gray-700">HubSpot</span>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors">
                     <Users size={16} className="text-green-500" />
                     <span className="text-sm font-bold text-gray-700">BambooHR</span>
                  </div>
               </div>

               {/* Connecting Line Left */}
               <div className="hidden md:block h-0.5 flex-1 bg-gray-300 relative">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
               </div>
               
               {/* Center Node (Core) */}
               <div className="z-10 bg-[#0A192F] text-white w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white text-center p-4">
                  <Cpu size={32} className="mb-2 text-blue-400" />
                  <span className="text-lg font-bold leading-tight">Unified Intelligence</span>
               </div>
               
               {/* Connecting Line Right */}
               <div className="hidden md:block h-0.5 flex-1 bg-gray-300 relative">
                  <div className="absolute left-0 -top-1.5 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
               </div>

               {/* Right Nodes (Interfaces) */}
               <div className="flex flex-col space-y-4">
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors justify-end">
                     <span className="text-sm font-bold text-gray-700">Slack</span>
                     <div className="w-4 h-4 rounded bg-purple-500"></div>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors justify-end">
                     <span className="text-sm font-bold text-gray-700">Teams</span>
                     <div className="w-4 h-4 rounded bg-blue-600"></div>
                  </div>
                  <div className="bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-xl flex items-center space-x-3 w-48 hover:border-gray-300 transition-colors justify-end">
                     <span className="text-sm font-bold text-gray-700">Vertex AI</span>
                     <div className="w-4 h-4 rounded bg-blue-400"></div>
                  </div>
               </div>
            </div>
        </div>
        
        {/* Security Badges */}
        <div className="flex justify-center mt-12 gap-8 text-xs text-gray-400 font-mono uppercase tracking-widest">
           <div className="flex items-center gap-2"><Lock size={14}/> SOC2 Compliant</div>
           <div className="flex items-center gap-2"><Shield size={14}/> GDPR Ready</div>
           <div className="flex items-center gap-2"><Server size={14}/> On-Prem Options</div>
        </div>
     </div>
  </section>
);


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-black selection:bg-blue-100 selection:text-blue-900 font-sans antialiased">
      {/* Sticky Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3-Column Grid for Centered Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-center">
            {/* Logo Column */}
            <div className="flex justify-start">
              <a href="#" className="flex items-center space-x-2 group">
                <img src="http://aiworkify.com/images/logo.png" alt="Ai Workify" className="h-8 w-auto object-contain" />
              </a>
            </div>

            {/* Links Column (Centered) */}
            <div className="hidden md:flex justify-center items-center space-x-8">
              <a href="#product" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Product</a>
              <a href="#solutions" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Solutions</a>
              <a href="#venture-studio" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Venture Studio</a>
              <a href="#resources" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Resources</a>
            </div>

            {/* CTA Column */}
            <div className="flex justify-end items-center space-x-4">
              <div className="hidden md:block">
                <Button size="sm" className="bg-black text-white hover:bg-gray-800 px-5 py-2 h-9 text-sm font-medium shadow-lg hover:shadow-xl transition-all">Partner with Us</Button>
              </div>
              <button className="md:hidden text-gray-600 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
           <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 md:hidden flex flex-col space-y-4 shadow-2xl z-50">
              <a href="#product" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-900 py-2 border-b border-gray-50">Product</a>
              <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-900 py-2 border-b border-gray-50">Solutions</a>
              <a href="#venture-studio" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-900 py-2 border-b border-gray-50">Venture Studio</a>
              <a href="#resources" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-900 py-2 border-b border-gray-50">Resources</a>
              <div className="pt-6 mt-2 flex flex-col space-y-3">
                 <Button className="w-full justify-center h-10">Partner with Us</Button>
              </div>
           </div>
        )}
      </nav>

      {/* Section 1: Hero Claim */}
      <section className="pt-24 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 relative z-10 px-4"> 
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[5rem] font-extrabold tracking-[-0.03em] text-gray-900 leading-[1.1] md:leading-[1.05] pb-2"
          >
            Don't Architect Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Own Obsolescence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-4"
          >
            The gap between buying AI tools and building an AI-native culture is where transformation fails. We partner with ambitious enterprises to embed artificial intelligence into the core of operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center pt-4"
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 h-auto text-lg font-bold shadow-2xl transition-all">
              Partner with Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Visual Proof / Dashboard */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32 bg-white border-b border-gray-50">
        <HeroDashboard />
      </section>

      {/* Social Proof - Infinite Trust Carousel */}
      <section className="py-20 border-b border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Trusted by Market Leaders</p>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex space-x-20 items-center whitespace-nowrap px-10"
            animate={{ x: [0, -1920 * 4] }} // Adjusted for 2x larger logos (4x total effective width)
            transition={{ 
              duration: 80, // Halved duration for 2x faster speed
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* Duplicate logos multiple times to ensure seamless loop effect */}
            {[...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS, ...TRUST_LOGOS].map((src, idx) => ( // Added more duplicates to cover potential overflow with larger logos
              <img 
                key={idx} 
                src={src} 
                alt="Partner Logo" 
                className="h-40 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Prop 1: Mission Control */}
      <section id="product" className="py-32 bg-white overflow-hidden border-b border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            {/* Left Content */}
            <div className="order-1">
               <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 mb-6 border border-red-100">
                  <Shield size={12} className="mr-1.5" /> Single Source of Truth
               </div>
               <h2 className="text-4xl md:text-[3.5rem] font-bold text-gray-900 tracking-tight leading-[1.1] mb-10">
                  From Fragmented Data <br/>
                  <span className="text-gray-400">to Mission Control.</span>
               </h2>
               <div className="space-y-6 text-xl text-gray-500 leading-relaxed font-normal">
                  <p>
                     Operational fragmentation is the primary barrier to scale. Your intelligence is currently scattered across incompatible platforms—spreadsheets, ERPs, and chat logs—forcing you to rely on manual "human glue."
                  </p>
                  <p>
                     We build proprietary operational assets, like <strong>Mission Control</strong>, that unify your data. We replace "rented insights" with absolute dominion over your business logic.
                  </p>
               </div>
            </div>

            {/* Right Visual - Dashboard Card Concept */}
            <div className="order-2 relative">
                <div className="relative w-full aspect-[1.1] max-w-lg mx-auto bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-inner flex items-center justify-center">
                   
                   {/* Main Dashboard UI Mockup */}
                   <div className="w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="bg-[#1A202C] px-4 py-3 flex justify-between items-center">
                         <span className="text-white font-mono text-xs font-bold">MISSION_CONTROL_V1.4</span>
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="p-6 grid grid-cols-2 gap-4">
                         <div className="col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-100 flex justify-between items-center">
                            <div>
                               <div className="text-[10px] text-blue-500 font-bold uppercase">System Health</div>
                               <div className="text-2xl font-bold text-blue-900">99.9%</div>
                            </div>
                            <Activity className="text-blue-400" />
                         </div>
                         <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Errors</div>
                            <div className="text-xl font-bold text-gray-900">0</div>
                         </div>
                         <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Latency</div>
                            <div className="text-xl font-bold text-gray-900">12ms</div>
                         </div>
                         <div className="col-span-2 mt-2">
                            <div className="text-[10px] text-gray-400 font-bold uppercase mb-2">Live Stream</div>
                            <div className="space-y-2">
                               <div className="h-2 w-full bg-gray-100 rounded"></div>
                               <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                               <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Floating "Red/Green" Card */}
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute -right-6 bottom-10 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 w-40"
                   >
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-gray-500">Performance</span>
                         <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      </div>
                      <div className="flex gap-1 mb-1">
                         <div className="h-8 w-2 bg-green-500 rounded-sm"></div>
                         <div className="h-8 w-2 bg-green-500 rounded-sm"></div>
                         <div className="h-8 w-2 bg-green-500 rounded-sm"></div>
                         <div className="h-8 w-2 bg-green-500 rounded-sm"></div>
                         <div className="h-8 w-2 bg-gray-200 rounded-sm"></div>
                      </div>
                      <div className="text-xs font-mono text-gray-400">Last 24h</div>
                   </motion.div>
                </div>
            </div>
         </div>
      </section>

      {/* Methodology & Case Study (Features) */}
      <Features />

      {/* Venture Studio (Integrations) */}
      <Integrations />

      {/* Stats Section */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Proven Impact</h2>
              <p className="text-lg text-gray-500">
                 We don't deal in theoreticals. Our deployments drive hard metrics in efficiency, engagement, and operational velocity.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-12">
              <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Efficiency Gain</p>
                 <p className="text-4xl sm:text-5xl font-mono font-medium text-blue-600 tabular-nums tracking-tighter">700+ hrs/mo</p>
              </div>
              <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">User Engagement</p>
                 <p className="text-4xl sm:text-5xl font-mono font-medium text-purple-600 tabular-nums tracking-tighter">+155%</p>
              </div>
              <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Response Rate</p>
                 <p className="text-4xl sm:text-5xl font-mono font-medium text-green-600 tabular-nums tracking-tighter">60%</p>
              </div>
           </div>
        </div>
      </section>

      {/* Architecture CTA */}
      <Architecture />

      <Footer />
    </div>
  );
}

export default App;