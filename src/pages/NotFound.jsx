import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mt-20 py-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex-1 w-full flex flex-col items-center justify-center">
      <h1 className="font-display-lg text-display-lg mb-md text-on-surface">404</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">Page not found</p>
      <Link to="/" className="bg-primary text-white font-label-md text-label-md px-lg py-sm rounded-xl hover:opacity-90 transition-all">Go Home</Link>
    </main>
  );
}
