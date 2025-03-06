import React from 'react';

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-light to-purple-lighter p-4 sm:p-6 shadow-sm sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a 
            href="https://landingpill.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <img 
              src="https://creativescript.s3.us-east-1.amazonaws.com/lp_dp.png" 
              alt="Landingpill Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            />
          </a>
          <div>
            <h1 className="text-lg sm:text-h2 font-bold text-primary">Landingpill Audit Report – Crossroads Global</h1>
            <p className="text-sm sm:text-body text-gray-600">Prepared by Team Landingpill • 3rd Feb 2025</p>
          </div>
        </div>
        
        <div className="hidden sm:flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600 whitespace-nowrap">Don't have enough time?</p>
          <button 
            onClick={() => window.open('https://cal.com/landingpill/15min', '_blank')}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
          >
            Get it designed from experts
          </button>
        </div>
      </div>
    </header>
  );
};