import React from 'react';

export default function CheckoutStepper({ currentStep = 1 }) {
  const steps = ['Cart', 'Details', 'Shipping', 'Payment'];
  
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto mb-xl relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-surface-variant z-0"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary z-0 transition-all duration-500" style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}></div>
      
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        
        return (
          <div key={step} className="relative z-10 flex flex-col items-center gap-xs bg-surface px-sm">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isActive ? 'bg-primary text-white ring-4 ring-primary/20' : isCompleted ? 'bg-primary text-white' : 'bg-surface-variant text-on-surface-variant'}`}>
              {isCompleted ? <span className="material-symbols-outlined text-[16px]">check</span> : stepNum}
            </div>
            <span className={`font-label-sm text-label-sm ${isActive || isCompleted ? 'text-primary' : 'text-on-surface-variant'}`}>{step}</span>
          </div>
        );
      })}
    </div>
  );
}
