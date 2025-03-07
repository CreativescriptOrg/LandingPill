import React from 'react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24">
        {/* Pill shape */}
        <div className="absolute w-12 h-24 bg-primary rounded-full animate-spin origin-center">
          {/* Inner white circle to create pill shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>
      <p className="mt-8 text-xl text-primary font-medium animate-pulse">
        Diagnosing your landing page...
      </p>
    </div>
  );
};