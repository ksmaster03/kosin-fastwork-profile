# Kosin Sangtong · Fastwork profile

**English** · [ภาษาไทย](README.th.md)

![Showreel cover: Kosin Sangtong, AI Solution Architect & Full-Stack Developer](docs/kosin-showreel-hero.jpg)

Everything behind my freelance profile at **https://fastwork.com/user/kosin**: the showreel video that plays at the top of the profile, and the exact text of the profile, the 11 portfolio posts and the 5 services as they were published. The showreel is rendered from code with [Remotion](https://www.remotion.dev/), in English and Thai from one source.

## What is in here

| Path | What it is |
|---|---|
| `src/` | The showreel: 12 scenes, 1920x1080, about 95 s, English and Thai |
| `src/copy.ts` | Every on-screen string in both languages |
| `src/data.ts` | Which screenshots appear in the portfolio scenes |
| `public/brand/`, `public/shots/` | Photo, posters, certification badges, song covers, product and client screenshots |
| `fastwork/profile.md` | Bio, role and work experience text on the profile |
| `fastwork/posts/` | The 11 portfolio posts: `posts.json` (captions and tags) and the images that were uploaded |
| `fastwork/services.json` | The 5 services: descriptions, packages, prices, tags and linked posts |
| `fastwork/showreel-EN.mp4` | The English showreel as uploaded to Fastwork (9.5 MB cut) |

## Quick start

```bash
npm install
# put a background track at public/bgm.wav (not included, see Known limitations)
npx remotion studio src/index.ts                      # preview
npm run render:en                                     # out/kosin-showreel-EN.mp4
npm run render:th                                     # out/kosin-showreel-TH.mp4
```

To check a single frame quickly, bundle once and render stills from the bundle:

```bash
npx remotion bundle src/index.ts --out-dir=bundle
npx remotion still bundle Showreel-TH th.png --frame=1500
```

## How it works

- **Locked to the music.** The background track measures 107.7 BPM with the beat grid starting at 0.162 s, so one bar is 2.229 s. Every scene starts on a bar line through `BAR_F()` in `src/theme.ts`; there are no hard-coded frame numbers.
- **One source, two languages.** `Showreel-EN` and `Showreel-TH` are the same composition with a `lang` prop. Strings live in `src/copy.ts`.
- **No font loading.** English uses Segoe UI Variable and Thai uses Leelawadee UI, both system fonts on Windows 11. Loading a web font through `FontFace` hung at random in one of the parallel render tabs (three failed full renders), so there is deliberately no font loading step.
- **Thai line breaks are set by hand.** Chromium broke some Thai words in the middle (for example คลาวด์ and นักพัฒนา), so Thai strings use `\n` with `white-space: pre-line`, and Thai text never gets letter-spacing.
- **Client privacy.** Client screenshots are the `*-safe.jpg` copies with logos, company names and person names pixelated. Screens that could identify a client or a real person are not in this repository.

## Results

Measured on 17 October 2026 with `ffprobe` and `ffmpeg -af ebur128`:

| File | Duration | Loudness | Black frames | Frozen frames |
|---|---|---|---|---|
| English, 1920x1080 30 fps | 94.8 s | -18.2 LUFS | 0 | 0 |
| Thai, 1920x1080 30 fps | 94.8 s | -18.2 LUFS | 0 | 0 |

## Known limitations

- The background track (`public/bgm.wav`, "Kosin Explainer Bed") is not included. Any 108 BPM track works; a different tempo needs a new `BPM` and `GRID_OFFSET_S` in `src/theme.ts`.
- System fonts mean the look is exact only on Windows 11. On other systems the browser falls back to another sans-serif font.
- Remotion is free for individuals and companies of up to 3 people; larger companies need a Remotion company license.
- Photos, posters, song covers and screenshots are my own portfolio material. Please do not reuse them.
