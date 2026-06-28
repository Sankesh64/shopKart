import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-xl px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter bg-surface-container-high dark:bg-surface-container-highest">
      <div className="flex flex-col gap-sm">
        <Link className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim mb-xs" to="/">shopKart</Link>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[250px]">
          Elevating your everyday style with premium quality and sustainable fashion.
        </p>
        <div className="flex gap-sm mt-sm">
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-container transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-container transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary-container transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-sm">
        <h3 className="font-label-lg text-label-lg text-on-surface font-bold mb-xs">Shop</h3>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/shop">Women's Collection</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/shop">Men's Collection</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/shop">Accessories</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/new-arrivals">New Arrivals</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/deals">Sale & Offers</Link>
      </div>

      <div className="flex flex-col gap-sm">
        <h3 className="font-label-lg text-label-lg text-on-surface font-bold mb-xs">Customer Care</h3>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/orders">Help Center</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/orders">Track Your Order</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/shop">Returns & Exchanges</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/shop">Size Guide</Link>
        <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/profile">Contact Us</Link>
      </div>

      <div className="flex flex-col gap-sm">
        <h3 className="font-label-lg text-label-lg text-on-surface font-bold mb-xs">Newsletter</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-xs">
          Sign up to receive 10% off your first order.
        </p>
        <div className="flex flex-col gap-xs mt-xs">
          <input className="bg-surface-container rounded-lg px-md py-sm border-none text-body-sm" placeholder="Email address" type="email"/>
          <button className="bg-primary text-white font-label-sm px-md py-sm rounded-lg hover:opacity-90 transition-opacity">Subscribe</button>
        </div>
      </div>

      <div className="col-span-1 md:col-span-4 mt-xl pt-lg border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} shopKart. All rights reserved.
        </p>
        <div className="flex gap-md">
          <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/">Terms of Service</Link>
          <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
