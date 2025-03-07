import React from 'react';

interface FindingCardProps {
  icon: React.ReactNode;
  title: string;
  severity: 'critical' | 'warning' | 'success';
  children: React.ReactNode;
}

export const FindingCard: React.FC<FindingCardProps> = ({ icon, title, severity, children }) => {
  const severityStyles = {
    critical: 'border-red-200 bg-red-50',
    warning: 'border-yellow-200 bg-yellow-50',
    success: 'border-secondary bg-secondary-light'
  };

  return (
    <div className={`p-4 rounded-lg border mb-4 ${severityStyles[severity]}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0">{icon}</div>
        <div>
          <h3 className="font-medium text-green-dark mb-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};