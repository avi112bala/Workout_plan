import { useCallback, useEffect, useState } from 'react'
import { SEED_EXERCISES } from '../data/exercises.js'

const STORAGE_KEY = 'home-circuit:custom-exercises'

function loadCustom() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCustom(list) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch {
    // localStorage unavailable (private browsing etc.) — fail silently, state still works in-memory
  }
}

export function useExercises() {
  const [custom, setCustom] = useState(() => loadCustom())

  useEffect(() => {
    saveCustom(custom)
  }, [custom])

  const addExercise = useCallback((exercise) => {
    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
    setCustom((prev) => [...prev, { ...exercise, id, custom: true }])
  }, [])

  const removeExercise = useCallback((id) => {
    setCustom((prev) => prev.filter((ex) => ex.id !== id))
  }, [])

  return {
    exercises: [...SEED_EXERCISES, ...custom],
    addExercise,
    removeExercise,
  }
}
