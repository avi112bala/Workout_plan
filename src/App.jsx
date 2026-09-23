import { useMemo, useState } from 'react'
import { CATEGORIES, DAYS, PROGRESSION_NOTE } from './data/exercises.js'
import { useExercises } from './hooks/useExercises.js'
import DayTabs from './components/DayTabs.jsx'
import FilterBar from './components/FilterBar.jsx'
import ExerciseCard from './components/ExerciseCard.jsx'
import AddExerciseModal from './components/AddExerciseModal.jsx'
import PWAPrompt from './components/PWAPrompt.jsx'

const TODAY_KEY = DAYS[(new Date().getDay() + 6) % 7].key // JS Sunday=0 → align to Monday-first list

export default function App() {
  const { exercises, addExercise, removeExercise } = useExercises()
  const [activeDay, setActiveDay] = useState(TODAY_KEY)
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const currentDay = DAYS.find((d) => d.key === activeDay)

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return exercises.filter((ex) => {
      if (ex.day !== activeDay) return false
      if (activeCategory !== 'All' && ex.category !== activeCategory) return false
      if (q && !ex.name.toLowerCase().includes(q)) return false
      return true
    })
  }, [exercises, activeDay, activeCategory, search])

  return (
    <div className="app">
      <PWAPrompt />
      <header className="hero">
        <p className="eyebrow-free-label">Two dumbbell rods · 3 ft barbell · ~30 kg of plates · skipping rope · gripper</p>
        <h1>7-Day Home Circuit</h1>
        <p className="hero-sub">
          A minimal-equipment plan built around double progression. Filter by day or muscle group, watch the form video, and drop in your own exercises as you go.
        </p>
      </header>

      <DayTabs days={DAYS} activeDay={activeDay} onSelect={setActiveDay} />

      <section className="session-banner">
        <h2>{currentDay.session}</h2>
        <span className="session-day">{currentDay.label}</span>
      </section>

      <FilterBar
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
        search={search}
        onSearch={setSearch}
        onAddClick={() => setModalOpen(true)}
      />

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>Nothing matches that filter for {currentDay.label}.</p>
          <button type="button" className="link-btn" onClick={() => { setActiveCategory('All'); setSearch('') }}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} onRemove={removeExercise} />
          ))}
        </div>
      )}

      <footer className="footer-note">
        <p>{PROGRESSION_NOTE}</p>
        <p className="rest-note">Rest 60–90 seconds between sets. Aim for 8,000–10,000 steps daily outside of training.</p>
      </footer>

      {modalOpen && (
        <AddExerciseModal
          days={DAYS}
          categories={CATEGORIES}
          defaultDay={activeDay}
          onClose={() => setModalOpen(false)}
          onSave={(exercise) => {
            addExercise(exercise)
            setModalOpen(false)
          }}
        />
      )}
    </div>
  )
}
