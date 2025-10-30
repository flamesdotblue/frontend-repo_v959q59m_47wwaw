import React, { useMemo, useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function TradingPanel() {
  const [side, setSide] = useState('buy');
  const [price, setPrice] = useState(3456.78);
  const [qty, setQty] = useState(0.5);
  const total = useMemo(() => Number((price * qty).toFixed(2)), [price, qty]);

  return (
    <section id="trade" className="mx-auto max-w-7xl px-4 pb-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Quick trade</h3>
            <div className="inline-flex overflow-hidden rounded-xl border border-gray-200">
              <button onClick={() => setSide('buy')} className={`px-3 py-1.5 text-sm ${side === 'buy' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}>Buy</button>
              <button onClick={() => setSide('sell')} className={`px-3 py-1.5 text-sm ${side === 'sell' ? 'bg-red-600 text-white' : 'bg-white text-gray-700'}`}>Sell</button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="text-xs text-gray-500">Market</label>
              <div className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900">ETH/USD</div>
            </div>
            <div>
              <label className="text-xs text-gray-500">Price</label>
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-gray-500">Quantity</label>
              <input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Info label="Order type" value="Market" />
            <Info label="Fees" value="$0.00" />
            <Info label="Estimated total" value={`$${total}`} />
          </div>

          <button className={`mt-5 w-full rounded-xl px-4 py-3 text-sm font-medium text-white shadow-sm transition ${side === 'buy' ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'}`}>
            {side === 'buy' ? 'Buy ETH' : 'Sell ETH'}
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Order book</h3>
          <OrderBook />
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 text-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}

function Row({ price, qty, side }) {
  const isBuy = side === 'buy';
  return (
    <div className="grid grid-cols-3 items-center gap-2 text-xs">
      <div className={isBuy ? 'text-green-600' : 'text-red-600'}>${price}</div>
      <div className="text-gray-700">{qty}</div>
      <div className="text-gray-400">{(price * qty).toFixed(2)}</div>
    </div>
  );
}

function OrderBook() {
  const bids = [
    { price: 3456.20, qty: 0.7 },
    { price: 3456.10, qty: 0.9 },
    { price: 3456.00, qty: 1.2 },
    { price: 3455.80, qty: 0.5 },
  ];
  const asks = [
    { price: 3456.90, qty: 0.4 },
    { price: 3457.10, qty: 0.6 },
    { price: 3457.30, qty: 0.8 },
    { price: 3457.60, qty: 1.1 },
  ];

  return (
    <div className="mt-3 grid grid-cols-1 gap-4">
      <div>
        <div className="mb-2 text-xs font-medium text-gray-900">Bids</div>
        <div className="space-y-1">
          {bids.map((b, i) => (
            <Row key={`b-${i}`} price={b.price} qty={b.qty} side="buy" />
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs font-medium text-gray-900">Asks</div>
        <div className="space-y-1">
          {asks.map((a, i) => (
            <Row key={`a-${i}`} price={a.price} qty={a.qty} side="sell" />
          ))}
        </div>
      </div>
      <div className="mt-2 rounded-xl bg-gray-50 p-3 text-xs text-gray-600">
        <div className="flex items-center justify-between">
          <span>Spread</span>
          <span>0.80</span>
        </div>
      </div>
    </div>
  );
}
