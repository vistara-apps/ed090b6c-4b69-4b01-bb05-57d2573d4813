'use client';

import { Gift, Zap } from 'lucide-react';
import { useState } from 'react';

export function DailyReward() {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    // Here you would trigger the gasless transaction
  };

  return (
    <div className="bg-gradient-to-br from-success/20 to-primary/10 rounded-lg p-6 border border-success/20">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-success/20 rounded-lg flex items-center justify-center">
            <Gift className="w-8 h-8 text-success" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Daily Reward</h3>
            <p className="text-text-secondary text-sm mb-2">
              {claimed ? 'Come back tomorrow!' : 'Claim your free reward'}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-4 h-4 text-warning" />
              <span className="font-semibold text-warning">+50 XP</span>
              <span className="text-text-secondary">• Gasless transaction</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleClaim}
          disabled={claimed}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            claimed
              ? 'bg-surface text-text-secondary cursor-not-allowed'
              : 'bg-success text-white hover:bg-success/90 shadow-button'
          }`}
        >
          {claimed ? 'Claimed!' : 'Claim Now'}
        </button>
      </div>
    </div>
  );
}
