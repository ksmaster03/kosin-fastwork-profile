import React from 'react';
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { C, FONT, FONT_TH, OVERLAP } from './theme';
import { useLang, useTrack } from './lang';

const ease = Easing.bezier(0.22, 1, 0.36, 1);

/** 0 to 1 over `len` frames starting at `start`, eased out. */
export const useIn = (start: number, len = 18) => {
  const f = useCurrentFrame();
  return interpolate(f, [start, start + len], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: ease,
  });
};

/** Rises and fades in at `delay` frames into the scene. */
export const Rise: React.FC<{ delay?: number; dist?: number; children: React.ReactNode; style?: React.CSSProperties }> = ({
  delay = 0,
  dist = 28,
  children,
  style,
}) => {
  const p = useIn(delay);
  return (
    <div style={{ opacity: p, transform: `translateY(${(1 - p) * dist}px)`, ...style }}>{children}</div>
  );
};

/**
 * Scene shell. Fades in over the first OVERLAP frames (unless first) and out
 * over the last OVERLAP frames (unless last), so neighbours crossfade on top of
 * the shared background and the screen is never empty.
 */
export const Scene: React.FC<{ first?: boolean; last?: boolean; children: React.ReactNode }> = ({ first, last, children }) => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fin = first ? 1 : interpolate(f, [0, OVERLAP], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fout = last
    ? 1
    : interpolate(f, [durationInFrames - OVERLAP, durationInFrames], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const drift = interpolate(f, [0, durationInFrames], [1.0, 1.015]);
  const font = useLang() === 'th' ? FONT_TH : FONT;
  return (
    <AbsoluteFill style={{ opacity: Math.min(fin, fout), transform: `scale(${drift})`, fontFamily: font, color: C.text }}>
      {children}
    </AbsoluteFill>
  );
};

/** Small mint section label with a rule, top-left of most scenes. */
export const Kicker: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const p = useIn(delay, 16);
  const th = useLang() === 'th';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, opacity: p }}>
      <div style={{ width: 56 * p, height: 3, background: C.mint, borderRadius: 2 }} />
      <div style={{ fontSize: th ? 28 : 24, fontWeight: 700, letterSpacing: th ? 0 : 4, color: C.mint }}>{children}</div>
    </div>
  );
};

export const Title: React.FC<{ children: React.ReactNode; delay?: number; size?: number }> = ({ children, delay = 4, size = 64 }) => {
  const track = useTrack();
  const th = useLang() === 'th';
  return (
    <Rise delay={delay}>
      <div style={{ fontSize: size, fontWeight: 800, lineHeight: th ? 1.3 : 1.1, letterSpacing: track(-1), whiteSpace: 'pre-line' }}>{children}</div>
    </Rise>
  );
};

/** Slow drifting glows behind everything. Lives outside the scenes. */
export const Backdrop: React.FC = () => {
  const f = useCurrentFrame();
  const a = f / 30;
  const g1x = 30 + Math.sin(a * 0.18) * 12;
  const g1y = 35 + Math.cos(a * 0.15) * 10;
  const g2x = 75 + Math.cos(a * 0.12) * 10;
  const g2y = 70 + Math.sin(a * 0.2) * 8;
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(900px 700px at ${g1x}% ${g1y}%, rgba(96,255,191,0.10), transparent 70%),
          radial-gradient(1000px 800px at ${g2x}% ${g2y}%, rgba(91,140,255,0.14), transparent 70%),
          linear-gradient(160deg, ${C.bg2} 0%, ${C.bg} 60%)`,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${C.line}33 1px, transparent 1px), linear-gradient(90deg, ${C.line}33 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        }}
      />
    </AbsoluteFill>
  );
};

/**
 * Desktop browser mock with a slow Ken Burns inside. `pan` picks the drift
 * direction so neighbouring frames don't all move the same way.
 */
export const Browser: React.FC<{
  src: string;
  url: string;
  width: number;
  height: number;
  startFrame?: number;
  span?: number;
  pan?: 'up' | 'down' | 'left' | 'right';
  style?: React.CSSProperties;
  objectPosition?: string;
}> = ({ src, url, width, height, startFrame = 0, span = 150, pan = 'up', style, objectPosition = 'top center' }) => {
  const f = useCurrentFrame();
  const t = interpolate(f, [startFrame, startFrame + span], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const s = 1.04 + t * 0.05;
  const d = t * 22;
  const tr = { up: `translateY(${-d}px)`, down: `translateY(${d - 22}px)`, left: `translateX(${-d}px)`, right: `translateX(${d - 22}px)` }[pan];
  const bar = 40;
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 16,
        overflow: 'hidden',
        background: '#0E1628',
        border: `1px solid ${C.line}`,
        boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.03)',
        ...style,
      }}
    >
      <div style={{ height: bar, display: 'flex', alignItems: 'center', gap: 9, padding: '0 16px', background: '#18233D' }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <div key={c} style={{ width: 12, height: 12, borderRadius: 6, background: c }} />
        ))}
        <div
          style={{
            marginLeft: 14,
            flex: 1,
            height: 24,
            borderRadius: 12,
            background: '#0E1628',
            color: C.muted,
            fontSize: 15,
            display: 'flex',
            alignItems: 'center',
            padding: '0 14px',
            fontFamily: FONT,
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ width, height: height - bar, overflow: 'hidden' }}>
        <Img
          src={staticFile(src)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition, transform: `scale(${s}) ${tr}`, transformOrigin: 'center top' }}
        />
      </div>
    </div>
  );
};

/** Phone mock for portrait app screenshots. */
export const Phone: React.FC<{ src: string; width: number; style?: React.CSSProperties }> = ({ src, width, style }) => {
  const h = width * 2.05;
  return (
    <div
      style={{
        width,
        height: h,
        borderRadius: width * 0.14,
        padding: width * 0.035,
        background: '#05080F',
        border: `2px solid ${C.line}`,
        boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
        ...style,
      }}
    >
      <div style={{ width: '100%', height: '100%', borderRadius: width * 0.11, overflow: 'hidden', background: '#000' }}>
        <Img src={staticFile(src)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
      </div>
    </div>
  );
};
