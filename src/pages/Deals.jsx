import React from 'react';
import { motion } from 'framer-motion';

export default function Deals() {
  return (
    <main className="mt-20 py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex-1 w-full">
      <motion.div
        className="deals-strip bg-primary text-white rounded-3xl p-xl flex flex-col md:flex-row justify-between items-center shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h2 className="font-display-md text-display-md mb-xs">Flash Deals Ending Soon!</h2>
          <p className="font-body-md text-primary-container">Up to 60% off on selected styles.</p>
        </div>
        <motion.button
          animate={{ boxShadow: ["0 0 0px #fff", "0 0 18px rgba(255,255,255,0.6)", "0 0 0px #fff"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-md md:mt-0 bg-white text-primary font-bold font-label-lg px-xl py-sm rounded-full shadow-md hover:bg-surface-container transition-colors"
        >
          Grab Deals →
        </motion.button>
      </motion.div>
    </main>
  );
}
