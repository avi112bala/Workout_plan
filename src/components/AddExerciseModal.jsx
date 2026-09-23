import { useState } from 'react'
import { extractYouTubeId } from '../utils/youtube.js'

const EMPTY_FORM = {
  name: '',
  day: '',
  category: 'Upper Body',
  sets: '',
  notes: '',
  video: '',
}

export default function AddExerciseModal({ days, categories, defaultDay, onClose, onSave }) {
  const [form, setForm] = useState({ ...EMPTY_FORM, day: defaultDay })
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('Give the exercise a name.')
      return
    }
    if (!form.day) {
      setError('Pick which day this belongs to.')
      return
    }

    const videoId = form.video.trim() ? extractYouTubeId(form.video.trim()) : null
    if (form.video.trim() && !videoId) {
      setError("Couldn't read a video id from that link — paste the YouTube URL or embed code, or leave it blank.")
      return
    }

    onSave({
      name: form.name.trim(),
      day: form.day,
      category: form.category,
      sets: form.sets.trim() || '3 × 10–12',
      notes: form.notes.trim(),
      videoId: videoId || undefined,
      image: videoId ? undefined : 'pushup',
    })
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="add-exercise-title" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="add-exercise-title">Add an exercise</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Exercise name
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="e.g. Incline dumbbell press"
              autoFocus
            />
          </label>

          <div className="form-row">
            <label>
              Day
              <select value={form.day} onChange={(e) => update('day', e.target.value)}>
                {days.map((d) => (
                  <option key={d.key} value={d.key}>
                    {d.label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Category
              <select value={form.category} onChange={(e) => update('category', e.target.value)}>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Sets &amp; reps
            <input
              type="text"
              value={form.sets}
              onChange={(e) => update('sets', e.target.value)}
              placeholder="e.g. 3 × 10–12"
            />
          </label>

          <label>
            YouTube link <span className="optional">(optional — paste a URL or the embed code)</span>
            <input
              type="text"
              value={form.video}
              onChange={(e) => update('video', e.target.value)}
              placeholder="https://youtube.com/watch?v=…"
            />
          </label>

          <label>
            Notes <span className="optional">(optional)</span>
            <textarea
              value={form.notes}
              onChange={(e) => update('notes', e.target.value)}
              placeholder="Form cues, equipment substitutions, etc."
              rows={2}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add to plan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
