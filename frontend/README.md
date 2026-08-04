# Course Management System — Starter Frontend

This is the **starting point** for the CMS frontend — it's fully working, but
intentionally missing two things you'll add in class:

1. **Routing** (react-router-dom)
2. **A real connection to your Express backend** (fetch, CORS, loading states)

Right now:
- Navigation switches between "pages" using plain React state — no URLs change.
- Student data lives in memory, inside `src/services/studentService.js` — it
  resets every time you refresh the page. Nothing here talks to your backend yet.

Follow the accompanying guide, **"Adding Routing and Connecting to the Backend,"**
to bring this up to a full working app connected to your Session 1 database.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Project structure

```
src/
├── components/
│   ├── NavBar/NavBar.jsx              — switches pages via local state (no routing yet)
│   ├── StudentContainer/StudentContainer.jsx  — fetches + lists students
│   ├── StudentItem/StudentItem.jsx     — one student row
│   └── Form/Form.jsx                    — add-student form
├── services/
│   └── studentService.js                 — in-memory "fake backend," async on purpose
├── App.jsx                                 — page-switching logic lives here for now
└── main.jsx
```

Note `studentService.js` is deliberately written with the same function names
and `async`/`await` shape you'll use later for real `fetch()` calls — the goal
is that swapping it over to talk to your real backend is a small, focused
change, not a rewrite.
