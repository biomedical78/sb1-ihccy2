import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { DashboardPage } from './pages/DashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { CustomerDashboardPage } from './pages/CustomerDashboardPage';

function App() {
  // Temporary role check - replace with proper auth
  const [userRole, setUserRole] = useState<'admin' | 'customer' | 'guest'>('customer');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header userRole={userRole} />
      {userRole === 'admin' ? (
        <AdminDashboardPage />
      ) : userRole === 'customer' ? (
        <CustomerDashboardPage />
      ) : (
        <DashboardPage />
      )}
    </div>
  );
}

export default App;