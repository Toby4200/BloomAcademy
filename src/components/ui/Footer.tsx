import React from 'react';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] object-cover"
              alt="Bloom academy logo"
              src="/bloom-academy-logo-2.png"
            />
            <span className="text-lg font-semibold">Bloom Academy</span>
          </div>
          <div className="text-gray-400">
            © {currentYear} Bloom Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
