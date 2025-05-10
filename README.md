# nova-frontend
Nova frontend repo


## Project Structure

This React app is structured similarly to a Next.js App Router for better organization and scalability.

### Features
1. **Learning Module**
    - Provides educational content and interactive lessons.
    - Located in: `src/app/learning-module`

2. **AI Tutor Interaction**
    - Enables users to interact with an AI-powered tutor.
    - Located in: `src/app/ai-tutor`

3. **Cardano Blockchain Integration**
    - Offers views and tools for interacting with the Cardano blockchain.
    - Located in: `src/app/cardano-integration`

### Directory Structure
```
/nova-app
│
├── /app
│   ├── /dashboard
│   │   ├── page.tsx            # Dashboard main page (home view)
│   │   └── /components
│   │
│   ├── /settings
│   │   ├── page.tsx            # Settings page
│   │   └── /components
│   │
│   ├── /modules
│   │   ├── page.tsx            # Learning module page
│   │   └── /components
│   │       └── ModuleCard.tsx  # Individual module display component
│   │
│   ├── /ai-tutor
│   │   ├── page.tsx            # AI tutor page
│   │   └── /components
│   │
│   ├── /rewards
│   │   ├── page.tsx            # Rewards and payment view page
│   │   └── /components
│   │
│   └── /landing
│       ├── page.tsx            # Landing page
│       └── /components
│
├── /components
│   ├── Navbar.tsx
│   ├── Button.tsx
│   └── Footer.tsx
│
├── /styles
│   ├── globals.css             # Global styles
│
├── /utils
│   └── api.ts                 # Utility for making API calls
│
├── /public
│   ├── /images                # Store static images here (logo, icons)
│   └── favicon.ico
│
├── /types
│   ├── user.ts                # TypeScript types related to user data
│   └── settings.ts            # TypeScript types for settings data
│
├── tailwind.config.js 
└── /package.json              # Project dependencies and scripts

src/
├── app/
│   ├── learning-module/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── ai-tutor/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── cardano-integration/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── layout/
├── assets/
├── styles/
└── utils/
```

### Getting Started
1. Install dependencies:
    ```bash
    npm install
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```