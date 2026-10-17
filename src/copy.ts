/**
 * Every on-screen string, in English and Thai. Facts come from the CV, the
 * speaker profile, and the source documents noted next to each block. Client
 * names appear only where the user asked for that work to be shown.
 */
import type { Lang } from './lang';

type Copy = {
  intro: { kicker: string; name: string; sub?: string; role: string; line1: string; line2: string };
  stats: { kicker: string; title: string; labels: [string, string, string, string] };
  career: { kicker: string; title: string; roles: string[] };
  own: { kicker: string; title: string; what: string[] };
  client: { kicker: string; title: string; captions: string[] };
  transform: {
    kicker: string;
    title: string;
    chips: { n: string; label: string }[];
    phases: { wk: string; name: string }[];
    foot: string;
  };
  asus: { kicker: string; title: string; systems: string[]; metrics: { v: string; unit: string; label: string }[]; note: string };
  speaking: {
    kicker: string;
    title: string;
    sessions: { tag: string; when: string; name: string; sub: string }[];
  };
  training: { kicker: string; title: string; items: { h: string; s: string }[] };
  music: { kicker: string; title: string; line1: string; line2: string };
  certs: { kicker: string; title: string; sub: string };
  cta: { line1: string; line2: string; sub: string; button: string };
};

export const COPY: Record<Lang, Copy> = {
  en: {
    intro: {
      kicker: "HELLO, I'M",
      name: 'Kosin Sangtong',
      role: 'AI Solution Architect & Full-Stack Developer',
      line1: '20+ years leading enterprise IT.',
      line2: 'Now I build real business systems with AI.',
    },
    stats: {
      kicker: 'BY THE NUMBERS',
      title: 'Experience you can count on',
      labels: ['Years in enterprise IT', 'People led across 3 countries', 'AI and cloud certifications', 'Ebooks published with ISBN'],
    },
    career: {
      kicker: 'CAREER',
      title: 'From programmer to Group IT leader',
      roles: [
        'Programmer to SAP Specialist',
        'ERP Consultant and PM',
        'Information System Manager',
        'IT Section Manager',
        'IT PM and Solution Architect',
        'Group IT Manager, AI Champion',
        'Founder and CEO',
      ],
    },
    own: {
      kicker: 'WHAT I BUILD',
      title: 'My own products, live in production',
      what: [
        'Dock and yard management, web + driver app',
        'Online learning platform',
        'AI ebooks and templates for work',
        'Event registration and QR tickets',
        'AI and data consultancy',
      ],
    },
    client: {
      kicker: 'BUILT FOR CLIENTS',
      title: 'Business systems running for real teams',
      captions: [
        'Dock booking timeline',
        'AI invoice reading with confidence scores',
        'Document processing dashboard',
        'Expense reports by cost center',
        'Expense claims with approvals',
        'Executive BI dashboard',
      ],
    },
    // Source: AI Transformation proposal deck, slides 2 and 7. No client name on screen.
    transform: {
      kicker: 'AI TRANSFORMATION',
      title: 'Bring AI into the whole company in 90 days',
      chips: [
        { n: '5', label: 'business functions, from CMO to CFO' },
        { n: '9', label: 'core processes mapped end to end' },
        { n: '5', label: 'quick wins on systems you already own' },
        { n: '90', label: 'days, with an owner for every week' },
      ],
      phases: [
        { wk: 'Weeks 1-2', name: 'Prepare' },
        { wk: 'Weeks 3-5', name: 'Survey' },
        { wk: 'Weeks 6-7', name: 'Set goals' },
        { wk: 'Week 8', name: 'Select' },
        { wk: 'Weeks 9-12', name: 'Build' },
        { wk: 'Week 13', name: 'Measure' },
      ],
      foot: 'Plus a 6-week AI Champion Challenge that ends in a Demo Day',
    },
    // Source: Demo Story - ASUS X9 v1.2, slides 2-4.
    asus: {
      kicker: 'ON-DEVICE AI',
      title: '5 AI systems on one ASUS ExpertBook, fully offline',
      systems: ['ERP running on the laptop', 'Songs from a Thai prompt', 'Chat that cites your documents', 'Images from a Thai description', 'Voice assistant that speaks Thai'],
      metrics: [
        { v: '43', unit: 'tok/s', label: 'assistant reply speed' },
        { v: '1.7', unit: 's', label: 'to the first spoken word' },
        { v: '8.6', unit: 's', label: 'per generated image' },
        { v: '31', unit: 's', label: 'to compose a 60 s song' },
      ],
      note: 'Measured on the machine with every service running',
    },
    // Source: AI Expo master class poster + Mission Possible promo v02.
    speaking: {
      kicker: 'ON STAGE',
      title: 'AI Expo Thailand 2026\nChallenger Hall, Muang Thong Thani',
      sessions: [
        {
          tag: 'MASTER CLASS',
          when: '5 Nov 2026 · 14:00-15:00',
          name: 'The Invisible Dispatcher',
          sub: 'AI agents that run your factory and fleet',
        },
        {
          tag: 'ASUS EXPERTBOOK ULTRA SHOWCASE',
          when: '5 Nov 2026 · 15:20-16:10',
          name: 'Mission Possible',
          sub: 'Secure AI for critical missions, with ASUS Business Thailand',
        },
      ],
    },
    training: {
      kicker: 'TRAINING',
      title: 'I teach teams to work with AI',
      items: [
        { h: 'TAK Products and Services', s: 'In-house Claude course plus Claude Team setup' },
        { h: 'Saensuk Police Station, Chonburi', s: 'Police officers using AI at their desks in one day' },
        { h: 'Claude AI for Work · Claude Code for Developers', s: 'Courses for office teams and software teams' },
      ],
    },
    music: { kicker: 'AI MUSIC', title: '10 releases on Spotify', line1: 'Written and produced with AI,', line2: 'released as' },
    certs: { kicker: 'CERTIFIED', title: '8 AI and cloud certifications', sub: 'Anthropic · AWS · Microsoft · Intel and more' },
    cta: {
      line1: 'Need a system built,',
      line2: 'or your team trained in AI?',
      sub: 'Web apps · Mobile apps · AWS cloud · AI training',
      button: 'Message me here on Fastwork',
    },
  },

  th: {
    intro: {
      kicker: 'สวัสดีครับ ผม',
      name: 'โกสินทร์ แสงทอง',
      sub: 'Kosin Sangtong',
      role: 'ที่ปรึกษาและนักพัฒนาระบบ AI ครบวงจร',
      line1: 'ทำงานไอทีองค์กรมากว่า 20 ปี',
      line2: 'วันนี้สร้างระบบธุรกิจที่ใช้งานได้จริงด้วย AI',
    },
    stats: {
      kicker: 'ตัวเลขที่ผ่านมา',
      title: 'ประสบการณ์ที่นับได้จริง',
      labels: ['ปีในงานไอทีองค์กร', 'คนในทีมที่ดูแล\nใน 3 ประเทศ', 'ใบรับรองด้าน AI\nและคลาวด์', 'ebook ภาษาไทย\nที่ได้เลข ISBN'],
    },
    career: {
      kicker: 'เส้นทางอาชีพ',
      title: 'จากโปรแกรมเมอร์ สู่ผู้นำไอทีระดับกลุ่มบริษัท',
      roles: [
        'โปรแกรมเมอร์\nสู่ผู้เชี่ยวชาญ SAP',
        'ที่ปรึกษา ERP\nและผู้จัดการโครงการ',
        'ผู้จัดการ\nระบบสารสนเทศ',
        'ผู้จัดการแผนกไอที',
        'ผู้จัดการโครงการไอที\nและ Solution Architect',
        'IT Manager ทั้งกลุ่ม\nและ AI Champion',
        'ผู้ก่อตั้งและ CEO',
      ],
    },
    own: {
      kicker: 'ผลงานของผมเอง',
      title: 'ระบบที่ผมสร้างเอง\nใช้งานจริงแล้ว',
      what: [
        'จัดคิวรถเข้าคลัง เว็บ + แอปคนขับ',
        'แพลตฟอร์มเรียนออนไลน์',
        'ร้าน ebook และเทมเพลต AI สำหรับคนทำงาน',
        'ระบบลงทะเบียนงานอีเวนต์ และตั๋ว QR',
        'บริษัทที่ปรึกษาด้าน AI และข้อมูล',
      ],
    },
    client: {
      kicker: 'ระบบที่ทำให้ลูกค้า',
      title: 'ระบบธุรกิจที่ทีมงานใช้อยู่ทุกวัน',
      captions: [
        'ตารางจองช่องโหลดสินค้า',
        'AI อ่านใบกำกับภาษี\nพร้อมค่าความมั่นใจ',
        'แดชบอร์ดติดตามเอกสาร',
        'รายงานค่าใช้จ่ายตามศูนย์ต้นทุน',
        'ใบเบิกพร้อมสายอนุมัติ',
        'แดชบอร์ด BI สำหรับผู้บริหาร',
      ],
    },
    transform: {
      kicker: 'บริการ AI Transformation',
      title: 'พาทั้งองค์กรเริ่มใช้ AI ได้จริงใน 90 วัน',
      chips: [
        { n: '5', label: 'สายงานหลัก\nตั้งแต่ CMO ถึง CFO' },
        { n: '9', label: 'ขั้นตอนหลักของธุรกิจ\nไล่ครบต้นจนจบ' },
        { n: '5', label: 'Quick Win ใช้ระบบเดิม\nไม่ต้องลงทุนใหม่' },
        { n: '90', label: 'วัน มีผู้รับผิดชอบ\nทุกสัปดาห์' },
      ],
      phases: [
        { wk: 'สัปดาห์ 1-2', name: 'เตรียมการ' },
        { wk: 'สัปดาห์ 3-5', name: 'สำรวจ' },
        { wk: 'สัปดาห์ 6-7', name: 'ตั้งเป้าหมาย' },
        { wk: 'สัปดาห์ 8', name: 'คัดเลือก' },
        { wk: 'สัปดาห์ 9-12', name: 'ลงมือ' },
        { wk: 'สัปดาห์ 13', name: 'วัดผล' },
      ],
      foot: 'ปิดท้ายด้วย AI Champion Challenge 6 สัปดาห์ แข่งกันโชว์ผลงานจริงในวัน Demo Day',
    },
    asus: {
      kicker: 'AI บนเครื่อง',
      title: 'AI 5 ระบบ บน ASUS ExpertBook เครื่องเดียว ไม่ต้องต่อเน็ต',
      systems: ['ERP ที่รันบนโน้ตบุ๊ก', 'แต่งเพลงจากคำสั่งภาษาไทย', 'แชทที่อ้างอิงเอกสารได้', 'สร้างภาพจากคำบรรยายไทย', 'ผู้ช่วยเสียงที่พูดไทย'],
      metrics: [
        { v: '43', unit: 'tok/s', label: 'ความเร็วตอบของผู้ช่วย' },
        { v: '1.7', unit: 'วินาที', label: 'ได้ยินเสียงคำแรก' },
        { v: '8.6', unit: 'วินาที', label: 'ต่อภาพหนึ่งใบ' },
        { v: '31', unit: 'วินาที', label: 'แต่งเพลงยาว 60 วินาที' },
      ],
      note: 'วัดจริงบนเครื่อง ขณะเปิดทุกบริการพร้อมกัน',
    },
    speaking: {
      kicker: 'ขึ้นเวที',
      title: 'AI Expo Thailand 2026\nChallenger Hall เมืองทองธานี',
      sessions: [
        {
          tag: 'MASTER CLASS',
          when: '5 พ.ย. 2026 · 14.00-15.00 น.',
          name: 'The Invisible Dispatcher',
          sub: 'AI Agent ผู้สั่งการเบื้องหลังโรงงานและขนส่ง',
        },
        {
          tag: 'ASUS EXPERTBOOK ULTRA SHOWCASE',
          when: '5 พ.ย. 2026 · 15.20-16.10 น.',
          name: 'Mission Possible',
          sub: 'AI ที่ปลอดภัยสำหรับงานสำคัญ ร่วมกับทีม ASUS Business Thailand',
        },
      ],
    },
    training: {
      kicker: 'งานสอน',
      title: 'สอนทีมให้ทำงานกับ AI ได้จริง',
      items: [
        { h: 'TAK Products and Services', s: 'อบรม Claude ในองค์กร พร้อมตั้งค่า Claude Team ให้ทีม' },
        { h: 'สภ.แสนสุข จ.ชลบุรี', s: 'ข้าราชการตำรวจใช้ AI กับงานบนโต๊ะได้ในวันเดียว' },
        { h: 'หลักสูตร Claude AI และ Claude Code', s: 'สำหรับทีมสำนักงาน และทีมพัฒนาซอฟต์แวร์' },
      ],
    },
    music: { kicker: 'เพลง AI', title: '10 ผลงานบน Spotify', line1: 'แต่งและทำเพลงด้วย AI', line2: 'ในชื่อศิลปิน' },
    certs: { kicker: 'ใบรับรอง', title: 'ใบรับรองด้าน AI และคลาวด์ 8 ใบ', sub: 'Anthropic · AWS · Microsoft · Intel และอื่น ๆ' },
    cta: {
      line1: 'อยากได้ระบบสักตัว',
      line2: 'หรืออยากให้ทีมใช้ AI เป็น?',
      sub: 'เว็บแอป · แอปมือถือ · AWS · อบรม AI',
      button: 'ทักมาคุยกันใน Fastwork ได้เลย',
    },
  },
};
