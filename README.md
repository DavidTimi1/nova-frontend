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