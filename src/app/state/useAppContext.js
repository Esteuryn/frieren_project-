import { useContext } from 'react'
import { AppDispatchContext, AppStateContext } from './app-context'

export function useAppState() {
  const context = useContext(AppStateContext)

  if (!context) {
    throw new Error('useAppState debe usarse dentro de <AppProvider>')
  }

  return context
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext)

  if (!context) {
    throw new Error('useAppDispatch debe usarse dentro de <AppProvider>')
  }

  return context
}
