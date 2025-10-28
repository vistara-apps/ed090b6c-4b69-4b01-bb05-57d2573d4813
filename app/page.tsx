'use client';

import { useEffect, useState } from 'react';
import { Gamepad2, Trophy, Users, Zap } from 'lucide-react';
import { AppShell } from './components/AppShell';
import { PlayerProfile } from './components/PlayerProfile';
import { GuildDashboard } from './components/GuildDashboard';
import { Leaderboard } from './components/Leaderboard';
import { DailyReward } from './components/DailyReward';

type Tab = 'home' | 'guilds' | 'leaderboard' | 'profile';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Signal that the frame is ready
    setIsReady(true);
  }, []);

  return (
    <AppShell activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="min-h-screen pb-20">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'guilds' && <GuildDashboard />}
        {activeTab === 'leaderboard' && <Leaderboard />}
        {activeTab === 'profile' && <PlayerProfile />}
      </div>
    </AppShell>
  );
}

function HomeView() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 p-8 border border-primary/20">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Guilds & Games</h1>
              <p className="text-text-secondary text-sm">Powered by Farcaster on Base</p>
            </div>
          </div>
          <p className="text-lg mb-6">
            Compete, collaborate, and earn rewards with your Farcaster friends in gasless onchain games.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-button">
              Play Now
            </button>
            <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Daily Reward */}
      <DailyReward />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatCard
          icon={<Trophy className="w-6 h-6" />}
          label="Your Rank"
          value="#42"
          trend="+5"
        />
        <StatCard
          icon={<Zap className="w-6 h-6" />}
          label="Total Score"
          value="1,250"
          trend="+120"
        />
        <StatCard
          icon={<Users className="w-6 h-6" />}
          label="Guild Members"
          value="8"
          trend="+2"
        />
        <StatCard
          icon={<Gamepad2 className="w-6 h-6" />}
          label="Games Played"
          value="47"
          trend="+3"
        />
      </div>

      {/* Featured Games */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
        <div className="grid gap-4">
          <GameCard
            title="Speed Challenge"
            description="Test your reflexes in this fast-paced game"
            players="1.2k"
            reward="50 XP"
            difficulty="Easy"
          />
          <GameCard
            title="Guild Quest"
            description="Team up with your guild for epic rewards"
            players="856"
            reward="200 XP"
            difficulty="Medium"
          />
          <GameCard
            title="Tournament Arena"
            description="Compete against the best players"
            players="2.5k"
            reward="500 XP"
            difficulty="Hard"
          />
        </div>
      </section>

      {/* Recent Achievements */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
        <div className="space-y-3">
          <AchievementItem
            title="First Victory"
            description="Won your first game"
            date="2 hours ago"
            rarity="common"
          />
          <AchievementItem
            title="Team Player"
            description="Completed 5 guild challenges"
            date="1 day ago"
            rarity="rare"
          />
          <AchievementItem
            title="Speed Demon"
            description="Finished a game in under 30 seconds"
            date="3 days ago"
            rarity="epic"
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10">
      <div className="flex items-center justify-between mb-2">
        <div className="text-primary">{icon}</div>
        <span className="text-success text-sm font-semibold">{trend}</span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-text-secondary text-sm">{label}</div>
    </div>
  );
}

function GameCard({ title, description, players, reward, difficulty }: {
  title: string;
  description: string;
  players: string;
  reward: string;
  difficulty: string;
}) {
  const difficultyColors = {
    Easy: 'text-success',
    Medium: 'text-warning',
    Hard: 'text-error',
  };

  return (
    <div className="bg-surface rounded-lg p-5 border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
        <span className={`text-sm font-semibold ${difficultyColors[difficulty as keyof typeof difficultyColors]}`}>
          {difficulty}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-text-secondary">
            <Users className="w-4 h-4 inline mr-1" />
            {players} playing
          </span>
          <span className="text-primary font-semibold">
            <Zap className="w-4 h-4 inline mr-1" />
            {reward}
          </span>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition-colors text-sm">
          Play
        </button>
      </div>
    </div>
  );
}

function AchievementItem({ title, description, date, rarity }: {
  title: string;
  description: string;
  date: string;
  rarity: string;
}) {
  const rarityColors = {
    common: 'bg-gray-500/20 text-gray-300',
    rare: 'bg-blue-500/20 text-blue-300',
    epic: 'bg-purple-500/20 text-purple-300',
    legendary: 'bg-yellow-500/20 text-yellow-300',
  };

  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10 flex items-center gap-4">
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
        <Trophy className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold truncate">{title}</h4>
          <span className={`text-xs px-2 py-0.5 rounded-full ${rarityColors[rarity as keyof typeof rarityColors]}`}>
            {rarity}
          </span>
        </div>
        <p className="text-text-secondary text-sm truncate">{description}</p>
        <p className="text-text-secondary text-xs mt-1">{date}</p>
      </div>
    </div>
  );
}
