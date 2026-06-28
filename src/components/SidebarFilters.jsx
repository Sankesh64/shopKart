import React from 'react';

export default function SidebarFilters() {
  return (
    <aside className="w-full md:w-64 bg-surface p-md rounded-2xl border border-outline-variant">
      <h3 className="font-headline-sm text-headline-sm mb-md text-on-surface">Filters</h3>
      
      <div className="mb-md">
        <h4 className="font-label-md text-label-md mb-sm text-on-surface">Category</h4>
        <div className="flex flex-col gap-xs">
          <label className="flex items-center gap-sm cursor-pointer"><input type="checkbox" className="accent-primary"/> Apparel</label>
          <label className="flex items-center gap-sm cursor-pointer"><input type="checkbox" className="accent-primary"/> Footwear</label>
          <label className="flex items-center gap-sm cursor-pointer"><input type="checkbox" className="accent-primary"/> Accessories</label>
        </div>
      </div>

      <div className="mb-md">
        <h4 className="font-label-md text-label-md mb-sm text-on-surface">Price Range</h4>
        <input type="range" min="0" max="20000" className="w-full accent-primary" />
        <div className="flex justify-between text-body-sm text-on-surface-variant mt-xs">
          <span>₹0</span>
          <span>₹20,000</span>
        </div>
      </div>
    </aside>
  );
}
