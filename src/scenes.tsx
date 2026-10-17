import React from 'react';
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { C } from './theme';
import { Browser, Kicker, Phone, Rise, Title, useIn } from './ui';
import { CLIENT, OWN } from './data';
import { COPY } from './copy';
import { useLang, useTrack } from './lang';

const PAD = 140;
const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
const useCopy = () => COPY[useLang()];

/* ---------- 1. Intro ---------- */
export const Intro: React.FC = () => {
  const f = useCurrentFrame();
  const T = useCopy().intro;
  const track = useTrack();
  const photo = useIn(2, 26);
  const ring = interpolate(f, [0, 260], [0, 360]);
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, flexDirection: 'row', alignItems: 'center', gap: 90 }}>
      <div style={{ position: 'relative', width: 600, height: 600, flexShrink: 0, opacity: photo, transform: `translateY(${(1 - photo) * 40}px)` }}>
        <div
          style={{
            position: 'absolute',
            inset: 30,
            borderRadius: '50%',
            background: `conic-gradient(from ${ring}deg, ${C.mint}, ${C.blue}, ${C.amber}, ${C.mint})`,
            opacity: 0.9,
          }}
        />
        <div style={{ position: 'absolute', inset: 38, borderRadius: '50%', background: C.bg2 }} />
        <div style={{ position: 'absolute', inset: 38, borderRadius: '50%', overflow: 'hidden' }}>
          <Img src={staticFile('brand/kosin.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.08) translateY(18px)' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Kicker delay={10}>{T.kicker}</Kicker>
        <Rise delay={16}>
          <div style={{ fontSize: 120, fontWeight: 800, letterSpacing: track(-3), lineHeight: 1.1 }}>{T.name}</div>
          {T.sub && <div style={{ fontSize: 38, color: C.muted, marginTop: 6 }}>{T.sub}</div>}
        </Rise>
        <Rise delay={28}>
          <div style={{ fontSize: 46, fontWeight: 600, color: C.mint }}>{T.role}</div>
        </Rise>
        <Rise delay={44}>
          <div style={{ fontSize: 36, color: C.muted, lineHeight: 1.5, maxWidth: 940 }}>
            {T.line1}
            <br />
            {T.line2}
          </div>
        </Rise>
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 2. Stats ---------- */
const STAT_N = [
  { n: 20, suffix: '+' },
  { n: 22, suffix: '' },
  { n: 8, suffix: '' },
  { n: 36, suffix: '' },
];

export const Stats: React.FC = () => {
  const f = useCurrentFrame();
  const T = useCopy().stats;
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, gap: 70, justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title>{T.title}</Title>
      </div>
      <div style={{ display: 'flex', gap: 36 }}>
        {STAT_N.map((s, i) => {
          const d = 12 + i * 8;
          const p = useIn(d, 20);
          const v = Math.round(interpolate(f, [d, d + 34], [0, s.n], clamp));
          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: 380,
                borderRadius: 24,
                background: C.card,
                border: `1px solid ${C.line}`,
                padding: '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                opacity: p,
                transform: `translateY(${(1 - p) * 40}px)`,
              }}
            >
              <div style={{ fontSize: 132, fontWeight: 800, letterSpacing: -4, lineHeight: 1, color: i % 2 ? C.amber : C.mint }}>
                {v}
                {s.suffix}
              </div>
              <div style={{ fontSize: 32, color: C.text, lineHeight: 1.35, fontWeight: 500, whiteSpace: 'pre-line' }}>{T.labels[i]}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 3. Career ---------- */
const CAREER = [
  { y: '2006', co: 'Fujitsu' },
  { y: '2010', co: 'Essilor' },
  { y: '2014', co: 'Nissan' },
  { y: '2017', co: 'UTAC' },
  { y: '2019', co: 'BMW Thailand' },
  { y: '2022', co: 'BMW Leasing' },
  { y: '2025', co: 'Growgenius' },
];

export const Career: React.FC = () => {
  const f = useCurrentFrame();
  const T = useCopy().career;
  const n = CAREER.length;
  const lineP = interpolate(f, [14, 14 + n * 10], [0, 1], clamp);
  const colW = (1920 - PAD * 2) / n;
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title>{T.title}</Title>
      </div>
      <div style={{ position: 'relative', marginTop: 100, height: 360 }}>
        <div style={{ position: 'absolute', left: colW / 2, top: 98, height: 4, width: colW * (n - 1) * lineP, background: `linear-gradient(90deg, ${C.blue}, ${C.mint})`, borderRadius: 2 }} />
        {CAREER.map((c, i) => {
          const p = useIn(14 + i * 10, 16);
          const last = i === n - 1;
          return (
            <div key={c.y} style={{ position: 'absolute', left: i * colW, width: colW, top: 0, textAlign: 'center', opacity: p, transform: `translateY(${(1 - p) * 24}px)` }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: last ? C.mint : C.text }}>{c.y}</div>
              <div style={{ height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 22 }}>
                <div
                  style={{
                    width: last ? 34 : 24,
                    height: last ? 34 : 24,
                    borderRadius: '50%',
                    background: last ? C.mint : C.bg,
                    border: `4px solid ${last ? C.mint : C.blue}`,
                    boxShadow: last ? `0 0 30px ${C.mint}` : 'none',
                  }}
                />
              </div>
              <div style={{ marginTop: 26, fontSize: 32, fontWeight: 700, color: last ? C.mint : C.text }}>{c.co}</div>
              <div style={{ marginTop: 10, fontSize: 25, color: C.muted, lineHeight: 1.4, padding: '0 6px', whiteSpace: 'pre-line' }}>{T.roles[i]}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 4. Own products: list on the left, live screen on the right ---------- */
export const Own: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const T = useCopy().own;
  const th = useLang() === 'th';
  const start = 10;
  const per = Math.floor((durationInFrames - start) / OWN.length);
  const active = Math.min(OWN.length - 1, Math.max(0, Math.floor((f - start) / per)));
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, flexDirection: 'row', alignItems: 'center', gap: 70 }}>
      <div style={{ width: 560, display: 'flex', flexDirection: 'column', gap: 22, flexShrink: 0 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title size={56}>{T.title}</Title>
        <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {OWN.map((o, i) => {
            const p = useIn(12 + i * 5, 14);
            const on = i === active;
            return (
              <div
                key={o.name}
                style={{
                  opacity: p * (on ? 1 : 0.55),
                  padding: '14px 22px',
                  borderRadius: 14,
                  background: on ? 'rgba(96,255,191,0.10)' : 'transparent',
                  borderLeft: `4px solid ${on ? C.mint : 'transparent'}`,
                }}
              >
                <div style={{ fontSize: 32, fontWeight: 700, color: on ? C.mint : C.text }}>{th && o.nameTh ? o.nameTh : o.name}</div>
                <div style={{ fontSize: 23, color: C.muted, marginTop: 4 }}>{T.what[i]}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ position: 'relative', flex: 1, height: 640 }}>
        {OWN.map((o, i) => {
          const s0 = start + i * per;
          const inA = i === 0 ? 0 : s0 - 8;
          const inB = i === 0 ? 14 : s0 + 6;
          const fadeIn = interpolate(f, [inA, inB], [0, 1], clamp);
          const fadeOut = i === OWN.length - 1 ? 1 : interpolate(f, [s0 + per - 4, s0 + per + 8], [1, 0], clamp);
          return (
            <div key={o.file} style={{ position: 'absolute', inset: 0, opacity: Math.min(fadeIn, fadeOut) }}>
              <Browser src={o.file} url={o.url} width={1070} height={640} startFrame={s0} span={per + 20} pan={i % 2 ? 'down' : 'up'} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 5. Client systems: mosaic + phones ---------- */
export const Client: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const T = useCopy().client;
  const tiles = CLIENT.desktop.slice(0, 6);
  const tw = 430;
  const th = 270;
  const gap = 24;
  const gridW = tw * 3 + gap * 2;
  const zoom = interpolate(f, [0, durationInFrames], [1, 1.03]);
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title size={56}>{T.title}</Title>
      </div>
      <div style={{ position: 'relative', height: th * 2 + gap, marginTop: 56, transform: `scale(${zoom})`, transformOrigin: 'left center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(3, ${tw}px)`, gap }}>
          {tiles.map((t, i) => {
            const p = useIn(12 + i * 7, 18);
            return (
              <div key={t.file} style={{ opacity: p, transform: `translateY(${(1 - p) * 30}px) scale(${0.96 + p * 0.04})` }}>
                <div style={{ width: tw, height: th, borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.line}`, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', position: 'relative', background: '#fff' }}>
                  <Img src={staticFile(t.file)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: t.pos ?? 'top left' }} />
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: '40px 18px 14px',
                      background: 'linear-gradient(transparent, rgba(5,9,18,0.94))',
                      fontSize: 23,
                      fontWeight: 600,
                      color: C.text,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {T.captions[i]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {CLIENT.mobile.slice(0, 2).map((m, i) => {
          const p = useIn(30 + i * 12, 20);
          return (
            <div
              key={m.file}
              style={{ position: 'absolute', left: gridW + 46 + i * 50, top: -40 + i * 130, opacity: p, transform: `translateY(${(1 - p) * 60}px) rotate(${i ? -4 : 3}deg)` }}
            >
              <Phone src={m.file} width={210} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 6. AI Transformation service: 4 facts + 6-phase, 13-week plan ---------- */
export const Transform: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const T = useCopy().transform;
  const sweep = interpolate(f, [60, durationInFrames - 50], [0, T.phases.length], clamp);
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, justifyContent: 'center', gap: 46 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title size={60}>{T.title}</Title>
      </div>
      <div style={{ display: 'flex', gap: 26 }}>
        {T.chips.map((c, i) => {
          const p = useIn(12 + i * 6, 18);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 22,
                padding: '22px 26px',
                borderRadius: 20,
                background: C.card,
                border: `1px solid ${C.line}`,
                opacity: p,
                transform: `translateY(${(1 - p) * 30}px)`,
              }}
            >
              <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1, color: i % 2 ? C.amber : C.mint, minWidth: 84 }}>{c.n}</div>
              <div style={{ fontSize: 24, lineHeight: 1.35, color: C.text, whiteSpace: 'pre-line' }}>{c.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
        {T.phases.map((ph, i) => {
          const p = useIn(34 + i * 5, 16);
          const lit = interpolate(sweep, [i, i + 0.6], [0, 1], clamp);
          return (
            <div
              key={i}
              style={{
                flex: 1,
                borderRadius: 16,
                padding: '20px 22px',
                background: `rgba(96,255,191,${0.04 + lit * 0.12})`,
                border: `2px solid ${lit > 0.5 ? C.mint : C.line}`,
                opacity: p,
                transform: `translateY(${(1 - p) * 24}px)`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 19,
                    background: lit > 0.5 ? C.mint : C.blue,
                    color: '#04130C',
                    fontWeight: 800,
                    fontSize: 22,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ fontSize: 22, color: C.muted }}>{ph.wk}</div>
              </div>
              <div style={{ marginTop: 12, fontSize: 34, fontWeight: 700 }}>{ph.name}</div>
            </div>
          );
        })}
      </div>
      <Rise delay={70}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, color: C.text }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: C.amber, flexShrink: 0 }} />
          {T.foot}
        </div>
      </Rise>
    </AbsoluteFill>
  );
};

/* ---------- 7. On-device AI on ASUS ExpertBook ---------- */
export const Asus: React.FC = () => {
  const T = useCopy().asus;
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, justifyContent: 'center', gap: 54 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title size={60}>{T.title}</Title>
      </div>
      <div style={{ display: 'flex', gap: 70, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 700, flexShrink: 0 }}>
          {T.systems.map((s, i) => (
            <Rise key={i} delay={12 + i * 6} dist={20}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    border: `2px solid ${C.mint}`,
                    color: C.mint,
                    fontWeight: 800,
                    fontSize: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ fontSize: 34, fontWeight: 600 }}>{s}</div>
              </div>
            </Rise>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
            {T.metrics.map((m, i) => {
              const p = useIn(30 + i * 7, 18);
              return (
                <div
                  key={i}
                  style={{
                    borderRadius: 20,
                    background: C.card,
                    border: `1px solid ${C.line}`,
                    padding: '26px 30px',
                    opacity: p,
                    transform: `scale(${0.94 + p * 0.06})`,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, color: i % 2 ? C.amber : C.mint }}>{m.v}</div>
                    <div style={{ fontSize: 30, fontWeight: 700, color: C.text }}>{m.unit}</div>
                  </div>
                  <div style={{ fontSize: 25, color: C.muted, marginTop: 10 }}>{m.label}</div>
                </div>
              );
            })}
          </div>
          <Rise delay={64}>
            <div style={{ fontSize: 24, color: C.muted }}>{T.note}</div>
          </Rise>
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 8. On stage at AI Expo Thailand ---------- */
export const Speaking: React.FC = () => {
  const T = useCopy().speaking;
  const th = useLang() === 'th';
  const track = useTrack();
  const pv = useIn(2, 24);
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, flexDirection: 'row', alignItems: 'center', gap: 80 }}>
      <div style={{ position: 'relative', width: 700, height: 760, flexShrink: 0, opacity: pv, transform: `translateY(${(1 - pv) * 40}px)` }}>
        {th ? (
          <>
            <Img
              src={staticFile('brand/mission-stage.jpg')}
              style={{ position: 'absolute', left: 140, top: 470, width: 560, borderRadius: 14, border: `1px solid ${C.line}`, boxShadow: '0 24px 60px rgba(0,0,0,0.6)', transform: 'rotate(3deg)' }}
            />
            <Img
              src={staticFile('brand/expo-poster.jpg')}
              style={{ position: 'absolute', left: 0, top: 0, height: 640, borderRadius: 16, border: `1px solid ${C.line}`, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', transform: 'rotate(-2deg)' }}
            />
          </>
        ) : (
          <Img
            src={staticFile('brand/mission-stage.jpg')}
            style={{ position: 'absolute', left: 0, top: 183, width: 700, borderRadius: 16, border: `1px solid ${C.line}`, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', transform: 'rotate(-1.5deg)' }}
          />
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker delay={6}>{T.kicker}</Kicker>
        <Title delay={10} size={46}>
          {T.title}
        </Title>
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {T.sessions.map((s, i) => (
            <Rise key={i} delay={24 + i * 14}>
              <div style={{ borderRadius: 20, background: C.card, border: `1px solid ${C.line}`, padding: '24px 30px', borderLeft: `5px solid ${i ? C.amber : C.mint}` }}>
                <div style={{ display: 'flex', gap: 18, alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: track(2), color: i ? C.amber : C.mint }}>{s.tag}</div>
                  <div style={{ fontSize: 22, color: C.muted }}>{s.when}</div>
                </div>
                <div style={{ fontSize: 42, fontWeight: 800, marginTop: 8 }}>{s.name}</div>
                <div style={{ fontSize: 26, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{s.sub}</div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 9. Training ---------- */
export const Training: React.FC = () => {
  const T = useCopy().training;
  const p = useIn(4, 24);
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, flexDirection: 'row', alignItems: 'center', gap: 90 }}>
      <div style={{ opacity: p, transform: `translateY(${(1 - p) * 40}px) rotate(-2deg)`, flexShrink: 0 }}>
        <Img src={staticFile('brand/police-poster.jpg')} style={{ height: 740, borderRadius: 18, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', border: `1px solid ${C.line}` }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker delay={6}>{T.kicker}</Kicker>
        <Title delay={10}>{T.title}</Title>
        <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 28 }}>
          {T.items.map((t, i) => (
            <Rise key={i} delay={22 + i * 10}>
              <div style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                <div style={{ width: 14, height: 14, borderRadius: 7, background: i === 1 ? C.amber : C.mint, marginTop: 17, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.3 }}>{t.h}</div>
                  <div style={{ fontSize: 27, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{t.s}</div>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 10. AI music ---------- */
export const Music: React.FC = () => {
  const f = useCurrentFrame();
  const T = useCopy().music;
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, flexDirection: 'row', alignItems: 'center', gap: 90 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, width: 760, flexShrink: 0 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title>{T.title}</Title>
        <Rise delay={14}>
          <div style={{ fontSize: 34, color: C.muted, lineHeight: 1.5 }}>
            {T.line1}
            <br />
            {T.line2} <span style={{ color: C.mint, fontWeight: 700 }}>Kosin Finsure</span>
          </div>
        </Rise>
      </div>
      <div style={{ position: 'relative', flex: 1, height: 520 }}>
        {[1, 2, 3, 4].map((n, i) => {
          const p = useIn(8 + i * 6, 18);
          const bob = Math.sin((f + i * 20) / 22) * 6;
          return (
            <Img
              key={n}
              src={staticFile(`brand/music-${n}.jpg`)}
              style={{
                position: 'absolute',
                width: 330,
                height: 330,
                left: i * 170,
                top: 95 + (i % 2 ? 60 : -20) + bob,
                borderRadius: 16,
                boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
                opacity: p,
                transform: `translateY(${(1 - p) * 50}px) rotate(${(i - 1.5) * 4}deg)`,
              }}
            />
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ---------- 11. Certifications ---------- */
export const Certs: React.FC = () => {
  const T = useCopy().certs;
  return (
    <AbsoluteFill style={{ padding: `0 ${PAD}px`, justifyContent: 'center', gap: 70 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Kicker>{T.kicker}</Kicker>
        <Title>{T.title}</Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => {
          const p = useIn(10 + i * 4, 14);
          return <Img key={n} src={staticFile(`brand/cert0${n}.png`)} style={{ width: 180, height: 180, objectFit: 'contain', opacity: p, transform: `scale(${0.7 + p * 0.3})` }} />;
        })}
      </div>
      <Rise delay={44}>
        <div style={{ fontSize: 30, color: C.muted }}>{T.sub}</div>
      </Rise>
    </AbsoluteFill>
  );
};

/* ---------- 12. Call to action ---------- */
export const Cta: React.FC = () => {
  const f = useCurrentFrame();
  const T = useCopy().cta;
  const track = useTrack();
  const glow = 0.6 + Math.sin(f / 10) * 0.25;
  return (
    <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 34 }}>
      <Rise delay={2}>
        <div style={{ width: 200, height: 200, borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.mint}`, margin: '0 auto', background: C.bg2 }}>
          <Img src={staticFile('brand/kosin.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1) translateY(10px)' }} />
        </div>
      </Rise>
      <Rise delay={10}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: track(-2), lineHeight: 1.25 }}>
          {T.line1}
          <br />
          {T.line2}
        </div>
      </Rise>
      <Rise delay={24}>
        <div style={{ fontSize: 34, color: C.muted }}>{T.sub}</div>
      </Rise>
      <Rise delay={36}>
        <div
          style={{
            marginTop: 10,
            padding: '22px 46px',
            borderRadius: 40,
            background: C.mint,
            color: '#04130C',
            fontSize: 34,
            fontWeight: 800,
            boxShadow: `0 0 ${40 * glow}px rgba(96,255,191,${0.5 * glow})`,
          }}
        >
          {T.button}
        </div>
      </Rise>
    </AbsoluteFill>
  );
};

export const SCENE_COMPONENTS = {
  intro: Intro,
  stats: Stats,
  career: Career,
  own: Own,
  client: Client,
  transform: Transform,
  asus: Asus,
  speaking: Speaking,
  training: Training,
  music: Music,
  certs: Certs,
  cta: Cta,
};
