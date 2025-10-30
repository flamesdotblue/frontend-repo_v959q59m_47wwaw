import React from 'react';
import { Code, Palette, LineChart, Brain, Camera, Globe } from 'lucide-react';

const categories = [
  { icon: Code, title: 'Web Dev', desc: 'HTML, CSS, JS, React' },
  { icon: Palette, title: 'Design', desc: 'UI, UX, Figma' },
  { icon: LineChart, title: 'Data', desc: 'Python, SQL, Analytics' },
  { icon: Brain, title: 'AI', desc: 'ML, LLMs, Prompting' },
  { icon: Camera, title: 'Creative', desc: '3D, Motion, Video' },
  { icon: Globe, title: 'No-Code', desc: 'Automation, Tools' },
];

export default function CourseCategories() {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Choose your path</h2>
          <p className="text-gray-600 mt-2">Curated categories to start learning fast.</p>
        </div>
        <a href="#all" className="hidden sm:inline-flex px-4 py-2 rounded-full border border-white/50 bg-white/40 hover:bg-white/60 transition-colors">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl bg-white/50 border border-white/40 backdrop-blur p-6 hover:bg-white/70 transition-colors">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-md shadow-orange-500/30">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{desc}</p>
            <button className="mt-4 inline-flex text-sm font-medium text-orange-600 hover:text-orange-700">Explore →</button>
          </div>
        ))}
      </div>
    </section>
  );
}
