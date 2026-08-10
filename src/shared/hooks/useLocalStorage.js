import { useEffect, useState } from 'react'

function readStoredValue(key, defaultValue) {
  if (typeof window === 'undefined') return defaultValue

  try {
    const storedValue = window.localStorage.getItem(key)
    return storedValue === null ? defaultValue : JSON.parse(storedValue)
  } catch {
    return defaultValue
  }
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => readStoredValue(key, defaultValue))

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === key) {
        setValue(readStoredValue(key, defaultValue))
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [defaultValue, key])

  const setStoredValue = (nextValue) => {
    setValue((currentValue) => {
      const resolvedValue =
        typeof nextValue === 'function' ? nextValue(currentValue) : nextValue

      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue))
      } catch {
        // Mantiene el estado en memoria cuando el almacenamiento no está disponible.
      }

      return resolvedValue
    })
  }

  return [value, setStoredValue]
}
