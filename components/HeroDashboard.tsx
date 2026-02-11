import React from 'react';
import { Activity, Shield, Cpu, Lock, Search, AlertCircle, CheckCircle2, BarChart3, Terminal } from 'lucide-react';
import { Button } from './Button';

export const HeroDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-12 perspective-[2000px] px-2 sm:px-4">
      {/* Floating Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center p-1 bg-white/80 backdrop-blur-md rounded-full border border-gray-200/60 shadow-sm ring-1 ring-gray-200/50">
          <div className="flex items-center px-4 py-1.5 bg-brand-navy text-white rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 text-xs font-semibold transition-all">
            <span className="mr-2 text-blue-400"><Activity size={12} fill="currentColor" /></span> Operational Health
          </div>
          <div className="flex items-center px-4 py-1.5 text-gray-500 text-xs font-medium hover:text-gray-900 transition-all cursor-pointer">
            <span className="mr-2 text-gray-400"><Cpu size={12} /></span> Agent Activity
          </div>
          <div className="flex items-center px-4 py-1.5 text-gray-500 text-xs font-medium hover:text-gray-900 transition-all cursor-pointer">
             <span className="mr-2 text-gray-400"><Shield size={12} /></span> Audit Logs
          </div>
        </div>
      </div>

      {/* Main Window */}
      <div className="bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden relative z-10 animate-fade-in-up">
        {/* Window Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 h-10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
             <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
             </div>
          </div>
          {/* Fake URL Bar */}
          <div className="hidden sm:flex items-center justify-center absolute left-0 right-0 pointer-events-none">
             <div className="h-6 px-24 bg-white rounded-md flex items-center shadow-sm border border-gray-200">
                <div className="w-3 h-3 text-gray-400 mr-2"><Lock size={10} /></div>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide">mission-control.aiworkify.com</span>
             </div>
          </div>
          <div className="flex items-center space-x-3">
             <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="relative h-[480px] bg-[#F8F9FC] flex overflow-hidden">
          {/* Sidebar (Mock) */}
          <div className="hidden md:block w-56 border-r border-gray-200 p-4 space-y-6 bg-white shrink-0">
             <div className="space-y-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Intelligence Layer</div>
                <div className="h-8 w-full bg-blue-50 text-blue-700 rounded-md flex items-center px-3 text-xs font-medium border border-blue-100">
                   <Activity size={14} className="mr-2" /> Live Monitoring
                </div>
                <div className="h-8 w-full bg-white text-gray-600 hover:bg-gray-50 rounded-md flex items-center px-3 text-xs font-medium transition-colors">
                   <Terminal size={14} className="mr-2" /> Agent Config
                </div>
             </div>
             <div className="space-y-2">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Human Capital</div>
                <div className="h-8 w-full bg-white text-gray-600 hover:bg-gray-50 rounded-md flex items-center px-3 text-xs font-medium transition-colors">
                   <BarChart3 size={14} className="mr-2" /> Efficiency Index
                </div>
             </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 p-6 overflow-hidden flex flex-col">
             
             {/* Header Stats */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Operational Score</span>
                      <span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded font-bold">OPTIMAL</span>
                   </div>
                   <div className="text-3xl font-bold text-gray-900">98.2<span className="text-sm text-gray-400 font-normal ml-1">/100</span></div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Agents Active</span>
                      <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-bold">RUNNING</span>
                   </div>
                   <div className="text-3xl font-bold text-gray-900">24<span className="text-sm text-gray-400 font-normal ml-1">deployed</span></div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Strategic Hours Saved</span>
                   </div>
                   <div className="text-3xl font-bold text-gray-900">742<span className="text-sm text-gray-400 font-normal ml-1">hrs/mo</span></div>
                </div>
             </div>

             {/* Live Data Feed */}
             <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-0 overflow-hidden flex flex-col">
                 <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <h3 className="text-xs font-semibold text-gray-700">Real-time Event Stream</h3>
                    <div className="flex items-center space-x-2">
                       <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                       <span className="text-[10px] text-gray-500 font-mono">LIVE</span>
                    </div>
                 </div>
                 <div className="p-0 overflow-y-auto">
                    {[
                       { time: "10:42:05", source: "SalesPilot", event: "Automated Outreach", status: "success", detail: "Generated 45 personalized sequences" },
                       { time: "10:41:58", source: "HR Core", event: "Policy Query", status: "success", detail: "Answered 'Paternity Leave' via Slack Bot" },
                       { time: "10:41:12", source: "BizMRI", event: "Data Ingestion", status: "processing", detail: "Syncing Q3 Financials from ERP" },
                       { time: "10:40:45", source: "Ops Agent", event: "Anomaly Detection", status: "warning", detail: "Latency spike in Region-East" },
                       { time: "10:39:22", source: "SalesPilot", event: "Lead Qualification", status: "success", detail: "Qualified 12 inbound leads" },
                    ].map((log, i) => (
                       <div key={i} className="flex items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50/50 transition-colors text-xs">
                          <span className="w-20 font-mono text-gray-400">{log.time}</span>
                          <span className="w-24 font-semibold text-gray-700">{log.source}</span>
                          <span className="flex-1 text-gray-600">{log.event}</span>
                          <span className="flex-1 text-gray-400 hidden sm:block truncate">{log.detail}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${
                             log.status === 'success' ? 'bg-green-50 text-green-600' : 
                             log.status === 'processing' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                          }`}>{log.status}</span>
                       </div>
                    ))}
                 </div>
             </div>

          </div>
        </div>
        
        {/* Floating Callout Overlay */}
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-auto md:w-[420px] md:bottom-6 md:left-6 bg-[#0A192F] text-white p-4 rounded-xl shadow-2xl flex items-center justify-between z-20 animate-fade-in-up border border-blue-900/50" style={{animationDelay: '0.3s'}}>
           <div className="flex items-center space-x-4">
              <div className="p-2.5 bg-blue-600/20 rounded-lg border border-blue-500/30 text-blue-400">
                 <Activity className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <h4 className="text-sm font-semibold tracking-tight text-white">System Sovereignty</h4>
                 <p className="text-xs text-gray-400 mt-0.5 font-medium">Your data. Your logic. Your control.</p>
              </div>
           </div>
           <Button variant="secondary" size="sm" className="hidden sm:inline-flex bg-white text-black hover:bg-gray-100 border-none h-8 text-xs font-semibold px-3">View Report</Button>
        </div>
      </div>
    </div>
  );
};