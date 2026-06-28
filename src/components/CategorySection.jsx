import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import handbagImg from '../assets/images/cat-handbags.jpg';
import apparelImg from '../assets/images/cat-apparel.png';
import jewelryImg from '../assets/images/cat-jewelry.jpg';

export default function CategorySection() {
  const categories = [
    {image: handbagImg, name: 'Handbags'},
    {image: apparelImg, name: 'Apparel'},
    {image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop', name: 'Watches'},
    {image: jewelryImg, name: 'Jewelry'}
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show:   { opacity: 1, y: 0,  scale: 1 }
  };

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <h2 className="font-headline-md text-headline-md mb-lg">Browse by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(26,110,245,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to={`/category/${cat.name.toLowerCase()}`} className="group relative rounded-3xl overflow-hidden aspect-[4/5] block shadow-sm border border-outline-variant h-full">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-lg">
                <h3 className="font-headline-sm text-headline-sm text-white">{cat.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
