"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  BarChart3, 
  Settings, 
  LogOut, 
  User, 
  CreditCard,
  Menu,
  X,
  Copy,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Mock data to make it look real
  const links = [
    { id: 1, original: 'https://github.com/priyanshukumar/project-velocity', short: 'clip.ped/gh-repo', clicks: 1240, date: '2 hrs ago' },
    { id: 2, original: 'https://dribbble.com/shots/234982-Dark-Mode-Dashboard', short: 'clip.ped/design', clicks: 85, date: '1 day ago' },
    { id: 3, original: 'https://vercel.com/docs/edge-network/overview', short: 'clip.ped/edge-docs', clicks: 432, date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-sans selection:bg-fuchsia-500 selection:text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]">
      
      {/* =======================
          MOBILE OVERLAY 
      ======================== */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* =======================
          SIDEBAR 
      ======================== */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-[#121212] border-r border-gray-800 transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
      `}>
        {/* Brand Logo in Sidebar */}
        <div className="h-20 flex items-center px-8 border-b border-gray-800">
           <span className="text-2xl font-black tracking-tighter text-white">
            CLIPPED<span className="text-fuchsia-500">.</span>
          </span>
          <button className="ml-auto lg:hidden text-gray-400" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<LinkIcon size={20} />} label="My Links" />
          <NavItem icon={<BarChart3 size={20} />} label="Analytics" />
        </nav>

        {/* BOTTOM LEFT SETTINGS - The specific request */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-800 bg-[#121212]">
          
          {/* The Popup Menu (Conditional Render) */}
          {isSettingsOpen && (
            <div className="absolute bottom-20 left-4 right-4 bg-[#1A1A1A] border border-gray-700 rounded-lg shadow-[4px_4px_0px_0px_#000] overflow-hidden animation-fade-in-up">
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 text-sm font-medium flex items-center gap-2 text-gray-300 hover:text-white transition">
                <User size={16} /> Profile
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-800 text-sm font-medium flex items-center gap-2 text-gray-300 hover:text-white transition">
                <CreditCard size={16} /> Billing
              </button>
              <div className="h-[1px] bg-gray-700 mx-2"></div>
              <button className="w-full text-left px-4 py-3 hover:bg-red-900/20 text-sm font-medium flex items-center gap-2 text-red-400 hover:text-red-300 transition">
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}

          {/* The Trigger Icon */}
          <button 
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isSettingsOpen ? 'bg-fuchsia-900/20 text-fuchsia-400' : 'hover:bg-gray-800 text-gray-400 hover:text-white'}`}
          >
            <Settings size={20} className={isSettingsOpen ? "animate-spin-slow" : ""} />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </aside>

      {/* =======================
          MAIN CONTENT AREA 
      ======================== */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        
        {/* TOP NAVBAR */}
        <header className="h-20 border-b border-gray-800 bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-400 hover:text-white" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            {/* Breadcrumb or Page Title */}
            <h2 className="text-xl font-bold hidden sm:block">Dashboard</h2>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/pro" className="hidden sm:block px-4 py-2 font-bold text-xs uppercase tracking-wider rounded bg-lime-400 text-black hover:bg-lime-300 transition-all shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]">
               Get Pro
             </Link>
            
            {/* User Profile */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 p-[2px] cursor-pointer hover:scale-105 transition">
              <div className="h-full w-full rounded-full bg-[#121212] flex items-center justify-center text-xs font-bold text-white">
                PK
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-white mb-1">Welcome back, Priyanshu</h1>
              <p className="text-gray-500 text-sm">Here&apos;s what&apos;s happening with your links today.</p>
            </div>
            <button className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-3 rounded-lg font-bold shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all">
              <Plus size={20} />
              Create New
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard title="Total Clicks" value="24,592" trend="+12%" color="lime" />
            <StatCard title="Active Links" value="128" trend="+4" color="fuchsia" />
            <StatCard title="Avg. CTR" value="4.2%" trend="-0.5%" color="gray" />
          </div>

          {/* Recent Links Table */}
          <div className="bg-[#121212] border border-gray-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h3 className="font-bold text-lg text-white">Recent Links</h3>
              <button className="text-sm text-fuchsia-500 font-medium hover:underline">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 text-xs uppercase tracking-wider border-b border-gray-800">
                    <th className="p-4 font-semibold">Short Link</th>
                    <th className="p-4 font-semibold hidden md:table-cell">Original URL</th>
                    <th className="p-4 font-semibold text-center">Clicks</th>
                    <th className="p-4 font-semibold text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {links.map((link) => (
                    <tr key={link.id} className="group hover:bg-[#1A1A1A] transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-900 rounded-md text-fuchsia-400 group-hover:text-lime-400 transition-colors">
                            <LinkIcon size={16} />
                          </div>
                          <span className="font-mono font-medium text-white">{link.short}</span>
                          <button className="text-gray-600 hover:text-white transition"><Copy size={14}/></button>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex items-center gap-2 max-w-xs">
                          <p className="truncate text-gray-400 text-sm">{link.original}</p>
                          <ExternalLink size={12} className="text-gray-600 flex-shrink-0" />
                        </div>
                      </td>
                      <td className="p-4 text-center font-bold text-gray-300 group-hover:text-white">
                        {link.clicks}
                      </td>
                      <td className="p-4 text-right text-gray-500 text-sm">
                        {link.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
// --- HELPER COMPONENTS ---

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`
      flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 font-medium
      ${active 
        ? 'bg-fuchsia-600 text-white shadow-[0px_0px_15px_rgba(192,38,211,0.4)]' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
    `}>
      {icon}
      <span>{label}</span>
    </a>
  );
}

function StatCard({ title, value, trend, color }: { title: string, value: string, trend: string, color: 'lime' | 'fuchsia' | 'gray' }) {
  const isPositive = trend.startsWith('+');
  return (
    <div className="bg-[#121212] border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-400 font-medium text-sm">{title}</h3>
        <span className={`
          text-xs font-bold px-2 py-1 rounded 
          ${isPositive ? 'bg-lime-900/30 text-lime-400' : 'bg-red-900/30 text-red-400'}
        `}>
          {trend}
        </span>
      </div>
      <p className="text-4xl font-black text-white tracking-tight">{value}</p>
    </div>
  );
}