import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, TrendingUp } from 'lucide-react';

function randBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function StatsTicker() {
  const [items, setItems] = useState(() => (
    [
      { sym: 'BTC', name: 'Bitcoin', price: 67123.21, change: 1.24 },
      { sym: 'ETH', name: 'Ethereum', price: 3456.78, change: -0.42 },
      { sym: 'AAPL', name: 'Apple', price: 191.23, change: 0.67 },
      { sym: 'TSLA', name: 'Tesla', price: 241.88, change: -1.31 },
      { sym: 'NVDA', name: 'NVIDIA', price: 903.55, change: 2.11 },
      { sym: 'EURUSD', name: 'EUR/USD', price: 1.085, change: 0.21 },
    ]
  ));

  // Light price jitter for liveliness
  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => prev.map((i) => {
        const drift = randBetween(-0.2, 0.2);
        const newPrice = Math.max(0.0001, i.price + drift);
        const newChange = i.change + randBetween(-0.05, 0.05);
        return { ...i, price: Number(newPrice.toFixed(3)), change: Number(newChange.toFixed(2)) };
      }));
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const doubled = useMemo(() => [...items, ...items], [items]);
  const trackRef = useRef(null);

  return (
    <section aria-label="Live market ticker" className="relative border-y border-gray-200 bg-white/70 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]" />
      <div className="mx-auto max-w-none overflow-hidden">
        <div
          ref={trackRef}
          className="flex animate-[marquee_30s_linear_infinite] gap-3 px-4 py-3 will-change-transform"
          style={{ '--gap': '0.75rem' }}
        >
          {doubled.map((i, idx) => (
            <TickerItem key={`${i.sym}-${idx}`} item={i} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%);} }
      `}</style>
    </section>
  );
}

function TickerItem({ item }) {
  const up = item.change >= 0;
  return (
    <div className="flex min-w-[220px] items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div>
          <div className="font-medium text-gray-900">{item.sym} <span className="text-xs text-gray-500">{item.name}</span></div>
          <div className="text-xs text-gray-500">${item.price}</div>
        </div>
      </div>
      <div className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs ${up ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />} {item.change}%
      </div>
    </div>
  );
}
