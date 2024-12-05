import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import type { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
          <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
            {course.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <BookOpen className="h-4 w-4" />
            <span>{course.modules.length} Modules</span>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
            Start Learning →
          </button>
        </div>
      </div>
    </div>
  );
}