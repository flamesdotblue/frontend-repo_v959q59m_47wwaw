import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const SAMPLE_SERIES = [
  [2,3,4,6,7,6,8,9,12,10,14,15,16,18,15,19],
  [8,7,6,6,8,9,10,12,14,13,12,11,10,12,13,12],
  [3,4,5,5,6,8,7,9,11,12,12,13,15,14,16,17],
  [12,11,10,9,8,10,12,11,10,9,8,9,10,9,8,7],
];

function Sparkline({ points, up }) {
  const w = 120;
  const h = 36;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = (v) => ((v - min) / Math.max(1, (max - min))) * (h - 6) + 3;
  const step = (w - 6) / (points.length - 1);
  const d = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${3 + i * step} ${h - norm(v)}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <path d={d} fill="none" stroke={up ? '#16a34a' : '#dc2626'} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function MarketsGrid() {
  const markets = [
    { sym: 'BTC', name: 'Bitcoin', price: 67123.21, change: 1.24, series: SAMPLE_SERIES[0] },
    { sym: 'ETH', name: 'Ethereum', price: 3456.78, change: -0.42, series: SAMPLE_SERIES[1] },
    { sym: 'AAPL', name: 'Apple', price: 191.23, change: 0.67, series: SAMPLE_SERIES[2] },
    { sym: 'TSLA', name: 'Tesla', price: 241.88, change: -1.31, series: SAMPLE_SERIES[3] },
  ];

  return (
    <section id="markets" className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Trending markets</h2>
          <p className="text-sm text-gray-500">A snapshot of assets moving right now</p>
        </div>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {markets.map((m) => (
          <div key={m.sym} className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900">{m.sym}</div>
                <div className="text-xs text-gray-500">{m.name}</div>
              </div>
              <div className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs ${m.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {m.change >= 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />} {m.change}%
              </div>
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900">${m.price}</div>
            <div className="mt-2">
              <Sparkline points={m.series} up={m.change >= 0} />
            </div>
            <button className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50">Trade</button>
          </div>
        ))}
      </div>
    </section>
  );
}
