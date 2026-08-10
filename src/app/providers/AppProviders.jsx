import { AppProvider } from '../state/AppProvider'

export function AppProviders({ children }) {
  return <AppProvider>{children}</AppProvider>
}
