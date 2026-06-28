import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto mb-xl">
      <div className="bg-primary rounded-3xl p-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-lg shadow-xl shadow-primary/20">
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-[512px] text-center md:text-left">
          <h2 className="font-headline-md text-headline-md text-white mb-sm">Join the shopKart Club</h2>
          <p className="text-primary-container font-body-md">Subscribe for exclusive offers, early access to new collections, and style tips straight to your inbox.</p>
        </div>
        <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-sm">
          <input type="email" placeholder="Enter your email address" className="px-lg py-sm rounded-xl border-none outline-none min-w-[280px] font-body-sm"/>
          <button className="bg-white text-primary font-label-md text-label-md px-lg py-sm rounded-xl hover:bg-surface-container transition-all whitespace-nowrap">Sign Up Now</button>
        </div>
      </div>
    </section>
  );
}
