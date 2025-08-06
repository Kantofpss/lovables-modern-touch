
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend = 'neutral' 
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      default: return 'text-foreground-muted';
    }
  };

  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-accent rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {change && (
          <span className={`text-sm font-medium ${getTrendColor()}`}>
            {change}
          </span>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-foreground-secondary text-sm">{title}</p>
      </div>
    </div>
  );
};
