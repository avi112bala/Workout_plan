// Static seed data for the weekly plan.
// videoId = YouTube embed id. image = 'illustration' means we draw our own SVG (no stock footage exists for it).
// Custom exercises added by the user at runtime are stored separately in localStorage — see useExercises.js.

export const CATEGORIES = ['Upper Body', 'Lower Body', 'Core', 'Cardio', 'Rest']

export const DAYS = [
  { key: 'monday', label: 'Monday', short: 'Mon', session: 'Upper Body A' },
  { key: 'tuesday', label: 'Tuesday', short: 'Tue', session: 'Lower Body A + Core' },
  { key: 'wednesday', label: 'Wednesday', short: 'Wed', session: 'Rest — 30–45 min walk' },
  { key: 'thursday', label: 'Thursday', short: 'Thu', session: 'Upper Body B' },
  { key: 'friday', label: 'Friday', short: 'Fri', session: 'Lower Body B + Core' },
  { key: 'saturday', label: 'Saturday', short: 'Sat', session: 'Cardio' },
  { key: 'sunday', label: 'Sunday', short: 'Sun', session: 'Full Rest' },
]

export const SEED_EXERCISES = [
  // Monday — Upper Body A
  { id: 'mon-1', day: 'monday', category: 'Upper Body', name: 'Push-ups', sets: '3 × as many as possible', notes: 'Knees down or hands on a chair if needed.', image: 'pushup' },
  { id: 'mon-2', day: 'monday', category: 'Upper Body', name: 'One-arm dumbbell row', sets: '3 × 10–12 per arm', videoId: 'OG5S3x7T8QQ' },
  { id: 'mon-3', day: 'monday', category: 'Upper Body', name: 'Floor dumbbell press', sets: '3 × 10–12', notes: 'Lie on the floor, no bench needed.', videoId: 'T0Y3OBF1bNI' },
  { id: 'mon-4', day: 'monday', category: 'Upper Body', name: 'Barbell bent-over row', sets: '3 × 10–12', videoId: 'qXrTDQG1oUQ' },
  { id: 'mon-5', day: 'monday', category: 'Upper Body', name: 'Standing dumbbell shoulder press', sets: '3 × 10', videoId: 'e_f5oodNEcI' },
  { id: 'mon-6', day: 'monday', category: 'Upper Body', name: 'Dumbbell curls', sets: '2 × 12', videoId: '6DeLZ6cbgWQ' },
  { id: 'mon-7', day: 'monday', category: 'Upper Body', name: 'Overhead triceps extension', sets: '2 × 12', videoId: 'YM8iX9BJWjA' },

  // Tuesday — Lower Body A + Core
  { id: 'tue-1', day: 'tuesday', category: 'Lower Body', name: 'Goblet squat', sets: '4 × 12', notes: 'Hold one dumbbell at your chest.', videoId: 'xRTMjjZ76GI' },
  { id: 'tue-2', day: 'tuesday', category: 'Lower Body', name: 'Barbell Romanian deadlift', sets: '3 × 12', videoId: 'xgusDooVfKU' },
  { id: 'tue-3', day: 'tuesday', category: 'Lower Body', name: 'Reverse lunges', sets: '3 × 10 per leg', videoId: 'xrPteyQLGAo' },
  { id: 'tue-4', day: 'tuesday', category: 'Lower Body', name: 'Barbell glute bridge', sets: '3 × 15', videoId: 'DQv1IMQDbE4' },
  { id: 'tue-5', day: 'tuesday', category: 'Lower Body', name: 'Calf raises', sets: '3 × 20', videoId: 'SRUtMJ0tE2A' },
  { id: 'tue-6', day: 'tuesday', category: 'Core', name: 'Plank', sets: '3 × 30–45 sec', image: 'plank' },

  // Wednesday — Rest
  { id: 'wed-1', day: 'wednesday', category: 'Rest', name: '30–45 minute walk', sets: 'Easy pace', notes: 'Active recovery. No lifting today.', image: 'walk' },

  // Thursday — Upper Body B
  { id: 'thu-1', day: 'thursday', category: 'Upper Body', name: 'Pike push-ups', sets: '3 × 8–12', notes: 'Hips high, head toward the floor.', image: 'pushup' },
  { id: 'thu-2', day: 'thursday', category: 'Upper Body', name: 'Barbell row (underhand grip)', sets: '3 × 10–12', videoId: 'qXrTDQG1oUQ' },
  { id: 'thu-3', day: 'thursday', category: 'Upper Body', name: 'Dumbbell floor fly / close-grip floor press', sets: '3 × 12', videoId: 'bgC53-J-6gA' },
  { id: 'thu-4', day: 'thursday', category: 'Upper Body', name: 'Lateral raises', sets: '3 × 12–15', videoId: 'XPPfnSEATJA' },
  { id: 'thu-5', day: 'thursday', category: 'Upper Body', name: 'Hammer curls', sets: '2 × 12', videoId: 'P5sXHLmXmBM' },
  { id: 'thu-6', day: 'thursday', category: 'Upper Body', name: 'Diamond / close-grip push-ups', sets: '2 × max', image: 'pushup' },

  // Friday — Lower Body B + Core
  { id: 'fri-1', day: 'friday', category: 'Lower Body', name: 'Bulgarian split squat', sets: '3 × 10 per leg', notes: 'Rear foot on a chair.', videoId: 'Fmjj7wFJWRE' },
  { id: 'fri-2', day: 'friday', category: 'Lower Body', name: 'Barbell deadlift', sets: '3 × 10', videoId: 'yPqv3ejnZvc' },
  { id: 'fri-3', day: 'friday', category: 'Lower Body', name: 'Step-ups', sets: '3 × 12 per leg', notes: 'Use a sturdy chair or step.', videoId: 'XfvSfApvpbo' },
  { id: 'fri-4', day: 'friday', category: 'Lower Body', name: 'Single-leg Romanian deadlift', sets: '2 × 10 per leg', videoId: 'lI8-igvsnVQ' },
  { id: 'fri-5', day: 'friday', category: 'Core', name: 'Lying leg raises', sets: '3 × 12–15', videoId: 'Wp4BlxcFTkE' },
  { id: 'fri-6', day: 'friday', category: 'Core', name: 'Russian twists', sets: '3 × 20', videoId: '99T1EfpMwPA' },

  // Saturday — Cardio
  { id: 'sat-1', day: 'saturday', category: 'Cardio', name: 'Skipping rope intervals', sets: '30 sec on / 30 sec off × 10–15 rounds', image: 'rope' },
  { id: 'sat-2', day: 'saturday', category: 'Cardio', name: 'Brisk walk (alternative)', sets: '40 minutes', image: 'walk' },

  // Sunday — Full Rest
  { id: 'sun-1', day: 'sunday', category: 'Rest', name: 'Full rest day', sets: '—', notes: 'No training. Sleep, hydrate, eat well.', image: 'rest' },
]

export const PROGRESSION_NOTE =
  'Double progression: stay at the same weight until you hit the top of the rep range on every set, then add 2.5 kg or slow the lowering phase to 3 seconds. Once ~30 kg stops being enough, switch to slower tempos, pauses, and single-limb variations.'
