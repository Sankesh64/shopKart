import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const navHeight = useTransform(scrollY, [0, 80], [80, 64]);
  const shadow = useTransform(scrollY, [0, 80], ["0px 0px 0px rgba(0,0,0,0)", "0px 4px 20px rgba(0,0,0,0.08)"]);

  return (
    <motion.header style={{ height: navHeight, boxShadow: shadow }} className="fixed top-0 left-0 w-full z-50 px-margin-mobile md:px-margin-desktop bg-surface flex items-center">
      <div className="w-full h-full max-w-max-width mx-auto flex justify-between items-center">
        <div className="flex items-center gap-xl">
          <Link className="font-headline-md text-headline-md font-bold text-primary" to="/">shopKart</Link>
          <nav className="hidden md:flex gap-md items-center">
            <NavLink to="/shop" className={({ isActive }) => `font-body-md text-body-md transition-colors ${isActive ? 'text-primary font-bold border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}>Categories</NavLink>
            <NavLink to="/new-arrivals" className={({ isActive }) => `font-body-md text-body-md transition-colors ${isActive ? 'text-primary font-bold border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}>New Arrivals</NavLink>
            <NavLink to="/deals" className={({ isActive }) => `font-body-md text-body-md transition-colors ${isActive ? 'text-primary font-bold border-b-2 border-primary' : 'text-secondary hover:text-primary'}`}>Deals</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <div className="relative hidden lg:block group">
            <input className="bg-surface-container rounded-full px-lg py-xs border-none focus:ring-2 focus:ring-primary w-64 transition-all" placeholder="Search products..." type="text"/>
            <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
          </div>
          <div className="flex items-center gap-sm">
            <button className="p-xs text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined">favorite</span></button>
            <button className="p-xs text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined">person</span></button>
            <Link to="/cart" className="p-xs text-secondary hover:text-primary transition-colors relative block">
              <span className="material-symbols-outlined">shopping_cart</span>
              <motion.span
                key="3"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.4, 1] }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full"
              >
                3
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
