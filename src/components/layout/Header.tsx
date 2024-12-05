import React from 'react';
import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold text-gray-900">MedDevice Training</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="/courses" className="text-gray-600 hover:text-gray-900">Courses</a>
          <a href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}