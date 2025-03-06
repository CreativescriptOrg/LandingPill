import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionSectionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-light rounded-lg mb-4 bg-white">
      <button
        className={`w-full px-4 py-4 flex justify-between items-center hover:bg-purple-lighter transition-colors duration-200 rounded-lg ${
          isOpen ? 'rounded-b-none' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base font-medium text-green-dark">{title}</h3>
        <ChevronDown 
          className={`transform transition-transform duration-200 text-primary ${
            isOpen ? 'rotate-180' : ''
          }`} 
          size={18}
        />
      </button>
      {isOpen && (
        <div className="p-4 border-t border-purple-light">
          {children}
        </div>
      )}
    </div>
  );
};