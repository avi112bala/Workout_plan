# 7-Day Home Circuit

A mobile-responsive React app for a minimal-equipment (dumbbells, short barbell, plates, skipping rope) weekly workout plan — Monday through Sunday — with embedded YouTube form videos, filtering by day/category/search, and the ability to add your own exercises.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploy to Vercel

**Option A — Vercel dashboard**
1. Push this folder to a GitHub repo.
2. In Vercel, "Add New… → Project" and import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel usually detects these automatically).
4. Deploy.

**Option B — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts (it will detect the Vite app automatically).

## Project structure

```
src/
  data/exercises.js        seed data for all 7 days
  hooks/useExercises.js    merges seed data with your custom exercises (persisted in localStorage)
  utils/youtube.js         pulls a video id out of a pasted URL/embed code
  components/
    DayTabs.jsx             Mon–Sun selector
    FilterBar.jsx           category chips + search + "add exercise" button
    ExerciseCard.jsx        renders a card: embedded video or illustration, sets/reps, notes
    ExerciseIllustration.jsx  small original SVGs for exercises with no linked video
    AddExerciseModal.jsx    form for adding a custom exercise to any day
  App.jsx
  index.css
```

## Notes

- Exercises you add are stored in the browser's `localStorage`, so they persist across visits on the same device/browser but aren't shared across devices. To make them shared across everyone who opens the site, swap `useExercises.js` for a small backend or a service like Supabase/Firebase.
- Two exercises (Plank, Diamond/close-grip push-ups) and a few Upper Body B moves shipped without a video link in the original brief, so they show a small original illustration instead — swap in a real video any time by editing `src/data/exercises.js` or using the in-app "Add exercise" form with the same name.
