# Farcaster Guilds & Games

A competitive and collaborative mini-games platform powered by Farcaster social graph on Base.

## Features

- 🎮 **Personalized Game Profiles** - Unique profiles tied to Farcaster identity with Basename integration
- 👥 **Collaborative Guilds** - Form teams with Farcaster connections for exclusive challenges
- ⚡ **Gasless Transactions** - Smooth onchain actions with gas sponsorship via Paymaster
- 🖼️ **Frame-Driven Gameplay** - Core interactions happen directly in Farcaster Frames

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Identity**: OnchainKit for Basename/ENS resolution
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with Coinbase theme
- **State**: React Query for data fetching

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── AppShell.tsx    # Main layout with navigation
│   ├── PlayerProfile.tsx
│   ├── GuildDashboard.tsx
│   ├── Leaderboard.tsx
│   └── DailyReward.tsx
├── providers.tsx       # OnchainKit and React Query setup
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles with Coinbase theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Integrations

### OnchainKit
- Identity resolution (Basename/ENS)
- Wallet connection
- Transaction handling with gas sponsorship

### Farcaster Mini App SDK
- User context access (FID, profile data)
- Frame interactions
- Notifications
- Social actions (compose cast, add frame)

## Design System

The app uses the **Coinbase theme** with:
- Dark navy background (#0a1929)
- Light text (#e3f2fd)
- Coinbase blue accents (#0052ff)
- Subtle rounded borders

All design tokens are defined as CSS variables in `globals.css` and mapped to Tailwind utilities.

## Deployment

1. **Build the app**:
```bash
npm run build
```

2. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

3. **Update manifest**: Edit `public/.well-known/farcaster.json` with your production URLs

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY` - Your OnchainKit API key
- `NEXT_PUBLIC_CHAIN_ID` - Base chain ID (8453 for mainnet, 84532 for testnet)
- `NEXT_PUBLIC_RPC_URL` - Base RPC endpoint

## Learn More

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps/)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini App SDK](https://miniapps.farcaster.xyz/docs/getting-started)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
