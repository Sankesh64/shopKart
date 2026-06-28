import React, { useState, useEffect } from 'react';

export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-error',
    warning: 'bg-accent-yellow',
    info: 'bg-primary'
  };

  const icons = {
    success: 'check_circle',
    error: 'error',
    warning: 'warning',
    info: 'info'
  };

  return (
    <div className={`fixed bottom-lg right-lg z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className={`${bgColors[type]} text-white px-lg py-sm rounded-xl shadow-lg flex items-center gap-sm`}>
        <span className="material-symbols-outlined">{icons[type]}</span>
        <span className="font-label-md">{message}</span>
        <button onClick={() => setIsVisible(false)} className="ml-md hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
}
