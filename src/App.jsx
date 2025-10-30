import React from 'react';
import LearnHeader from './components/LearnHeader';
import LearnHero from './components/LearnHero';
import CourseCategories from './components/CourseCategories';
import FeaturesStrip from './components/FeaturesStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white text-gray-900">
      <LearnHeader />
      <LearnHero />
      <FeaturesStrip />
      <CourseCategories />
      <footer className="mx-auto max-w-7xl px-4 py-12 text-center text-xs text-gray-500">
        EduBlocks — a playful learning experience with glassmorphic UI and an interactive 3D hero.
      </footer>
    </div>
  );
}
