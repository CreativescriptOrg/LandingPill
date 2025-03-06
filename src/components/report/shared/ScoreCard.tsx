import React from 'react';
import { Star } from 'lucide-react';

interface ScoreCardProps {
  category: string;
  score: string;
  stars: number;
}

export const ScoreCard: React.FC<ScoreCardProps> = ({ category, score, stars }) => (
  <div className="flex justify-between items-center border-b border-purple-light py-3">
    <span className="text-green-dark text-sm">{category}</span>
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-primary">{score}</span>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < stars ? "fill-secondary text-secondary" : "text-purple-light"} 
          />
        ))}
      </div>
    </div>
  </div>
);