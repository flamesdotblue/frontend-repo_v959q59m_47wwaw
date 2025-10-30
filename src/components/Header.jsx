import React from 'react';
import { LineChart, Bell, User, Wallet } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
              <LineChart className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold tracking-tight text-gray-900">AstraTrade</p>
              <p className="text-xs text-gray-500">Modern trading for everyone</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <a href="#markets" className="hover:text-gray-900">Markets</a>
            <a href="#portfolio" className="hover:text-gray-900">Portfolio</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#learn" className="hover:text-gray-900">Learn</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50">
              <Bell className="mr-2 h-4 w-4" /> Alerts
            </button>
            <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">
              <Wallet className="mr-2 h-4 w-4" /> Deposit
            </button>
            <button className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
