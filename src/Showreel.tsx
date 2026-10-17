import React from 'react';
import { AbsoluteFill, Audio, interpolate, Sequence, staticFile } from 'remotion';
import { SCENE_COMPONENTS } from './scenes';
import { DURATION_F, FPS, OVERLAP, SCENES } from './theme';
import { Backdrop, Scene } from './ui';
import { Lang, LangProvider } from './lang';

/**
 * BGM sits at about -18 LUFS: the bed measures -14.5 LUFS, so 0.67 (-3.5 dB)
 * keeps it gentle with no voice-over on top. Half-second fade in, 2.5 s fade out.
 */
const BGM_GAIN = 0.67;

export const Showreel: React.FC<{ lang: Lang }> = ({ lang }) => (
  <LangProvider lang={lang}>
    <AbsoluteFill>
      <Backdrop />
      {SCENES.map((s, i) => {
        const Comp = SCENE_COMPONENTS[s.id];
        const first = i === 0;
        const last = i === SCENES.length - 1;
        const dur = last ? DURATION_F - s.from : s.dur + OVERLAP;
        return (
          <Sequence key={s.id} from={s.from} durationInFrames={dur} name={s.id}>
            <Scene first={first} last={last}>
              <Comp />
            </Scene>
          </Sequence>
        );
      })}
      <Audio
        src={staticFile('bgm.wav')}
        volume={(f) =>
          BGM_GAIN *
          interpolate(f, [0, FPS * 0.5, DURATION_F - FPS * 2.5, DURATION_F - 2], [0, 1, 1, 0], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          })
        }
      />
    </AbsoluteFill>
  </LangProvider>
);
