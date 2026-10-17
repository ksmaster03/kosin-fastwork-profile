/**
 * Screens shown in the portfolio scenes. On-screen captions and descriptions
 * come from copy.ts by index; the `what` / `caption` here are notes only. Files live in public/.
 * Client screens use the *-safe.jpg copies, where logos, client company names
 * and person names are pixelated. Screens that could identify a client or a
 * real person were left out of this repository on purpose.
 */
export type Own = { file: string; url: string; name: string; nameTh?: string; what: string };
export type Tile = { file: string; caption: string; pos?: string };

export const OWN: Own[] = [
  { file: 'shots/own-docksync-landing.jpg', url: 'docksync.toptierdigital.space', name: 'DockSync', what: 'Dock and yard management, web + driver app' },
  { file: 'shots/own-myweekend.jpg', url: 'myweekend.fun', name: 'myWeekend', what: 'Online learning platform' },
  { file: 'shots/own-ebooks.jpg', url: 'myweekend.fun/ebooks', name: 'Ebook store', nameTh: 'ร้าน ebook', what: 'AI ebooks and templates for work' },
  { file: 'shots/own-myevent.jpg', url: 'myevent.press', name: 'myEvent', what: 'Event registration and QR tickets' },
  { file: 'shots/own-growgenius.jpg', url: 'growgenius.co.th', name: 'GrowGenius', what: 'AI and data consultancy' },
];

export const CLIENT: { desktop: Tile[]; mobile: { file: string }[] } = {
  desktop: [
    { file: 'shots/client-docksync-2.jpg', caption: 'Dock booking timeline' },
    { file: 'shots/client-docai-1-safe.jpg', caption: 'AI invoice reading with confidence scores' },
    { file: 'shots/client-docai-2-safe.jpg', caption: 'Document processing dashboard' },
    { file: 'shots/client-expense-1-safe.jpg', caption: 'Expense reports by cost center' },
    { file: 'shots/client-expense-2-safe.jpg', caption: 'Expense claims with approvals' },
    { file: 'shots/client-bi-1-safe.jpg', caption: 'Executive BI dashboard' },
  ],
  mobile: [{ file: 'shots/mobile-docksync-2-safe.jpg' }, { file: 'shots/mobile-docksync-1-safe.jpg' }],
};
