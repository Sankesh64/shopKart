import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard({ id, name, category, price, originalPrice, image, isLarge, discount }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const cardWrapper = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" },
    whileHover: "hover"
  };

  const imageVariant = {
    hover: { scale: 1.06 }
  };

  if (isLarge) {
    return (
      <motion.div {...cardWrapper} className="md:col-span-2 row-span-2 bento-item bg-surface rounded-3xl overflow-hidden relative group cursor-pointer border border-outline-variant product-card block">
        <Link to={`/product/${id}`} className="block w-full h-full">
          <div className="absolute inset-0 bg-secondary-container/20 z-0"></div>
          <motion.div className="w-full h-full overflow-hidden absolute inset-0 z-0">
             <motion.img variants={imageVariant} transition={{ duration: 0.35 }} src={image} alt={name} className="w-full h-full object-cover object-center"/>
          </motion.div>
          
          {discount && <div className="absolute top-sm left-sm bg-error text-on-error px-sm py-xs rounded-full font-label-sm text-[10px] uppercase font-bold tracking-wider z-10 shadow-sm">{discount}</div>}
          
          <div className="absolute bottom-0 left-0 w-full p-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex flex-col justify-end h-full pointer-events-none">
            <div className="glass-card p-md rounded-2xl flex justify-between items-end pointer-events-auto">
              <div>
                <h3 className="text-white font-headline-sm mb-xs">{name}</h3>
                <p className="text-surface-variant font-body-sm">{category}</p>
              </div>
              <div className="text-right flex flex-col items-end gap-sm">
                <div>
                  {originalPrice && <div className="text-surface-variant line-through text-label-sm">{originalPrice}</div>}
                  <div className="text-white font-headline-sm">{price}</div>
                </div>
                
                <motion.button
                  onClick={handleAdd}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.88 }}
                  animate={{ backgroundColor: added ? "#16a34a" : "#1a6ef5" }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-20"
                >
                  <AnimatePresence mode="wait">
                    {added ? (
                      <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} className="material-symbols-outlined text-[18px]">check</motion.span>
                    ) : (
                      <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} className="material-symbols-outlined text-[18px]">add</motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...cardWrapper} className="bento-item bg-surface rounded-3xl overflow-hidden relative group cursor-pointer border border-outline-variant product-card h-[300px] block">
      <Link to={`/product/${id}`} className="block w-full h-full relative z-0">
        <motion.div className="w-full h-full overflow-hidden absolute inset-0 z-0">
          <motion.img variants={imageVariant} transition={{ duration: 0.35 }} src={image} alt={name} className="w-full h-full object-cover"/>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full p-md bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none">
          <h3 className="text-white font-label-md mb-xs pointer-events-auto">{name}</h3>
          <div className="text-white font-bold pointer-events-auto">{price}</div>
        </div>
      </Link>
      
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.88 }}
        animate={{ backgroundColor: added ? "#16a34a" : "#1a6ef5" }}
        transition={{ type: "spring", stiffness: 500, damping: 18 }}
        className="absolute top-sm right-sm w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md z-20"
      >
        <AnimatePresence mode="wait">
          {added ? (
            <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} className="material-symbols-outlined text-[18px]">check</motion.span>
          ) : (
            <motion.span key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} className="material-symbols-outlined text-[18px]">add_shopping_cart</motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}
