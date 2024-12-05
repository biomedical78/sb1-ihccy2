import React from 'react';
import { GraduationCap, PlayCircle } from 'lucide-react';

interface LearningProgressProps {
  courseName: string;
  progress: number;
  lastLesson: string;
  timeRemaining: string;
}

export function LearningProgress({ 
  courseName, 
  progress, 
  lastLesson, 
  timeRemaining 
}: LearningProgressProps) {
  return (
    <div className="mb-12 p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <GraduationCap className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Continue Learning</h2>
            <p className="text-blue-100">{courseName}</p>
            <p className="text-sm text-blue-200 mt-1">Last lesson: {lastLesson}</p>
          </div>
        </div>
        <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg">
          <PlayCircle className="h-5 w-5" />
          <span>Resume</span>
        </button>
      </div>
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>{progress}% Complete</span>
          <span>{timeRemaining} remaining</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}