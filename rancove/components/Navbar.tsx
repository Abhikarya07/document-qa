"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <span className="text-2xl font-bold text-indigo-600 tracking-tight">
          Rancove
        </span>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Free Consultation
        </a>

        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600">
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-indigo-600">Services</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-indigo-600">How It Works</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-indigo-600">Pricing</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-indigo-600">Contact</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-indigo-600 text-white text-center px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors"
          >
            Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
