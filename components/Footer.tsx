import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Block */}
        <div className="mb-20">
           <div className="bg-[#0A192F] rounded-3xl p-10 md:p-16 text-center shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Give your team a fair chance to thrive.</h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                 The future belongs to those with the neuroplasticity to orchestrate operations between digital agents and creative humans.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-xl border-none">
                 Partner with Ai Workify
              </Button>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 border-t border-gray-100 pt-16">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-4">
                <img src="http://aiworkify.com/images/logo.png" alt="Ai Workify" className="h-8 w-auto object-contain" />
                {/* Removed 'Ai Workify' text as it's part of the logo image */}
             </div>
             <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
               Transformation Partner & Venture Studio building the future of AI-native operations.
             </p>
             <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors"><Github size={20} /></a>
             </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm text-gray-500">
               <li><a href="#" className="hover:text-gray-900 transition-colors">Enterprise Transformation</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Agent Development</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Operational Audit</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Venture Studio</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
               <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Methodology</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Case Studies</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
               <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
               <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
           <p className="text-xs text-gray-400">© 2024 Ai Workify. All rights reserved.</p>
           <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">Systems Operational</span>
           </div>
        </div>
      </div>
    </footer>
  );
};