'use client';

import { Trophy, Zap, Users, Award, Settings2 } from 'lucide-react';

export function PlayerProfile() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center text-3xl font-bold">
            🎮
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold">Player123</h2>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
                Level 12
              </span>
            </div>
            <p className="text-text-secondary mb-2">@player123.base.eth</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-warning" />
                Rank #42
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-primary" />
                1,250 XP
              </span>
            </div>
          </div>
          <button className="p-2 hover:bg-surface rounded-lg transition-colors">
            <Settings2 className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Level Progress</span>
            <span className="font-semibold">750 / 1000 XP</span>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent w-3/4 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard icon={<Trophy />} label="Total Wins" value="47" />
        <StatCard icon={<Gamepad2 />} label="Games Played" value="89" />
        <StatCard icon={<Users />} label="Guild Rank" value="#3" />
        <StatCard icon={<Award />} label="Achievements" value="23" />
      </div>

      {/* Achievements */}
      <section>
        <h3 className="text-xl font-bold mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          <AchievementBadge
            emoji="🏆"
            title="First Win"
            unlocked={true}
          />
          <AchievementBadge
            emoji="⚡"
            title="Speed Demon"
            unlocked={true}
          />
          <AchievementBadge
            emoji="👥"
            title="Team Player"
            unlocked={true}
          />
          <AchievementBadge
            emoji="🎯"
            title="Sharpshooter"
            unlocked={false}
          />
          <AchievementBadge
            emoji="💎"
            title="Legendary"
            unlocked={false}
          />
          <AchievementBadge
            emoji="🔥"
            title="Hot Streak"
            unlocked={false}
          />
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem
            type="win"
            title="Won Speed Challenge"
            time="2 hours ago"
            reward="+50 XP"
          />
          <ActivityItem
            type="achievement"
            title="Unlocked Team Player"
            time="1 day ago"
            reward="Achievement"
          />
          <ActivityItem
            type="guild"
            title="Joined Guild Warriors"
            time="3 days ago"
            reward="Guild"
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value }: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10">
      <div className="text-primary mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
}

function AchievementBadge({ emoji, title, unlocked }: {
  emoji: string;
  title: string;
  unlocked: boolean;
}) {
  return (
    <div
      className={`aspect-square rounded-lg p-3 flex flex-col items-center justify-center text-center border ${
        unlocked
          ? 'bg-primary/10 border-primary/30'
          : 'bg-surface/50 border-primary/10 opacity-50'
      }`}
    >
      <div className="text-3xl mb-2">{emoji}</div>
      <div className="text-xs font-medium">{title}</div>
    </div>
  );
}

function ActivityItem({ type, title, time, reward }: {
  type: 'win' | 'achievement' | 'guild';
  title: string;
  time: string;
  reward: string;
}) {
  const icons = {
    win: <Trophy className="w-5 h-5 text-warning" />,
    achievement: <Award className="w-5 h-5 text-primary" />,
    guild: <Users className="w-5 h-5 text-success" />,
  };

  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10 flex items-center gap-3">
      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
        {icons[type]}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate">{title}</h4>
        <p className="text-text-secondary text-sm">{time}</p>
      </div>
      <span className="text-primary text-sm font-semibold">{reward}</span>
    </div>
  );
}

function Gamepad2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
