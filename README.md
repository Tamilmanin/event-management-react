# Event Management — React (Vite + Tailwind)

A modern, responsive **Event Management** frontend built with **React**, **Vite**, **React Router**, and **Tailwind CSS**.  
Features include browsing/filtering events, viewing details, creating events, and a lightweight admin dashboard — all persisted to `localStorage` (no backend required).

## Features
- Home with highlights
- Events listing with search, category filter, and sorting
- Event details page
- Create event form (requires login)
- Simple auth (demo) and protected routes
- Admin dashboard with quick actions
- Responsive UI with Tailwind components

## Quick Start

> **Prereqs:** Node.js 18+ and npm

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown in your terminal (usually http://localhost:5173).

3. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## Project Structure
```
event-management-react/
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ vite.config.js
├─ src/
│  ├─ index.css
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ context/
│  │  ├─ AuthContext.jsx
│  │  └─ EventContext.jsx
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ EventCard.jsx
│  │  └─ SearchBar.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Events.jsx
│  │  ├─ EventDetails.jsx
│  │  ├─ CreateEvent.jsx
│  │  ├─ Dashboard.jsx
│  │  └─ Login.jsx
│  └─ data/
│     └─ events.json
```

## Notes
- Authentication is demo-only — any email/password works.
- Events are persisted to `localStorage`, seeded from `src/data/events.json` on first load.
- Images use placeholder picsum.photos based on event id.

## Tailwind Setup
Tailwind is already configured. If classes don't apply, ensure your editor/plugin isn't stripping styles and that `index.css` is imported in `main.jsx`.
