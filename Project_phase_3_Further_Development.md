# Phase 3 – Extra Feature or Improvements (Optional)

## 🎯 Chosen Use Case or Feature to Improve

**Feature: Dark Mode Toggle**  
I chose to enhance the user interface by adding a dark mode toggle. This improves accessibility and comfort for users browsing in low‑light environments, and gives the app a modern, polished look. Dark mode also reduces eye strain and can help conserve device battery life on OLED screens.

---

## 🔍 Original Definition

In Phase 1, under **User Interface and Interaction**, we specified:

> Responsive UI: desktop + mobile  
> SCSS features: variables for colors & spacing, mixins for breakpoints

However, a light/dark theme switch was not part of the initial scope—it was called out as a potential UX improvement.

---

## 🔄 Implementation

- **Technical changes required**

  - Created a new `ThemeContext` using React’s Context API to hold `theme` state (`"light"` or `"dark"`).
  - On toggle, applied or removed a `dark` CSS class on the `<body>` element.
  - Persisted the user’s choice in `localStorage` so the theme survives page reloads.

- **Technologies, methods or structures used**

  - **React Context API** for global theme state (`ThemeProvider`).
  - **SCSS + CSS variables** (`--bg-color`, `--text-color`, `--card-bg`) defined in `:root` and overridden in `.dark`.
  - **`localStorage`** to save and load the theme preference on startup.
  - **`useEffect`** hook in `ThemeContext` to sync DOM class and storage when `theme` changes.

- **Challenges encountered & solutions**
  - **Flash of incorrect theme on page load**
    - _Solution:_ In `ThemeProvider`, read `localStorage` and immediately set `<body>` class before React renders the tree.
  - **CSS specificity conflicts**
    - _Solution:_ Replaced hardcoded color values in component SCSS with `var(--…)` so CSS variables govern all color rules.
  - **Ensuring smooth transitions**
    - _Solution:_ Added `transition: all 0.3s ease` on the `body` selector so background and text colors fade smoothly on toggle.

With these changes, toggling the theme instantly updates the entire app’s look and feel, and the user’s preference is remembered across sessions.
