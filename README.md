# Frieren Fan Site 🌿

Sitio web fan dedicado al anime **Frieren: Beyond Journey's End**.

## Tech Stack

| Herramienta       | Versión  | Uso                         |
|-------------------|----------|-----------------------------|
| React             | 19       | UI Framework                |
| Vite              | 7        | Build tool & Dev server     |
| Tailwind CSS      | 4        | Utility-first styling       |
| React Router DOM  | 7        | Client-side routing         |
| Context API       | nativa   | Estado global               |
| ESLint            | 9        | Linting                     |

## Comandos

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # Linting
```

## Estructura del proyecto

```
src/
├── app/                 → Inicialización, router, providers y estado global
│   ├── components/      → Componentes del shell de la aplicación
│   ├── providers/       → Composición de providers globales
│   └── state/           → Contextos, reducer y hooks del estado global
├── features/            → Módulos del dominio organizados por funcionalidad
│   └── characters/      → API, datos mock y modelo de personajes
├── layouts/             → Estructuras compartidas entre páginas
├── pages/               → Pantallas asociadas a rutas
└── shared/              → Hooks, utilidades y estilos reutilizables
```

## Estado global

El estado se maneja con **Context API + useReducer** (sin librerías externas).

```jsx
import { ACTION_TYPES } from './app/state/appReducer'
import { useAppDispatch, useAppState } from './app/state/useAppContext'

// Leer estado
const { favorites, selectedCharacter } = useAppState()

// Mutar estado
const dispatch = useAppDispatch()
dispatch({ type: ACTION_TYPES.ADD_FAVORITE, payload: characterId })
```

## Reglas de organización

- `app` contiene únicamente infraestructura global de la aplicación.
- `pages` compone pantallas; la lógica del dominio vive en `features`.
- Cada feature conserva cerca sus datos, API, modelo, hooks y componentes.
- `shared` solo recibe código verdaderamente reutilizable y sin conocimiento de una feature.
- No se crean carpetas vacías para funcionalidades que todavía no existen.
