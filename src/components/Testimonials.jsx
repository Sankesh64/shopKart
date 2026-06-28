import React from 'react';

export default function Testimonials() {
  const reviews = [
    { id: 1, name: "Sarah J.", role: "Verified Buyer", text: "Absolutely love the quality of the apparel. Will definitely shop here again!", rating: 5 },
    { id: 2, name: "Michael T.", role: "Fashion Enthusiast", text: "Fast shipping and the sneakers fit perfectly. Highly recommended.", rating: 5 },
    { id: 3, name: "Emily R.", role: "Verified Buyer", text: "The handbag I bought is stunning. Customer service was also very helpful.", rating: 4 }
  ];

  return (
    <section className="py-xl bg-surface-container max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop rounded-3xl my-xl">
      <div className="text-center mb-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {reviews.map(review => (
          <div key={review.id} className="bg-surface p-lg rounded-2xl shadow-sm border border-outline-variant">
            <div className="flex gap-1 text-accent-yellow mb-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`material-symbols-outlined text-[18px] ${i < review.rating ? 'fill-current' : 'text-outline-variant'}`}>star</span>
              ))}
            </div>
            <p className="font-body-md text-on-surface-variant mb-md italic">"{review.text}"</p>
            <div>
              <h4 className="font-label-md text-on-surface">{review.name}</h4>
              <span className="font-body-sm text-outline">{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
