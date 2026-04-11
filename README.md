# Prompt Manager WebApp

A personal tool to store, categorize, and favorite prompts — built as a student project to demonstrate React concepts.

## Tech Stack

- **React** (functional components, hooks: useState, useReducer, useContext, useEffect)
- **Redux Toolkit** — global state for prompts (addPrompt, toggleFavorite, deletePrompt)
- **React Context API** — ThemeContext for light/dark mode
- **Vite** — dev server and production build
- **Plain CSS** — no Tailwind, no UI libraries
- **localStorage** — persistence across page refreshes

## React Concepts Demonstrated

| Concept | Where |
|---|---|
| `useState` | `App.jsx` (activeCategory, isFormOpen), `PromptForm.jsx` was migrated to useReducer |
| `useReducer` | `PromptForm.jsx` — form field state (title, content, category) |
| `useContext` | `Header.jsx` via `useTheme()`, `ThemeContext.jsx` |
| `useEffect` | `ThemeContext.jsx` — syncs theme class to `document.body` |
| `useSelector` | `PromptGrid.jsx`, `FavoritesSection.jsx` |
| `useDispatch` | `PromptCard.jsx`, `PromptForm.jsx` |
| Redux Toolkit | `store/promptsSlice.js`, `store/index.js` |
| Context API | `context/ThemeContext.jsx` |
| PropTypes | Every component |

## Features

- 📋 **Prompt grid** — responsive 2–3 column layout with prompt cards
- 🏷️ **Category filter tabs** — filter by JSX, Hooks, Redux, State & Props, Components, General
- ⭐ **Favorites section** — dedicated view of starred prompts
- 🤖 **Prompt assistant** — generate professional prompts from a basic idea and save them with category/favorite settings
- ➕ **Add Prompt form** — modal with title, content, and category dropdown
- 🌙 **Light / Dark mode** toggle via ThemeContext
- 🗑️ **Delete** individual prompts

## Getting Started

```bash
npm install
npm run dev
```
