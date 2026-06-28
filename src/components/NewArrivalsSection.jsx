import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/images/banner-sale.jpg';

export default function NewArrivalsSection() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
      <div className="flex justify-between items-end mb-lg">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">New Arrivals & Sales</h2>
          <p className="text-on-surface-variant font-body-sm mt-xs">Don't miss out on our latest offers</p>
        </div>
        <Link to="/new-arrivals" className="text-primary font-label-md hover:underline hidden md:block">Shop new arrivals</Link>
      </div>
      
      <Link to="/new-arrivals" className="block w-full rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-outline-variant group">
        <img src={bannerImg} alt="Seasonal Flash Sale" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" />
      </Link>
    </section>
  );
}
