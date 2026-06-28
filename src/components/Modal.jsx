import React from 'react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-md bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface w-full max-w-lg rounded-3xl shadow-xl overflow-hidden animate-fade-in-up">
        <div className="px-lg py-md border-b border-outline-variant flex justify-between items-center">
          <h2 className="font-headline-sm text-on-surface">{title}</h2>
          <button onClick={onClose} className="p-xs rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
