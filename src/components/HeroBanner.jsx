import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden max-w-max-width mx-auto">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <motion.div 
            animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-cover bg-center" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVPAI-16ZtR8F-p70N0-5BsFJkNalvK-4JSj4eDghO63FpIGiPfGAhww5Zmahy_N5a1dXatbT90dJyzaF5uupO2e-H1l50bsQvv-dugZULAG0VNzoPJYbhoHiGEQG5fsjgk3YG6_h-4v5gLvws1YWKEAbqkyeI1b6DeL5Su4kGwAU1zHfWkbeubTOkOp3_QWiSmr_RXdhqFivoNvCq3pIc3himR3TCU105Ld2j-S9uKbyL66EnKKKv5pVZuFnypneS3VpdoV9iM9w')"}}
          ></motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/40 to-transparent"></div>
      </div>
      <div className="w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-[672px]">
          <motion.span variants={item} className="inline-block px-sm py-xs bg-primary-container text-on-primary-container rounded-full font-label-md text-label-md mb-md">LIMITED TIME SALE</motion.span>
          <motion.h1 variants={item} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-md text-on-surface">Summer Essence<br/><span className="text-primary">Collection 2024</span></motion.h1>
          <motion.p variants={item} className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[512px]">Discover the intersection of high-end fashion and seasonal comfort. Enjoy up to 40% off our curated summer styles.</motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-md">
            <Link to="/shop" className="bg-primary text-white font-label-md text-label-md px-lg py-sm rounded-xl hover:opacity-90 transition-all flex items-center gap-xs shadow-lg shadow-primary/20">
              Shop The Collection
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/lookbook" className="bg-white border border-outline-variant text-on-surface font-label-md text-label-md px-lg py-sm rounded-xl hover:bg-surface-container transition-all">
              View Lookbook
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
