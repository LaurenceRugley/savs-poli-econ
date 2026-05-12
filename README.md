# For Savs — A Gentle Introduction

A short, plain-English walkthrough of economic systems and how our government works. Sister site to `lgr-refresher` — same content space, softer voice, no jargon.

## Stack

- Vite + React 18 + TypeScript
- MDX, Tailwind CSS with LGR brand tokens
- React Router with `basename="/savs-poli-econ"`
- `<Word>` jargon tooltips
- `<AskLaurence>` SMS button → `sms:909-753-2601`

## Run

```bash
npm install
npm run dev      # http://localhost:5173/savs-poli-econ/
npm run build
```

## Deploy

```bash
git push origin main
```

Then Settings → Pages → Source: **GitHub Actions**. The workflow at `.github/workflows/deploy.yml` builds and publishes `dist/`.

## Structure

```
src/
├── components/
│   ├── Word.tsx          # Jargon tooltip
│   ├── AskLaurence.tsx   # SMS-link button
│   └── Quiz.tsx          # Test-what-you-remember
├── content/
│   ├── part-one.mdx      # Three economic systems
│   └── part-two.mdx      # How our government works
├── pages/
│   ├── Home.tsx
│   └── PartPages.tsx     # Part One + Part Two wrappers
└── styles/global.css
```
