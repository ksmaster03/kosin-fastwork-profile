import React from 'react';
import { Composition } from 'remotion';
import { Showreel } from './Showreel';
import { W, H, FPS, DURATION_F } from './theme';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Showreel-EN" component={Showreel} durationInFrames={DURATION_F} fps={FPS} width={W} height={H} defaultProps={{ lang: 'en' as const }} />
    <Composition id="Showreel-TH" component={Showreel} durationInFrames={DURATION_F} fps={FPS} width={W} height={H} defaultProps={{ lang: 'th' as const }} />
  </>
);
