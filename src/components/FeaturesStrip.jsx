import React from 'react';
import { Rocket, Shield, Users, Award } from 'lucide-react';

const items = [
  { icon: Rocket, title: 'Project-first', desc: 'Learn by building real things' },
  { icon: Shield, title: 'Safe & private', desc: 'Your progress is protected' },
  { icon: Users, title: 'Community', desc: 'Peer reviews and help' },
  { icon: Award, title: 'Certificates', desc: 'Shareable achievements' },
];

export default function FeaturesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl bg-white/50 border border-white/40 backdrop-blur p-5 flex gap-3 items-start">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-md shadow-orange-500/30 shrink-0">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{title}</p>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
