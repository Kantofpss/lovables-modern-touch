
import React from 'react';
import { Search, Bell, Settings, User, Menu } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const AdminHeader: React.FC = () => {
  return (
    <header className="h-16 border-b border-border bg-background-tertiary px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-foreground-secondary hover:text-foreground" />
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted w-4 h-4" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-80 bg-background border-border-secondary focus:border-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="text-foreground-secondary hover:text-foreground hover:bg-accent">
          <Bell className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-foreground-secondary hover:text-foreground hover:bg-accent">
          <Settings className="w-5 h-5" />
        </Button>
        
        <div className="flex items-center gap-3 pl-3 border-l border-border-secondary">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Admin</p>
            <p className="text-xs text-foreground-secondary">Administrator</p>
          </div>
          
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};
