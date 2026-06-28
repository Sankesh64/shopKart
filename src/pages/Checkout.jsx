import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const nextStep = (next) => setStep(next);

  return (
    <main className="flex-grow pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter" id="checkout-container">
        
        {/* Left Column: Checkout Steps */}
        <div className="lg:col-span-8">
          {/* Progress Stepper */}
          <nav className="flex items-center justify-between mb-lg bg-surface p-md rounded-xl border border-outline-variant">
            <div className={`flex items-center gap-xs ${step >= 1 ? 'step-active' : 'step-inactive'}`}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold text-sm">1</span>
              <span className="font-label-md text-label-md hidden sm:inline">Shipping</span>
            </div>
            <div className={`flex-grow h-[2px] mx-md ${step >= 2 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
            <div className={`flex items-center gap-xs ${step >= 2 ? 'step-active' : 'step-inactive'}`}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold text-sm">2</span>
              <span className="font-label-md text-label-md hidden sm:inline">Payment</span>
            </div>
            <div className={`flex-grow h-[2px] mx-md ${step >= 3 ? 'bg-primary' : 'bg-outline-variant'}`}></div>
            <div className={`flex items-center gap-xs ${step >= 3 ? 'step-active' : 'step-inactive'}`}>
              <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold text-sm">3</span>
              <span className="font-label-md text-label-md hidden sm:inline">Review</span>
            </div>
          </nav>

          {/* Step 1: Shipping Address */}
          {step === 1 && (
            <section className="fade-in">
              <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
                <h2 className="font-headline-sm text-headline-sm mb-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>local_shipping</span>
                  Shipping Address
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">First Name</label>
                    <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="John" type="text"/>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Last Name</label>
                    <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="Doe" type="text"/>
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Street Address</label>
                    <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="123 Modern Ave" type="text"/>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">City</label>
                    <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="Design City" type="text"/>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant">Postal Code</label>
                    <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="10101" type="text"/>
                  </div>
                  <div className="md:col-span-2 flex items-center gap-sm mt-sm">
                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" id="save-addr" type="checkbox"/>
                    <label className="font-body-sm text-body-sm text-on-surface" htmlFor="save-addr">Save address to profile for future orders</label>
                  </div>
                </form>
                <div className="mt-lg flex justify-end">
                  <button className="bg-primary text-white font-label-md px-xl py-sm rounded-xl hover:opacity-90 transition-opacity flex items-center gap-xs shadow-md" onClick={() => nextStep(2)}>
                    Continue to Payment
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Step 2: Payment Method */}
          {step === 2 && (
            <section className="fade-in">
              <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm">
                <h2 className="font-headline-sm text-headline-sm mb-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
                  Payment Method
                </h2>
                
                {/* Tabs */}
                <div className="flex border-b border-outline-variant mb-md">
                  <button className={`flex-1 py-sm font-label-md border-b-2 ${paymentMethod === 'card' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary transition-colors'}`} onClick={() => setPaymentMethod('card')}>Credit Card</button>
                  <button className={`flex-1 py-sm font-label-md border-b-2 ${paymentMethod === 'paypal' ? 'border-primary text-primary' : 'border-transparent text-secondary hover:text-primary transition-colors'}`} onClick={() => setPaymentMethod('paypal')}>PayPal</button>
                </div>

                {/* Card Form */}
                {paymentMethod === 'card' && (
                  <div className="space-y-md">
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">Cardholder Name</label>
                      <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus uppercase" placeholder="JOHN DOE" type="text"/>
                    </div>
                    <div className="flex flex-col gap-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant">Card Number</label>
                      <div className="relative">
                        <input className="w-full p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus pl-12" placeholder="0000 0000 0000 0000" type="text"/>
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary">credit_card</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-md">
                      <div className="flex flex-col gap-xs">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">Expiry Date</label>
                        <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="MM/YY" type="text"/>
                      </div>
                      <div className="flex flex-col gap-xs">
                        <label className="font-label-sm text-label-sm text-on-surface-variant">CVV</label>
                        <input className="p-sm bg-surface-container-low border border-outline-variant rounded-lg form-input-focus" placeholder="***" type="password"/>
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Form */}
                {paymentMethod === 'paypal' && (
                  <div className="py-xl text-center space-y-md">
                    <div className="bg-blue-50 p-lg rounded-xl border border-blue-100 flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-md">
                        <span className="material-symbols-outlined text-blue-600 text-4xl">account_balance_wallet</span>
                      </div>
                      <p className="font-body-md text-body-md text-blue-900">You will be redirected to PayPal's secure site to complete your payment.</p>
                      <button className="mt-md bg-[#0070ba] text-white px-xl py-sm rounded-full font-bold shadow-sm hover:opacity-90">PayPal Checkout</button>
                    </div>
                  </div>
                )}

                <div className="mt-lg flex justify-between">
                  <button className="text-secondary font-label-md px-xl py-sm rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-xs" onClick={() => nextStep(1)}>
                    <span className="material-symbols-outlined">arrow_back</span> Back
                  </button>
                  <button className="bg-primary text-white font-label-md px-xl py-sm rounded-xl hover:opacity-90 transition-opacity flex items-center gap-xs shadow-md" onClick={() => nextStep(3)}>
                    Review Order
                    <span className="material-symbols-outlined">fact_check</span>
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Step 3: Order Review */}
          {step === 3 && (
            <section className="fade-in">
              <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm space-y-lg">
                <h2 className="font-headline-sm text-headline-sm mb-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>reviews</span>
                  Review Your Order
                </h2>
                
                <div className="space-y-4">
                  <p className="font-body-md">Please review your items and shipping details before placing the order.</p>
                  
                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <h3 className="font-bold mb-2">Shipping to:</h3>
                    <p>John Doe</p>
                    <p>123 Modern Ave</p>
                    <p>Design City, 10101</p>
                  </div>

                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <h3 className="font-bold mb-2">Payment Method:</h3>
                    <p>{paymentMethod === 'card' ? 'Credit Card ending in ****' : 'PayPal'}</p>
                  </div>
                </div>

                <div className="mt-lg flex justify-between">
                  <button className="text-secondary font-label-md px-xl py-sm rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-xs" onClick={() => nextStep(2)}>
                    <span className="material-symbols-outlined">arrow_back</span> Back
                  </button>
                  <button className="bg-primary text-white font-label-md px-xl py-sm rounded-xl hover:opacity-90 transition-opacity flex items-center gap-xs shadow-md">
                    Place Order
                    <span className="material-symbols-outlined">check_circle</span>
                  </button>
                </div>
              </div>
            </section>
          )}

        </div>
        
        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant shadow-sm sticky top-24">
            <h3 className="font-headline-sm text-headline-sm mb-md">Order Summary</h3>
            <div className="flex flex-col gap-sm mb-md">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body-sm">Subtotal</span>
                <span className="font-bold">₹70,400.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body-sm">Shipping</span>
                <span className="font-bold text-primary">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-body-sm">Tax</span>
                <span className="font-bold">₹3,520.00</span>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-sm flex justify-between items-center mb-lg">
              <span className="font-headline-sm text-headline-sm">Total</span>
              <span className="font-headline-sm text-headline-sm text-primary">₹73,920.00</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
