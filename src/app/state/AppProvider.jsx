import { useReducer } from 'react'
import { AppDispatchContext, AppStateContext } from './app-context'
import { appReducer, INITIAL_APP_STATE } from './appReducer'

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, INITIAL_APP_STATE)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
