import React from 'react';
import bannerImg from '../assets/images/banner-sale.jpg';
import ProductGrid from '../components/ProductGrid';
import ProductCard from '../components/ProductCard';
import sneakersImg from '../assets/images/product-sneakers.jpg';
import totebagImg from '../assets/images/product-totebag.jpg';

export default function NewArrivals() {
  return (
    <main className="mt-20 py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex-1 w-full">
      <div className="w-full rounded-3xl overflow-hidden shadow-md border border-outline-variant mb-xl">
        <img src={bannerImg} alt="Seasonal Flash Sale" className="w-full h-auto object-cover" />
      </div>

      <div className="mb-lg">
        <h1 className="font-headline-md text-headline-md text-on-surface">New Arrivals</h1>
        <p className="text-on-surface-variant font-body-sm mt-xs">Discover the latest additions to our collection.</p>
      </div>

      <ProductGrid>
        <ProductCard id="1" name="Canvas Slip-on Sneakers" category="Minimalist design" price="₹3,199" originalPrice="₹4,999" image={sneakersImg} discount="-35% OFF" />
        <ProductCard id="3" name="Canvas Tote Bag" category="Handbags" price="₹2,299" image={totebagImg} />
        <ProductCard id="6" name="Smart Watch" category="Accessories" price="₹15,999" image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop" />
        <ProductCard id="7" name="Sunglasses" category="Accessories" price="₹2,199" image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop" />
      </ProductGrid>
    </main>
  );
}
