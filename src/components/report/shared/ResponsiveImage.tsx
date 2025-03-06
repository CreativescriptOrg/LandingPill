import React, { useState } from 'react';
import { ImageSkeleton } from './ImageSkeleton';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full">
      {isLoading && <ImageSkeleton />}
      {!error ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto object-cover rounded-lg ${isLoading ? 'hidden' : ''} ${className}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
        />
      ) : (
        <div className="w-full h-48 sm:h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
};