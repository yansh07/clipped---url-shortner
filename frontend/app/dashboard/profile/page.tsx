"use client";

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Zap, 
  Key, 
  Bell, 
  Trash2, 
  Camera, 
  Check, 
  Copy,
  RefreshCw
} from 'lucide-react';

export default function ProfilePage() {
  // Mock User Data
  const user = {
    name: "Priyanshu Singh",
    email: "priyanshu@example.com",
    username: "@priyanshu",
    avatar: "https://github.com/shadcn.png", // Placeholder
    plan: "Free Tier",
    joined: "Nov 2025",
    usage: {
      links: 842,
      limit: 1000,
    }
  };

  const [apiKey, setApiKey] = useState("sk_live_51M...92x");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 p-4 sm:p-8 font-sans bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]">
      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-black text-white mb-8 tracking-tight">Account Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* =======================
              LEFT COL: IDENTITY & USAGE
          ======================== */}
          <div className="space-y-6">
            
            {/* Identity Card */}
            <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
              {/* Pro Badge (Hidden if free, but let's show what it looks like) */}
              {user.plan === "Pro" && (
                <div className="absolute top-0 right-0 bg-lime-400 text-black text-xs font-black px-3 py-1 rounded-bl-lg">
                  PRO
                </div>
              )}
              
              <div className="relative mb-4">
                <img 
                  src={user.avatar} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full border-4 border-[#1A1A1A] group-hover:border-fuchsia-500 transition-colors duration-300"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full text-white hover:bg-fuchsia-600 transition shadow-[2px_2px_0px_0px_#000]">
                  <Camera size={14} />
                </button>
              </div>
              
              <h2 className="text-xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-500 font-mono text-sm">{user.username}</p>
              
              <div className="mt-6 w-full pt-6 border-t border-gray-800 flex justify-between text-sm">
                <span className="text-gray-500">Joined</span>
                <span className="font-medium text-white">{user.joined}</span>
              </div>
            </div>

            {/* Plan Usage Card (The Upsell) */}
            <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Zap size={16} className="text-yellow-400" /> Current Plan
                </h3>
                <span className="text-xs font-bold bg-gray-800 px-2 py-1 rounded text-gray-300 border border-gray-700">FREE</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-2 flex justify-between text-xs font-medium">
                <span className="text-gray-400">Links Created</span>
                <span className={user.usage.links > 900 ? "text-red-400" : "text-lime-400"}>
                  {user.usage.links} / {user.usage.limit}
                </span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-6">
                <div 
                  className="h-full bg-gradient-to-r from-fuchsia-600 to-lime-400 rounded-full" 
                  style={{ width: `${(user.usage.links / user.usage.limit) * 100}%` }}
                ></div>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-fuchsia-700 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-500 text-white font-bold rounded-lg shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2">
                Upgrade to PRO
              </button>
            </div>

          </div>

          {/* =======================
              RIGHT COL: FORMS & SETTINGS
          ======================== */}
          <div className="lg:col-span-2 space-y-8">

            {/* General Information Form */}
            <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <User size={18} className="text-fuchsia-500" /> General Information
              </h3>
              <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Display Name</label>
                    <input type="text" defaultValue={user.name} className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-fuchsia-500 transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Username</label>
                    <div className="flex">
                       <span className="bg-gray-800 text-gray-400 p-3 rounded-l-lg border border-r-0 border-gray-800">clipped.io/</span>
                       <input type="text" defaultValue="priyanshu" className="w-full bg-[#0A0A0A] border border-gray-800 rounded-r-lg p-3 text-white focus:outline-none focus:border-fuchsia-500 transition" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                   <div className="relative">
                      <Mail size={16} className="absolute left-3 top-3.5 text-gray-500" />
                      <input type="email" defaultValue={user.email} className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg p-3 pl-10 text-white focus:outline-none focus:border-fuchsia-500 transition" />
                   </div>
                </div>

                <div className="pt-4 flex justify-end">
                   <button className="px-6 py-2 bg-gray-200 text-black font-bold rounded hover:bg-white transition shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]">
                     Save Changes
                   </button>
                </div>
              </div>
            </section>

             {/* Developer API Keys */}
             <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Key size={18} className="text-lime-400" /> Developer API Keys
              </h3>
              <div className="bg-[#121212] border border-gray-800 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-4">Use this key to integrate Clipped into your own apps. Keep it secret!</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[#0A0A0A] border border-gray-800 rounded-lg p-3 font-mono text-sm text-gray-300 overflow-hidden text-ellipsis whitespace-nowrap">
                    {apiKey}
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition border border-gray-700"
                  >
                    {copied ? <Check size={18} className="text-lime-400"/> : <Copy size={18}/>}
                  </button>
                  <button className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition border border-gray-700" title="Regenerate">
                    <RefreshCw size={18} />
                  </button>
                </div>
              </div>
            </section>

            {/* Email Preferences */}
            <section>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Bell size={18} className="text-blue-400" /> Email Notifications
              </h3>
              <div className="bg-[#121212] border border-gray-800 rounded-xl overflow-hidden divide-y divide-gray-800">
                <ToggleItem title="Product Updates" description="Receive news about new features." defaultChecked />
                <ToggleItem title="Weekly Analytics" description="Get a summary of your link performance." defaultChecked />
                <ToggleItem title="Marketing Emails" description="Receive offers and promotions." defaultChecked={false} />
              </div>
            </section>

            {/* Danger Zone */}
            <section>
              <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
                <Shield size={18} /> Danger Zone
              </h3>
              <div className="border border-red-900/50 bg-red-900/10 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white">Delete Account</h4>
                  <p className="text-sm text-gray-500">Once you delete your account, there is no going back. All your links will be broken.</p>
                </div>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded transition whitespace-nowrap">
                  Delete Account
                </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for Toggles
function ToggleItem({ title, description, defaultChecked }: { title: string, description: string, defaultChecked: boolean }) {
  const [enabled, setEnabled] = useState(defaultChecked);

  return (
    <div className="p-4 flex items-center justify-between">
      <div>
        <h4 className="font-medium text-gray-200 text-sm">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <button 
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${enabled ? 'bg-lime-500' : 'bg-gray-800'}`}
      >
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </button>
    </div>
  );
}