import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full animate-bounce-short">
      <div className="bg-[#161b22] border-2 border-amber-500 rounded-xl p-4 shadow-2xl shadow-black/80 flex items-start space-x-3">
        <div className="p-1 rounded bg-amber-500/20 text-amber-500 flex-shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h5 className="text-sm font-bold text-white mb-0.5">Confirmation</h5>
          <p className="text-xs text-slate-300 leading-snug">{message}</p>
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss toast"
          className="text-slate-400 hover:text-white p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
