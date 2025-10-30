import React, { useEffect, useRef } from 'react';

export default function ChatWindow({ messages, connected }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      {!connected && (
        <div className="mx-auto mb-4 max-w-md rounded-xl border border-dashed border-gray-300 bg-white/60 p-4 text-center text-sm text-gray-600">
          Start or join a session to begin chatting.
        </div>
      )}
      <ul className="mx-auto max-w-3xl space-y-3">
        {messages.map((m) => (
          <li key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={
                'max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ' +
                (m.sender === 'me'
                  ? 'bg-indigo-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-900 border border-gray-200 rounded-bl-sm')
              }
            >
              <p className="whitespace-pre-wrap break-words">{m.text}</p>
              <span className="mt-1 block text-[10px] opacity-70">
                {new Date(m.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </li>
        ))}
        <div ref={endRef} />
      </ul>
    </div>
  );
}
