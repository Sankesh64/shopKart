import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import sneakersImg from '../assets/images/product-sneakers.jpg';
import totebagImg from '../assets/images/product-totebag.jpg';

export default function TrendingProducts() {
  return (
    <section className="py-xl bg-surface-container-low">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Trending Now</h2>
            <p className="text-on-surface-variant font-body-sm mt-xs">Curated picks for the season</p>
          </div>
          <Link to="/shop" className="text-primary font-label-md hover:underline hidden md:block">View all trending</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <ProductCard 
            id="1" 
            name="Canvas Slip-on Sneakers" 
            category="Minimalist design, maximum comfort" 
            price="₹3,199" 
            originalPrice="₹4,999" 
            image={sneakersImg} 
            isLarge={true} 
            discount="-35% OFF" 
          />
          <ProductCard 
            id="2" 
            name="Chronograph Watch" 
            category="Watches" 
            price="₹12,499" 
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop" 
          />
          <ProductCard 
            id="3" 
            name="Canvas Tote Bag" 
            category="Handbags" 
            price="₹2,299" 
            image={totebagImg} 
          />
        </div>
      </div>
    </section>
  );
}
