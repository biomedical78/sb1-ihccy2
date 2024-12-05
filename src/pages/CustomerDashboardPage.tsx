import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { CourseProgress } from '../components/customer/CourseProgress';
import { CourseLibrary } from '../components/customer/CourseLibrary';
import { ResourcesPanel } from '../components/customer/ResourcesPanel';
import { categories } from '../data/categories';

export function CustomerDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader 
          title="My Learning Portal"
          description="Access your comprehensive medical device training materials"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseProgress />
            <CourseLibrary categories={categories} />
          </div>
          <div className="lg:col-span-1">
            <ResourcesPanel />
          </div>
        </div>
      </div>
    </div>
  );
}