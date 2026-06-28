import React from 'react';

export default function Loader({ fullScreen = false }) {
  const spinner = (
    <div className="w-12 h-12 border-4 border-surface-variant border-t-primary rounded-full animate-spin"></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-surface/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-xl">
      {spinner}
    </div>
  );
}
