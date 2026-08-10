export const INITIAL_APP_STATE = {
  theme: 'dark',
  selectedCharacter: null,
  favorites: [],
}

export const ACTION_TYPES = {
  SET_THEME: 'SET_THEME',
  SET_SELECTED_CHARACTER: 'SET_SELECTED_CHARACTER',
  ADD_FAVORITE: 'ADD_FAVORITE',
  REMOVE_FAVORITE: 'REMOVE_FAVORITE',
}

export function appReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_THEME:
      return { ...state, theme: action.payload }

    case ACTION_TYPES.SET_SELECTED_CHARACTER:
      return { ...state, selectedCharacter: action.payload }

    case ACTION_TYPES.ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites
          : [...state.favorites, action.payload],
      }

    case ACTION_TYPES.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      }

    default:
      return state
  }
}
