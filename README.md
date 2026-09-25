# Shachi Shriwastava — Newspaper Portfolio

A single self-contained page (`index.html`) styled like a black-and-white newspaper front page/puzzle page. No build step, no dependencies — just plain HTML, CSS, and JavaScript.

## Run it locally

Easiest option — just open the file directly:

```
open index.html
```

(On Windows: double-click `index.html`, or `start index.html` from the command line.)

If you'd rather serve it over a local URL (recommended if you plan to test things like copy-to-clipboard, which some browsers restrict on `file://` URLs):

```
npx serve .
```

or, with Python:

```
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser.

## Deploy to Vercel

This is a static site, so it deploys with zero configuration.

**Option A — Vercel CLI**

```
npm i -g vercel
vercel
```

Follow the prompts (link or create a project, accept the defaults). Vercel will detect it as a static site automatically since there's no framework or build step.

**Option B — GitHub + Vercel dashboard**

1. Push this folder to a GitHub repo.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Leave the framework preset as "Other" and the build command empty — there's nothing to build.
4. Deploy.

Either way, Vercel just serves `index.html` as-is.

## Notes

- Fonts (Abril Fatface, Playfair Display, PT Serif, Special Elite, Bangers, Permanent Marker) load from Google Fonts via the `@import` at the top of the `<style>` block — you'll need an internet connection for them to render correctly, even locally.
- Everything — the Code Jumble, Bug Hunt word search, Wordle clone, and cryptic clues — runs in plain JavaScript with no external libraries, so there's nothing else to install.
- To update content later (projects, blog links, games, etc.), just edit `index.html` directly and re-deploy (`vercel --prod` for a production deploy after the first one).
