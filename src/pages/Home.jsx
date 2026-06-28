import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import TrendingProducts from '../components/TrendingProducts';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main className="mt-20">
      <HeroBanner />
      <CategorySection />
      <TrendingProducts />

      {/* Why Shop With Us - Trust Indicators */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg border-y border-outline-variant py-xl">
          <div className="text-center px-md">
            <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mb-md mx-auto">
              <span className="material-symbols-outlined text-[32px]">local_shipping</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-xs">Free Shipping</h3>
            <p className="text-on-surface-variant font-body-sm">On all orders over ₹999. Fast and reliable delivery partners.</p>
          </div>
          
          <div className="text-center px-md">
            <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mb-md mx-auto">
              <span className="material-symbols-outlined text-[32px]">assignment_return</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-xs">Easy Returns</h3>
            <p className="text-on-surface-variant font-body-sm">30-day hassle-free return policy. No questions asked.</p>
          </div>
          
          <div className="text-center px-md">
            <div className="w-16 h-16 bg-primary-container text-primary rounded-full flex items-center justify-center mb-md mx-auto">
              <span className="material-symbols-outlined text-[32px]">verified_user</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-xs">Secure Checkout</h3>
            <p className="text-on-surface-variant font-body-sm">100% secure payment with industry standard encryption.</p>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
