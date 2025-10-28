'use client';

import { Gamepad2, Trophy, Users, User } from 'lucide-react';
import { type ReactNode } from 'react';

type Tab = 'home' | 'guilds' | 'leaderboard' | 'profile';

interface AppShellProps {
  children: ReactNode;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function AppShell({ children, activeTab, onTabChange }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Guilds & Games</h1>
                <p className="text-xs text-text-secondary">Base Network</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-sm border-t border-primary/10 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-around py-3">
            <NavButton
              icon={<Gamepad2 className="w-6 h-6" />}
              label="Home"
              active={activeTab === 'home'}
              onClick={() => onTabChange('home')}
            />
            <NavButton
              icon={<Users className="w-6 h-6" />}
              label="Guilds"
              active={activeTab === 'guilds'}
              onClick={() => onTabChange('guilds')}
            />
            <NavButton
              icon={<Trophy className="w-6 h-6" />}
              label="Leaderboard"
              active={activeTab === 'leaderboard'}
              onClick={() => onTabChange('leaderboard')}
            />
            <NavButton
              icon={<User className="w-6 h-6" />}
              label="Profile"
              active={activeTab === 'profile'}
              onClick={() => onTabChange('profile')}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'text-primary bg-primary/10'
          : 'text-text-secondary hover:text-fg hover:bg-surface'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}
