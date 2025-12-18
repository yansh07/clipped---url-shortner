'use client'
import Footer from './components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    // Main container with a dark theme and a subtle grid background for texture
    <main className="min-h-screen flex flex-col bg-[#0A0A0A] text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]">
      
      {/* Simple Navbar */}
      <nav className="w-full py-6 px-8 max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-black tracking-tighter">
          CLIPPED<span className="text-fuchsia-500">.</span>
        </div>
        <div className="md:flex gap-4">
             <Link href="/login" className="px-6 py-2 font-bold text-sm rounded-md border-2 border-gray-700 hover:border-lime-400 transition-colors">
               Login
             </Link>
             <Link href="/signup" className="hidden md:block px-6 py-2 font-bold text-sm rounded-md bg-fuchsia-600 text-white hover:bg-fuchsia-700 transition-colors shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]">
               Get Pro
             </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center px-4 -mt-10 md:-mt-20 relative overflow-hidden">
       
       {/* Subtle background glows for that "funky" vibe */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-[128px] pointer-events-none"></div>


        <div className="text-center max-w-3xl mx-auto z-10">
          {/* Main Headline with a sharp underline effect */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            Shorten links, <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-lime-400">
                expand reach.
              </span>
               <span className="absolute bottom-2 left-0 w-full h-4 bg-fuchsia-500/30 -skew-x-12 -z-10"></span>
            </span>
          </h1>
          
          {/* The Tagline */}
          <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12">
            Because your URLs are longer than your attention span.
          </p>

          {/* The Input Area - The Star of the show */}
          <div className="relative max-w-2xl mx-auto group">
            {/* The "funky" offset shadow border behind the input */}
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-lime-500 rounded-xl blur-sm opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative flex flex-col md:flex-row items-stretch gap-2 p-2 bg-[#121212] border-2 border-gray-800 rounded-xl shadow-[6px_6px_0px_0px_rgba(255,73,158,0.3)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(211,255,92,0.5)]">
              <input 
                type="text" 
                placeholder="Paste your super long annoying URL here..." 
                className="flex-grow bg-transparent p-4 text-lg font-medium text-white placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-fuchsia-600 hover:bg-lime-400 hover:text-black text-white text-xl font-black px-8 py-4 md:py-0 rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2">
                CLIP IT 
                {/* Subtle arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
             <p className="text-gray-500 text-sm mt-4">Free tier: 1000 URLs/month. No credit card needed.</p>
          </div>

        </div>
      </section>

      {/* Add the Footer here */}
      <Footer />
    </main>
  );
}