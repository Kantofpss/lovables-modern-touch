
import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { StatsCard } from '@/components/StatsCard';
import { DataTable } from '@/components/DataTable';
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const statsData = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+12%',
      icon: Users,
      trend: 'up' as const
    },
    {
      title: 'Total Orders',
      value: '8,421',
      change: '+8%',
      icon: ShoppingCart,
      trend: 'up' as const
    },
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+23%',
      icon: DollarSign,
      trend: 'up' as const
    },
    {
      title: 'Growth Rate',
      value: '18.2%',
      change: '-2%',
      icon: TrendingUp,
      trend: 'down' as const
    }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Smith', amount: '$299.99', status: 'Completed', date: '2024-01-15' },
    { id: '#ORD-002', customer: 'Sarah Johnson', amount: '$159.50', status: 'Processing', date: '2024-01-15' },
    { id: '#ORD-003', customer: 'Mike Davis', amount: '$89.99', status: 'Pending', date: '2024-01-14' },
    { id: '#ORD-004', customer: 'Emily Brown', amount: '$445.00', status: 'Completed', date: '2024-01-14' },
    { id: '#ORD-005', customer: 'Alex Wilson', amount: '$199.99', status: 'Processing', date: '2024-01-13' }
  ];

  const orderColumns = [
    { key: 'id', header: 'Order ID' },
    { key: 'customer', header: 'Customer' },
    { key: 'amount', header: 'Amount' },
    { 
      key: 'status', 
      header: 'Status',
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Completed' ? 'bg-success/10 text-success' :
          status === 'Processing' ? 'bg-primary/10 text-primary' :
          'bg-warning/10 text-warning'
        }`}>
          {status}
        </span>
      )
    },
    { key: 'date', header: 'Date' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-foreground-secondary mt-1">Welcome back! Here's what's happening with your business.</p>
          </div>
          
          <div className="flex gap-3">
            <button className="btn-secondary">
              <Activity className="w-4 h-4 mr-2" />
              Generate Report
            </button>
            <button className="btn-primary">
              View Analytics
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2">
            <DataTable 
              title="Recent Orders"
              columns={orderColumns}
              data={recentOrders}
            />
          </div>

          {/* Quick Actions */}
          <div className="admin-card">
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-primary text-left justify-start">
                <Users className="w-4 h-4 mr-3" />
                Add New User
              </button>
              <button className="w-full btn-secondary text-left justify-start">
                <ShoppingCart className="w-4 h-4 mr-3" />
                Create Order
              </button>
              <button className="w-full btn-secondary text-left justify-start">
                <TrendingUp className="w-4 h-4 mr-3" />
                View Reports
              </button>
              <button className="w-full btn-secondary text-left justify-start">
                <Activity className="w-4 h-4 mr-3" />
                System Status
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="admin-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Health</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary">Server Status</span>
                <span className="text-success font-medium">Online</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary">Database</span>
                <span className="text-success font-medium">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground-secondary">API Response</span>
                <span className="text-success font-medium">142ms</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground-secondary">New user registered</span>
                <span className="text-foreground-muted text-xs ml-auto">2m ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground-secondary">Order completed</span>
                <span className="text-foreground-muted text-xs ml-auto">5m ago</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-foreground-secondary">System update</span>
                <span className="text-foreground-muted text-xs ml-auto">1h ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
