import React from 'react';
import { AdminHeader } from '../components/admin/AdminHeader';
import { CourseManager } from '../components/admin/CourseManager';
import { FileUploader } from '../components/admin/FileUploader';

export function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseManager />
          </div>
          <div className="lg:col-span-1">
            <FileUploader />
          </div>
        </div>
      </div>
    </div>
  );
}