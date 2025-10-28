'use client';

import { Users, Trophy, Target, Plus, Crown } from 'lucide-react';

export function GuildDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Guild Header */}
      <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg p-6 border border-primary/20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center text-2xl">
              ⚔️
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Guild Warriors</h2>
              <p className="text-text-secondary">8 members • Rank #12</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            Invite
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">2,450</div>
            <div className="text-text-secondary text-sm">Total Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">15</div>
            <div className="text-text-secondary text-sm">Challenges Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">3</div>
            <div className="text-text-secondary text-sm">Active Quests</div>
          </div>
        </div>
      </div>

      {/* Active Challenge */}
      <section>
        <h3 className="text-xl font-bold mb-4">Active Challenge</h3>
        <div className="bg-surface rounded-lg p-5 border border-primary/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold mb-1">Weekly Tournament</h4>
              <p className="text-text-secondary text-sm">Collect 1,000 points as a guild</p>
            </div>
            <span className="px-3 py-1 bg-warning/20 text-warning text-sm font-semibold rounded-full">
              2d left
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Progress</span>
              <span className="font-semibold">750 / 1,000</span>
            </div>
            <div className="h-3 bg-bg rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent w-3/4 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Target className="w-4 h-4" />
              <span>Reward: 500 XP + Legendary Badge</span>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
              Contribute
            </button>
          </div>
        </div>
      </section>

      {/* Guild Members */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Members</h3>
          <button className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg text-sm font-semibold hover:bg-surface/80 transition-colors">
            <Plus className="w-4 h-4" />
            Add Member
          </button>
        </div>
        <div className="space-y-3">
          <MemberCard
            name="Player123"
            role="Leader"
            score={450}
            isLeader={true}
          />
          <MemberCard
            name="GamerPro"
            role="Member"
            score={380}
            isLeader={false}
          />
          <MemberCard
            name="SkillMaster"
            role="Member"
            score={320}
            isLeader={false}
          />
          <MemberCard
            name="QuickShot"
            role="Member"
            score={290}
            isLeader={false}
          />
        </div>
      </section>

      {/* Recent Guild Activity */}
      <section>
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem
            icon="🏆"
            title="Completed Speed Challenge"
            time="2 hours ago"
            points="+150"
          />
          <ActivityItem
            icon="👤"
            title="QuickShot joined the guild"
            time="1 day ago"
            points="New member"
          />
          <ActivityItem
            icon="⚔️"
            title="Won Guild Tournament"
            time="3 days ago"
            points="+500"
          />
        </div>
      </section>
    </div>
  );
}

function MemberCard({ name, role, score, isLeader }: {
  name: string;
  role: string;
  score: number;
  isLeader: boolean;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10 flex items-center gap-3">
      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-xl">
        🎮
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold">{name}</h4>
          {isLeader && <Crown className="w-4 h-4 text-warning" />}
        </div>
        <p className="text-text-secondary text-sm">{role}</p>
      </div>
      <div className="text-right">
        <div className="font-bold text-primary">{score}</div>
        <div className="text-text-secondary text-xs">points</div>
      </div>
    </div>
  );
}

function ActivityItem({ icon, title, time, points }: {
  icon: string;
  title: string;
  time: string;
  points: string;
}) {
  return (
    <div className="bg-surface rounded-lg p-4 border border-primary/10 flex items-center gap-3">
      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate">{title}</h4>
        <p className="text-text-secondary text-sm">{time}</p>
      </div>
      <span className="text-primary text-sm font-semibold">{points}</span>
    </div>
  );
}
