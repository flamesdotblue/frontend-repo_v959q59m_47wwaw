import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import MarketsGrid from './components/MarketsGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white text-gray-900">
      <Header />
      <Hero />
      <StatsTicker />
      <MarketsGrid />
      <footer className="mx-auto max-w-7xl px-4 py-10 text-center text-xs text-gray-500">
        AstraTrade is a demo trading experience featuring a modern, glassmorphic 3D hero and sleek fintech UI.
      </footer>
    </div>
  );
}
