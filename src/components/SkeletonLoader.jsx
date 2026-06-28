import React from 'react';

export default function SkeletonLoader({ type = 'card', count = 1 }) {
  const skeletons = Array(count).fill(0);

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md w-full">
        {skeletons.map((_, i) => (
          <div key={i} className="bento-item bg-surface rounded-3xl h-[300px] border border-outline-variant p-md flex flex-col justify-end">
            <div className="w-full h-full bg-surface-container rounded-2xl animate-pulse mb-md"></div>
            <div className="w-3/4 h-6 bg-surface-container rounded-md animate-pulse mb-xs"></div>
            <div className="w-1/4 h-6 bg-surface-container rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className="w-full space-y-sm">
        {skeletons.map((_, i) => (
          <div key={i} className={`h-4 bg-surface-container rounded-md animate-pulse ${i === skeletons.length - 1 ? 'w-2/3' : 'w-full'}`}></div>
        ))}
      </div>
    );
  }

  return null;
}
