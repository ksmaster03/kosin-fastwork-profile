import React, { createContext, useContext } from 'react';

export type Lang = 'en' | 'th';

const LangContext = createContext<Lang>('en');

export const LangProvider: React.FC<{ lang: Lang; children: React.ReactNode }> = ({ lang, children }) => (
  <LangContext.Provider value={lang}>{children}</LangContext.Provider>
);

export const useLang = () => useContext(LangContext);

/**
 * Thai text must never get letter-spacing: it pulls tone marks and vowels off
 * their consonants. Every tracking value in the reel goes through this.
 */
export const useTrack = () => {
  const lang = useLang();
  return (em: number) => (lang === 'th' ? 0 : em);
};
