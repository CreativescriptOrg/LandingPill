import React from 'react';

export const ImageSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="w-full h-48 sm:h-64 bg-gray-200 rounded-lg"></div>
    </div>
  );
};