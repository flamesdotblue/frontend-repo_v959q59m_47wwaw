import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import MarketsGrid from './components/MarketsGrid';
import TradingPanel from './components/TradingPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white text-gray-900">
      <Header />
      <Hero />
      <StatsTicker />
      <MarketsGrid />
      <TradingPanel />
      <footer className="mx-auto max-w-7xl px-4 py-10 text-center text-xs text-gray-500">
        AstraTrade is a demo trading experience with a cozy, retro 3D hero scene and glassy UI accents.
      </footer>
    </div>
  );
}
