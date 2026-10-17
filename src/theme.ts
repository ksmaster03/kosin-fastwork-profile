/**
 * Kosin Sangtong showreel: 1920x1080 for the Fastwork profile "show reel" slot.
 *
 * Timing is locked to the music. "Kosin Explainer Bed" measures 107.7 BPM with the
 * beat grid starting at 0.162s, so one 4/4 bar is 2.229s. Every scene starts on
 * a bar line; BAR_F() is the single source of truth, never a hard-coded frame.
 */

export const W = 1920;
export const H = 1080;
export const FPS = 30;

/** Measured from public/bgm.wav with librosa beat_track. */
export const BPM = 107.7;
export const GRID_OFFSET_S = 0.162;
export const BAR_S = (4 * 60) / BPM;
export const BAR_F = (i: number) => Math.round((GRID_OFFSET_S + i * BAR_S) * FPS);

/** Frames two neighbouring scenes overlap, so a cut is always a crossfade. */
export const OVERLAP = 12;

export const C = {
  bg: '#0A1020',
  bg2: '#111A2E',
  card: '#152038',
  line: '#24324F',
  text: '#F5F7FA',
  muted: '#A9B4C2',
  mint: '#60FFBF',
  amber: '#FFB547',
  blue: '#5B8CFF',
};

/**
 * System font, no loading step. Inter loaded through FontFace (by URL and even
 * embedded as base64) hung at random in one parallel render tab on three full
 * renders, so the reel uses Segoe UI Variable, which ships with Windows 11.
 */
export const FONT = "'Segoe UI Variable Display', 'Segoe UI', Arial, sans-serif";

/**
 * Thai version: Leelawadee UI is a Windows system font with real Thai glyphs and
 * correct mark positioning in Chromium, so it also needs no loading step.
 */
export const FONT_TH = "'Leelawadee UI', 'Segoe UI Variable Display', Tahoma, sans-serif";

/** Scene plan in bars. Order here is the order on screen. */
export const PLAN = [
  { id: 'intro', bars: 4 },
  { id: 'stats', bars: 3 },
  { id: 'career', bars: 3 },
  { id: 'own', bars: 5 },
  { id: 'client', bars: 4 },
  { id: 'transform', bars: 5 },
  { id: 'asus', bars: 4 },
  { id: 'speaking', bars: 4 },
  { id: 'training', bars: 3 },
  { id: 'music', bars: 2 },
  { id: 'certs', bars: 2 },
  { id: 'cta', bars: 3 },
] as const;

export type SceneId = (typeof PLAN)[number]['id'];

export const SCENES = (() => {
  let bar = 0;
  return PLAN.map((s) => {
    const from = s.id === 'intro' ? 0 : BAR_F(bar);
    const to = BAR_F(bar + s.bars);
    bar += s.bars;
    return { ...s, from, dur: to - from };
  });
})();

export const TOTAL_BARS = PLAN.reduce((n, s) => n + s.bars, 0);
/** One extra second after the last bar so the music tail and fade can breathe. */
export const DURATION_F = BAR_F(TOTAL_BARS) + FPS;
