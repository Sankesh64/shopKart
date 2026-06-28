import React from 'react';
import ProductCard from './ProductCard';
import ProductGrid from './ProductGrid';

export default function FeaturedProducts() {
  return (
    <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">Featured Products</h2>
        <p className="text-on-surface-variant font-body-sm mt-xs">Our top picks just for you</p>
      </div>
      <ProductGrid>
        <ProductCard id="4" name="Classic Denim" category="Apparel" price="₹4,999" image="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop" />
        <ProductCard id="5" name="Running Shoes" category="Footwear" price="₹5,499" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" />
        <ProductCard id="6" name="Smart Watch" category="Accessories" price="₹15,999" image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop" />
        <ProductCard id="7" name="Sunglasses" category="Accessories" price="₹2,199" image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop" />
      </ProductGrid>
    </section>
  );
}
