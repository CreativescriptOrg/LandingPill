import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-white border-t shadow-lg">
      <div className="max-w-6xl mx-auto p-6 sm:p-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-gray-600">Don't have enough time to redesign your landing page?</p>
          <button 
            onClick={() => window.open('https://cal.com/landingpill/15min', '_blank')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get it designed from experts
          </button>
          
          <div className="pt-6 border-t w-full mt-2">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-500">
              <p>© {currentYear} All rights reserved to <a href="https://landingpill.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">landingpill.com</a></p>
              <p className="hidden sm:block">•</p>
              <p>Built by Landingpill</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};