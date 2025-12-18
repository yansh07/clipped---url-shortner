'use client'
import React from 'react';
import Link from 'next/link';
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    // The top border gets that "sharp" neon lime color
    <footer className="w-full py-8 bg-[#0A0A0A] border-t-2 border-lime-400 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">
            CLIPPED<span className="text-fuchsia-500">.</span>
          </span>
          <p className="text-sm font-medium text-gray-500">
            © {new Date().getFullYear()} Clipped. All rights reserved.
          </p>
        </div>

        {/* Navigation / Legal Links */}
        <div className="flex gap-6 text-sm font-semibold tracking-tight">
          <Link href="#" className="hover:text-lime-400 transition-colors duration-200">Privacy</Link>
          <Link href="#" className="hover:text-lime-400 transition-colors duration-200">Terms</Link>
          <Link href="#" className="hover:text-lime-400 transition-colors duration-200">API</Link>
        </div>

        {/* Social Icons - Functional placeholders */}
        <div className="flex gap-4">
          <a href="https://x.com/yansh_08" className="p-2 bg-gray-900 rounded-lg hover:bg-fuchsia-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_0px_#000]">
            <FaSquareXTwitter size={20} />
          </a>
          <a href="https://github.com/yansh07" className="p-2 bg-gray-900 rounded-lg hover:bg-fuchsia-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_0px_#000]">
            <FaGithubSquare size={20} />
          </a>
          <a href="https://www.linkedin.com/in/yansh08/" className="p-2 bg-gray-900 rounded-lg hover:bg-fuchsia-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_0px_#000]">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;