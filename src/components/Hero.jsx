import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-14">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" /> Live markets, 24/7
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Trade in style with glassmorphic precision
          </h1>
          <p className="mt-3 max-w-prose text-base text-gray-600">
            A next‑gen platform for modern traders. Beautiful visuals, lightning performance, and intuitive tools designed for the way you invest today.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#trade" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500">
              Start Trading <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#learn" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50">
              View Markets
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
            <Metric value="$0" label="Commission" />
            <Metric value="250ms" label="Avg. execution" />
            <Metric value="99.99%" label="Uptime" />
          </div>
        </div>
        <div className="relative h-[360px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/40 bg-white/20 shadow-2xl backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/80 p-3 shadow-sm backdrop-blur">
      <div className="text-lg font-semibold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
