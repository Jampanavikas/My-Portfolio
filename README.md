# Vikas Varma — Portfolio + AI Chatbot

Animated portfolio website with an integrated Agentic AI chatbot powered by Claude.

## Quick Start

### 1. Backend (AI Chatbot server)

```bash
cd backend
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
npm install
npm run dev        # starts on http://localhost:3001
```

Get an API key at: https://console.anthropic.com

### 2. Frontend

```bash
cd frontend
npm install
npm run dev        # starts on http://localhost:5173
```

Open http://localhost:5173 in your browser.

The Vite dev server proxies `/api/*` → `http://localhost:3001` automatically — no CORS setup needed.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React + Vite |
| Animations | GSAP + ScrollTrigger + Framer Motion |
| Particles | @tsparticles/react (neural network effect) |
| Smooth Scroll | @studio-freight/lenis |
| Styling | Tailwind CSS + custom CSS |
| 3D Cards | vanilla-tilt |
| Backend | Node.js + Express (ESM) |
| AI Chatbot | Anthropic SDK — claude-sonnet-4-6 (SSE streaming) |

## Features

- Neural network particle background
- Custom animated cursor (desktop only)
- GSAP timeline hero entrance with glitch + typewriter effect
- Scroll-triggered SVG skill rings
- CSS 3D flip education cards
- vanilla-tilt 3D project cards
- Vertical timeline experience section
- AI chatbot with real-time token streaming

## Production Build

```bash
cd frontend && npm run build    # output: frontend/dist/
```
