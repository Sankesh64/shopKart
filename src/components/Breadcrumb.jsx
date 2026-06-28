import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  // items should be an array of objects: { label: 'Home', path: '/' }
  return (
    <nav className="flex items-center text-body-sm text-on-surface-variant py-md max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center">
            {isLast ? (
              <span className="text-on-surface font-medium">{item.label}</span>
            ) : (
              <>
                <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
                <span className="material-symbols-outlined text-[16px] mx-xs text-outline">chevron_right</span>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
