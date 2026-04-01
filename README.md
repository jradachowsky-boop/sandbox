# Jeremy Strategy OS

A local-first executive operating system for managing conservation strategy across four high-leverage pillars:
- Rainforest Burger
- Cattle trafficking / illegal beef / political leverage
- Bird campaign / migratory birds / donor-government strategy
- Maya Forest restoration / political commitments

## What this app does

- **Executive Dashboard** for priorities, 7-day actions, meetings, blockers, and pillar status.
- **Pillar Pages** with objective, strategy, stakeholders, opportunities, risks, actions, and recent developments.
- **Stakeholder Map** with sortable influence-first table and strategic fields.
- **Meeting Prep Generator** to produce one-page briefing notes.
- **Decision Log** to capture rationale + follow-up.
- **Focus Filter** to isolate only what matters this week.
- **Export Artifacts** for reusable templates and generated executive outputs.

## Run locally

### Requirements
- Python 3 (for local static server)
- Optional Node/npm only for running scripts conveniently

### Setup
```bash
npm install
```

> `npm install` installs no external dependencies; it only prepares script usage.

### Development server
```bash
npm run dev
```
Then open `http://localhost:4173`.

### Build
```bash
npm run build
```
This creates a static `dist/` directory.

### Preview built app
```bash
npm run preview
```
Then open `http://localhost:4173`.

## Local persistence

The app saves all working data in browser localStorage under:
- `jeremy_strategy_os_v1`

No backend is required for day-one use.

## Where to edit seed data

Edit the `seed` object in:
- `src/main.js`

Sections include:
- `pillars`
- `stakeholders`
- `risks`
- `actions`
- `meetings`
- `decisions`
- `donorCategories`

## How to add new pillars or stakeholders

1. Add a pillar object in `seed.pillars` (must include unique `id` + `name`).
2. Add matching actions/meetings/risks using the same pillar name.
3. Add stakeholders with `pillar` equal to pillar name.
4. Refresh the app; nav, filters, and generator pick up the new entries automatically.

## Keyboard-friendly workflow

- Press `/` from anywhere to jump to quick search.
- Use sidebar nav + focus filters to narrow to high-leverage work.

## Architecture at a glance

- Static web app (`index.html` + vanilla JS + CSS)
- Single state container in `src/main.js`
- View-level render functions by module/page
- Export generators produce downloadable text artifacts

