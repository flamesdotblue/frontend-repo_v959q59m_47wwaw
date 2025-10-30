import React from 'react';
import { MessageSquare, Wifi } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 py-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-indigo-600/90 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
          <MessageSquare className="h-6 w-6" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">Nebula Chat</h1>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Wifi className="h-3.5 w-3.5" /> Peer-to-peer, real‑time messaging
          </p>
        </div>
      </div>
    </header>
  );
}
