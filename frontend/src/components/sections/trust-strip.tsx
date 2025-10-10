import React from 'react';

const logos = [
  { name: 'Amazon', className: 'text-yellow-500' },
  { name: 'Microsoft', className: 'text-blue-600' },
  { name: 'Google', className: 'text-red-500' },
  { name: 'Flipkart', className: 'text-blue-500' },
  { name: 'High-Growth Startups', className: 'text-green-500' },
];

export const TrustStrip = () => {
  return (
    <div className="bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6">
          Our alumni are leading product at top companies and high-growth startups
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div key={logo.name} className="col-span-1 flex justify-center">
              <span className={`text-2xl font-bold text-muted-foreground/60 ${logo.className}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
