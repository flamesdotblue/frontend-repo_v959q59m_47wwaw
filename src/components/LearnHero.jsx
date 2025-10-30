import React from 'react';
import Spline from '@splinetool/react-spline';

export default function LearnHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/50 border border-white/40 backdrop-blur text-gray-700">New • Playful learning blocks</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Build skills, one block at a time
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              A modern learning space with interactive courses, hands-on projects, and rewards that keep you motivated.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#courses" className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-[0_8px_30px_rgb(249,115,22,0.35)] hover:shadow-[0_12px_40px_rgb(249,115,22,0.45)] transition-shadow">Explore courses</a>
              <a href="#try" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/50 bg-white/40 hover:bg-white/60 transition-colors">Try a lesson</a>
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-700 max-w-md">
              <li className="rounded-xl bg-white/50 border border-white/40 backdrop-blur p-3">
                <p className="font-semibold text-gray-900">1,200+ lessons</p>
                <p className="text-gray-600">Bite-sized & practical</p>
              </li>
              <li className="rounded-xl bg-white/50 border border-white/40 backdrop-blur p-3">
                <p className="font-semibold text-gray-900">Career paths</p>
                <p className="text-gray-600">Designer → Developer</p>
              </li>
              <li className="rounded-xl bg-white/50 border border-white/40 backdrop-blur p-3">
                <p className="font-semibold text-gray-900">Certificates</p>
                <p className="text-gray-600">Showcase your skills</p>
              </li>
            </ul>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl border border-white/40 bg-white/20 backdrop-blur overflow-hidden shadow-inner">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-200/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 bg-gradient-to-b from-orange-100/60 to-transparent blur-2xl" />
    </section>
  );
}
