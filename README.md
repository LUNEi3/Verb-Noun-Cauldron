# Verb-Noun Cauldron

An interactive real-time multiplayer co-op word pairing battle game built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4**, and **Supabase Realtime**.

Players team up on mobile devices to combine **Verbs** and **Nouns** into a magical cauldron, unleashing spells to defeat monsters and compete for high scores on a live booth display.

---

## Live Deployment

- **Game URL (Mobile)**: `https://verb-noun-cauldron.vercel.app` <!-- Replace with deployed URL -->
- **Booth Master Display (TV / 1080p)**: `https://your-deployed-game-url.vercel.app/master`

---

## Game Concept & Architecture

1. **Player Mobile Experience**:
   - **`/login`**: Nickname entry with validation (1-10 chars) and team selection (**Team 1** vs **Team 2**).
   - **`/tutorial`**: 4-page interactive pixel-art onboarding guide.
   - **`/lobby`**: Real-time room showing teammates and opponents with ready check.
   - **`/battle`**: Fast-paced 60-second co-op gameplay dragging cards into the bubbling cauldron.
   - **`/winner`**: Match conclusion showing victory/defeat and score breakdown.
   - **`/leaderboard`**: Hall of Fame displaying top team scores.

2. **Booth Master Screen (`/master`)**:
   - Fixed 1920×1080 stage optimized for event booth TVs.
   - Autonomously orchestrates match flow: **Prepare (Lobby + QR Code)** -> **Battle** -> **Winner / MVP** -> **Leaderboard**.
   - Includes booth staff controls (`Start`, `Cancel`, `Reset`).

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Server & Client Components)
- **UI & State**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) (Dynamic Theme Tokens & Pixel-Art Rendering)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com) (Configured for ultra-responsive mobile touch)
- **Backend & Database**: [Supabase](https://supabase.com) (PostgreSQL, Realtime Broadcast/Presence, Anonymous Auth, RPCs)
- **Testing**: [Vitest](https://vitest.dev) (Game Engine Unit Tests) & [Playwright](https://playwright.dev) (Drag & Drop E2E)
- **Font**: [BoldPixels by YukiPixels](https://yukipixels.itch.io/boldpixels) (CC BY-SA 4.0)

---

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm 10 or higher

### Installation

```bash
git clone https://github.com/Nats-PT/Verb-Noun-Cauldron.git
cd Verb-Noun-Cauldron
npm install
```

### Environment Configuration

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `localhost:3000` |
| `npm run build` | Compiles production build and runs type verification |
| `npm run lint` | Runs ESLint analysis across the repository |
| `npm test` | Runs all Vitest test suites (game mechanics, combo resolver, word pool) |
| `npm run test:drag` | Runs Playwright browser drag-and-drop simulation |

---

## Project Structure

```text
app/
├── (routes)
│   ├── page.tsx               # Root entry (redirects to /login)
│   ├── login/                 # Player authentication & team select
│   ├── tutorial/              # Player onboarding guide
│   ├── lobby/                 # Real-time waiting room
│   ├── battle/                # Gameplay board & cauldron mechanics
│   ├── winner/                # Match result & MVP display
│   ├── leaderboard/           # Global high score rankings
│   └── master/                # Booth TV stage (1920x1080)
├── fonts/                     # BoldPixels font files
└── globals.css                # Global theme tokens & pixel borders

components/                    # Shared reusable components (MonsterStage, Leaderboard, etc.)
lib/
├── battle.ts                  # Supabase battle sync & combat events
├── game/                      # Core game engine, word pool & damage resolver
├── leaderboard.ts             # Supabase leaderboard queries & RPCs
├── lobby.ts                   # Player lobby session & presence tracking
├── master.ts                  # Master screen state machine
└── types.ts                   # Shared TypeScript definitions
```

---

## Team Workflow & Agreements

- **Branching**: Create feature branches from `main` (`feature/...`, `fix/...`) and submit Pull Requests.
- **Secrets**: Never commit `.env` or sensitive credentials (`.gitignore` enforced).
- **Theme Integrity**: Use shared CSS tokens (`bg-primary`, `text-score`, `text-body`) defined in `app/globals.css`.

---

## Credits & Team

- **Developers**:
  - [Pariwat Niranon / LUNEi3](https://github.com/LUNEi3/)
  - [Natpiti Chonthong / Nats-PT](https://github.com/Nats-PT/)
  - [Natnaree Hiangrach / mangeaw](https://github.com/mangeaw/)
  - [... / Tawanwdw](https://github.com/Tawanwdw/)
- **Artwork & UI Assets**:
  - [Sarinrat Sappueng / jejesarinrat](https://github.com/jejesarinrat/)
  - [Yardthip Semathong / YardthipSemathong](https://github.com/YardthipSemathong/)
  - [Thannaphat Pitiponthannapat / Linkedin](https://github.com/)
- **Font**:
  - [BoldPixels by YukiPixels](https://yukipixels.itch.io/boldpixels) — Used under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) without modification (details in `app/fonts/BoldPixels-LICENSE.txt`).
