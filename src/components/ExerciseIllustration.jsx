// Simple hand-drawn-style SVG stand-ins for exercises that don't have a linked video.
// Kept monochrome + minimal so they sit quietly next to the video-based cards.

function Plank() {
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label="Plank position illustration">
      <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="45" y1="112" x2="190" y2="70" />
        <circle cx="205" cy="62" r="12" />
        <line x1="45" y1="112" x2="30" y2="122" />
        <line x1="70" y1="104" x2="60" y2="122" />
        <line x1="150" y1="82" x2="165" y2="118" />
        <line x1="150" y1="82" x2="175" y2="112" />
      </g>
    </svg>
  )
}

function Pushup() {
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label="Push-up illustration">
      <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="45" y1="118" x2="185" y2="95" />
        <circle cx="200" cy="86" r="12" />
        <line x1="70" y1="112" x2="55" y2="80" />
        <line x1="55" y1="80" x2="70" y2="60" />
        <line x1="150" y1="99" x2="160" y2="118" />
        <line x1="150" y1="99" x2="175" y2="112" />
      </g>
    </svg>
  )
}

function Walk() {
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label="Walking illustration">
      <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="120" cy="30" r="12" />
        <line x1="120" y1="42" x2="115" y2="85" />
        <line x1="115" y1="85" x2="90" y2="120" />
        <line x1="115" y1="85" x2="150" y2="105" />
        <line x1="115" y1="60" x2="85" y2="50" />
        <line x1="115" y1="60" x2="145" y2="75" />
      </g>
    </svg>
  )
}

function Rope() {
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label="Skipping rope illustration">
      <line x1="20" y1="120" x2="220" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 60 C 120 10, 160 10, 175 60" />
        <circle cx="120" cy="25" r="11" />
        <line x1="120" y1="36" x2="120" y2="70" />
        <line x1="120" y1="70" x2="100" y2="118" />
        <line x1="120" y1="70" x2="140" y2="118" />
        <line x1="120" y1="45" x2="70" y2="60" />
        <line x1="120" y1="45" x2="175" y2="60" />
      </g>
    </svg>
  )
}

function Rest() {
  return (
    <svg viewBox="0 0 240 140" role="img" aria-label="Rest day illustration">
      <line x1="30" y1="115" x2="210" y2="115" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M45 110 L45 75 Q45 60 60 60 L150 60 Q165 60 165 75 L165 110" />
        <line x1="35" y1="110" x2="175" y2="110" />
        <circle cx="70" cy="70" r="8" />
        <path d="M185 45 L195 55 M195 45 L185 55" opacity="0.5" />
        <path d="M175 30 L185 40 M185 30 L175 40" opacity="0.35" />
      </g>
    </svg>
  )
}

const MAP = { plank: Plank, pushup: Pushup, walk: Walk, rope: Rope, rest: Rest }

export default function ExerciseIllustration({ kind }) {
  const Cmp = MAP[kind] || Pushup
  return (
    <div className="illustration">
      <Cmp />
    </div>
  )
}
