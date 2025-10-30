import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ConnectPanel from './components/ConnectPanel';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';

function createPeerConnection() {
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  return pc;
}

export default function App() {
  const pcRef = useRef(null);
  const dcRef = useRef(null);

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [localSDP, setLocalSDP] = useState('');
  const [remoteSDP, setRemoteSDP] = useState('');
  const [role, setRole] = useState('idle'); // 'idle' | 'offerer' | 'answerer' | 'answer-created'

  useEffect(() => {
    const pc = createPeerConnection();
    pcRef.current = pc;

    pc.onconnectionstatechange = () => {
      const state = pc.connectionState;
      if (state === 'connected') setConnected(true);
      if (state === 'disconnected' || state === 'failed' || state === 'closed') setConnected(false);
    };

    pc.ondatachannel = (event) => {
      const channel = event.channel;
      setupDataChannel(channel);
    };

    return () => {
      try { pc.close(); } catch (_) {}
      pcRef.current = null;
      dcRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setupDataChannel = (channel) => {
    dcRef.current = channel;
    channel.onopen = () => setConnected(true);
    channel.onclose = () => setConnected(false);
    channel.onmessage = (event) => {
      const text = String(event.data);
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text, sender: 'peer', timestamp: Date.now() },
      ]);
    };
  };

  const onCreateOffer = async () => {
    setRole('offerer');
    const pc = pcRef.current ?? createPeerConnection();
    pcRef.current = pc;

    const channel = pc.createDataChannel('chat');
    setupDataChannel(channel);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    // Wait for ICE gathering to complete to produce a full SDP
    await waitForIceGathering(pc);

    setLocalSDP(JSON.stringify(pc.localDescription));
  };

  const onCreateAnswer = async () => {
    if (!remoteSDP) return;
    try {
      const pc = pcRef.current ?? createPeerConnection();
      pcRef.current = pc;

      const offerDesc = JSON.parse(remoteSDP);
      await pc.setRemoteDescription(offerDesc);

      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      await waitForIceGathering(pc);

      setLocalSDP(JSON.stringify(pc.localDescription));
      setRole('answer-created');
    } catch (e) {
      console.error(e);
      alert('Invalid offer pasted. Make sure you pasted the full text.');
    }
  };

  const onAcceptAnswer = async () => {
    if (!remoteSDP) return;
    try {
      const pc = pcRef.current;
      const answerDesc = JSON.parse(remoteSDP);
      await pc.setRemoteDescription(answerDesc);
    } catch (e) {
      console.error(e);
      alert('Invalid answer pasted. Make sure you pasted the full text.');
    }
  };

  const onSend = (text) => {
    const dc = dcRef.current;
    if (!dc || dc.readyState !== 'open') return;
    dc.send(text);
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, sender: 'me', timestamp: Date.now() },
    ]);
  };

  return (
    <div className="flex h-screen flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-0 pb-2 sm:px-4">
        <ConnectPanel
          connected={connected}
          localSDP={localSDP}
          remoteSDP={remoteSDP}
          onChangeRemoteSDP={setRemoteSDP}
          onCreateOffer={onCreateOffer}
          onCreateAnswer={onCreateAnswer}
          onAcceptAnswer={onAcceptAnswer}
          role={role}
        />

        <div className="mx-auto flex h-[55vh] w-full max-w-5xl flex-col rounded-2xl border border-gray-200 bg-gray-50/60 shadow-sm">
          <ChatWindow messages={messages} connected={connected} />
          <MessageInput onSend={onSend} disabled={!connected} />
        </div>
      </div>

      <footer className="mx-auto w-full max-w-5xl px-4 py-3 text-center text-xs text-gray-500">
        Note: Browsers do not support classic Bluetooth chat. This app uses secure peer-to-peer WebRTC with manual code sharing for signaling.
      </footer>
    </div>
  );
}

async function waitForIceGathering(pc) {
  if (pc.iceGatheringState === 'complete') return;
  await new Promise((resolve) => {
    const check = () => {
      if (pc.iceGatheringState === 'complete') {
        pc.removeEventListener('icegatheringstatechange', check);
        resolve();
      }
    };
    pc.addEventListener('icegatheringstatechange', check);
    // Fallback in case event doesn’t fire
    setTimeout(resolve, 1500);
  });
}
