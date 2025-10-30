import React from 'react';
import { BookOpen, PlayCircle, Award, User } from 'lucide-react';

export default function LearnHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/50">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 via-amber-400 to-pink-500 shadow-lg shadow-orange-500/30 border border-white/40" />
          <span className="text-xl font-semibold tracking-tight">EduBlocks</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#courses" className="hover:text-gray-900 transition-colors flex items-center gap-2"><BookOpen className="h-4 w-4"/>Courses</a>
          <a href="#learn" className="hover:text-gray-900 transition-colors flex items-center gap-2"><PlayCircle className="h-4 w-4"/>Learn</a>
          <a href="#certs" className="hover:text-gray-900 transition-colors flex items-center gap-2"><Award className="h-4 w-4"/>Certificates</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm rounded-full border border-white/50 bg-white/40 hover:bg-white/60 transition-colors">Log in</button>
          <button className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-[0_8px_30px_rgb(249,115,22,0.35)] hover:shadow-[0_12px_40px_rgb(249,115,22,0.45)] transition-shadow">
            <User className="h-4 w-4"/>Get started
          </button>
        </div>
      </div>
    </header>
  );
}
