import React from 'react';

export default function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-xs py-xl">
      <button 
        disabled={currentPage === 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface hover:bg-surface-container disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <button 
            key={page}
            onClick={() => onPageChange && onPageChange(page)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-label-md transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface hover:bg-surface-container'}`}
          >
            {page}
          </button>
        );
      })}
      
      <button 
        disabled={currentPage === totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface hover:bg-surface-container disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
