'use client';

import { Trophy, TrendingUp, Medal } from 'lucide-react';
import { useState } from 'react';

type LeaderboardType = 'players' | 'guilds';

export function Leaderboard() {
  const [activeType, setActiveType] = useState<LeaderboardType>('players');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <div className="flex gap-2 bg-surface rounded-lg p-1">
          <button
            onClick={() => setActiveType('players')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeType === 'players'
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-fg'
            }`}
          >
            Players
          </button>
          <button
            onClick={() => setActiveType('guilds')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
              activeType === 'guilds'
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:text-fg'
            }`}
          >
            Guilds
          </button>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <PodiumCard rank={2} name="Player2" score={1180} />
        <PodiumCard rank={1} name="TopPlayer" score={1450} />
        <PodiumCard rank={3} name="Player3" score={1050} />
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {activeType === 'players' ? (
          <>
            <LeaderboardItem
              rank={4}
              name="Player4"
              score={980}
              trend="up"
              avatar="🎮"
            />
            <LeaderboardItem
              rank={5}
              name="Player5"
              score={920}
              trend="same"
              avatar="🎯"
            />
            <LeaderboardItem
              rank={6}
              name="Player6"
              score={890}
              trend="down"
              avatar="⚡"
            />
            <LeaderboardItem
              rank={7}
              name="Player7"
              score={850}
              trend="up"
              avatar="🔥"
            />
          </>
        ) : (
          <>
            <LeaderboardItem
              rank={4}
              name="Guild Warriors"
              score={2450}
              trend="up"
              avatar="⚔️"
            />
            <LeaderboardItem
              rank={5}
              name="Elite Squad"
              score={2320}
              trend="same"
              avatar="🛡️"
            />
            <LeaderboardItem
              rank={6}
              name="Champions"
              score={2180}
              trend="down"
              avatar="👑"
            />
            <LeaderboardItem
              rank={7}
              name="Legends"
              score={2050}
              trend="up"
              avatar="⭐"
            />
          </>
        )}
      </div>

      {/* Your Rank */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg p-5 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center text-xl">
              🎮
            </div>
            <div>
              <h4 className="font-bold mb-1">Your Rank</h4>
              <p className="text-text-secondary text-sm">Keep playing to climb!</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">#42</div>
            <div className="text-success text-sm font-semibold flex items-center justify-end gap-1">
              <TrendingUp className="w-4 h-4" />
              +5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PodiumCard({ rank, name, score }: {
  rank: number;
  name: string;
  score: number;
}) {
  const heights = {
    1: 'h-32',
    2: 'h-24',
    3: 'h-20',
  };

  const colors = {
    1: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30',
    2: 'from-gray-400/20 to-gray-500/10 border-gray-400/30',
    3: 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
  };

  const medals = {
    1: '🥇',
    2: '🥈',
    3: '🥉',
  };

  return (
    <div className={`${rank === 1 ? 'order-2' : rank === 2 ? 'order-1' : 'order-3'}`}>
      <div className={`bg-gradient-to-br ${colors[rank as keyof typeof colors]} rounded-lg p-4 border ${heights[rank as keyof typeof heights]} flex flex-col items-center justify-end`}>
        <div className="text-4xl mb-2">{medals[rank as keyof typeof medals]}</div>
        <div className="text-center">
          <div className="font-bold mb-1">{name}</div>
          <div className="text-primary text-sm font-semibold">{score} pts</div>
        </div>
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, name, score, trend, avatar }: {
  rank: number;
  name: string;
  score: number;
  trend: 'up' | 'down' | 'same';
  avatar: string;
}) {
  const trendIcons = {
    up: <TrendingUp className="w-4 h-4 text-success" />,
    down: <TrendingUp className="w-4 h-4 text-error rotate-180" />,
    same: <div className="w-4 h-4" />,
  };

  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10 flex items-center gap-4">
      <div className="w-8 text-center font-bold text-text-secondary">
        #{rank}
      </div>
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-xl">
        {avatar}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-text-secondary text-sm">{score} points</p>
      </div>
      {trendIcons[trend]}
    </div>
  );
}
