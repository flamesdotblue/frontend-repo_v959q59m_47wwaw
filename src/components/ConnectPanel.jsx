import React, { useState } from 'react';
import { Link2, Copy, Check } from 'lucide-react';

export default function ConnectPanel({
  connected,
  localSDP,
  remoteSDP,
  onChangeRemoteSDP,
  onCreateOffer,
  onCreateAnswer,
  onAcceptAnswer,
  role,
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!localSDP) return;
    try {
      await navigator.clipboard.writeText(localSDP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow">
                <Link2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Connection</p>
                <p className="text-xs text-gray-500">Establish a peer-to-peer session</p>
              </div>
            </div>
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                connected ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {connected ? 'Connected' : 'Not connected'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Start a session</p>
              <button
                onClick={onCreateOffer}
                disabled={connected}
                className="w-full rounded-xl bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 disabled:opacity-50"
              >
                Create offer
              </button>
              <textarea
                value={localSDP}
                readOnly
                placeholder="Offer/answer will appear here. Share it with your partner."
                className="h-28 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-2 text-xs text-gray-800"
              />
              <button
                onClick={copyToClipboard}
                disabled={!localSDP}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-50"
              >
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />} 
                {copied ? 'Copied' : 'Copy' }
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Join or respond</p>
              <textarea
                value={remoteSDP}
                onChange={(e) => onChangeRemoteSDP(e.target.value)}
                placeholder="Paste partner's offer/answer here"
                className="h-28 w-full resize-none rounded-xl border border-gray-200 bg-white p-2 text-xs text-gray-800"
              />
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onCreateAnswer}
                  disabled={connected || !remoteSDP || role === 'answer-created'}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-50"
                >
                  Create answer
                </button>
                <button
                  onClick={onAcceptAnswer}
                  disabled={connected || !remoteSDP}
                  className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-50"
                >
                  Accept answer
                </button>
              </div>
              <p className="text-[11px] text-gray-500">
                Tip: One person clicks "Create offer" and shares it. The other pastes it and clicks "Create answer", then shares the answer back. Finally, the first person pastes the answer and clicks "Accept answer".
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
