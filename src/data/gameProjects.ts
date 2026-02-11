import { Project } from '../types';

export const gameProjects: Project[] = [
  {
    id: 'billiardgame',
    title: 'Billiard Game',
    description: 'This game provides a unique billiards experience but with that chaotic buckshot roulette vibe — high risk, high reward style. Check out Instagram for more gameplay clips and updates!',
    images: [
      '/assets/billiardgame/ss4.png',
      '/assets/billiardgame/ss9.png',
      '/assets/billiardgame/ss10.png',
      '/assets/billiardgame/insta.png',
    ],
    links: [
      { type: 'instagram', url: 'https://www.instagram.com/lative.dev/' },
    ],
    technologies: ['Unity', 'C#', 'HLSL', 'DoTween', 'Blender'],
    date: 'Oct 2025 - Present',
    category: 'game'
  },
  {
    id: 'ontime',
    title: 'On Time',
    description: 'A rhythm-based action game developed for Magara Jam 25. We used literal MINECRAFT to build maps in this game ( ͡° ͜ʖ ͡°)',
    images: [
      '/assets/ontime/cover.png',
      '/assets/ontime/gameplay1.jpg',
      '/assets/ontime/gameplay2.png',
      '/assets/ontime/comic.png',
    ],
    links: [
      { type: 'website', url: 'https://magarajam.com/game/1999805790222812160' },
      { type: 'itchio', url: 'https://mrinin.itch.io/on-time' }
    ],
    technologies: ['Unity', 'C#', 'HLSL Shaders'],
    date: '2025-09',
    category: 'game'
  },
  {
    id: 'chicklet',
    title: 'Chicklet',
    description: 'A pixel-art puzzle platformer set inside a multidimensional machine.',
    images: [
      '/assets/chicklet/vertical_capsule.png',
      '/assets/chicklet/main_capsule.png',
      '/assets/chicklet/header_capsule.png',
      '/assets/chicklet/deck_mockup.png',
    ],
    links: [
      { type: 'steam', url: 'https://store.steampowered.com/app/2887400/Chicklet/' },
      { type: 'linkedin', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7364705316271181824' },
    ],
    technologies: ['Unity', 'C#', 'Pixel Art'],
    date: '2025-08',
    category: 'game'
  },
    {
    id: 'madbad',
    title: 'Mad Bad',
    description: 'A fast-paced 2D motorcycle runner inspired by the chaos of Hotline Miami — weave through brutal traffic, cause explosive mayhem, and embrace the RAGE!',
    images: [
      '/assets/madbad/cover.png',
      '/assets/madbad/gameplay1.png',
      '/assets/madbad/gameplay2.png',
      '/assets/madbad/gameplay3.png',
    ],
    links: [
      { type: 'itchio', url: 'https://lativegames.itch.io/mad-bad' },
    ],
    technologies: ['Unity', 'C#', 'Pixel Art'],
    date: '',
    category: 'game'
  },
  {
    id: '2248',
    title: '2248',
    description: '2248 replica that I developed for a customer in Bionluk. The name of the game is Two Two.',
    images: [
      '/assets/2248/gameplay1.jpeg',
      '/assets/2248/gameplay2.jpeg',
      '/assets/2248/gameplay3.jpeg',
    ],
    links: [
      { type: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.cobs.twotwo' },
    ],
    technologies: ['Unity', 'C#', 'Google AdMob'],
    date: '2024-04',
    category: 'game'
  },
  {
    id: 'bolt-puzzle',
    title: 'Bolt Puzzle',
    description: 'A simple puzzle game I developed for a client on Bionluk. The aim of the game is to remove the bolts and clean the wooden plaques.',
    images: [
      '/assets/boltpuzzle/cover.png',
      '/assets/boltpuzzle/gameplay1.png',
      '/assets/boltpuzzle/gameplay2.png',
    ],
    links: [
      { type: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.labrosgames.boltpuzzle' },
    ],
    technologies: ['Unity', 'C#', 'Google AdMob'],
    date: '2024-01',
    category: 'game'
  },
  {
    id: 'crossword',
    title: 'Crossword',
    description: 'I developed this game for a client through Bionluk. I managed the software and design. I also developed a new file format that allows crosswords to be adjusted in this game.',
    images: [
      '/assets/crossword/gameplay1.png',
      '/assets/crossword/gameplay2.png',
      '/assets/crossword/gameplay3.png',
      '/assets/crossword/cover.png',
    ],
    links: [
      { type: 'googleplay', url: 'https://play.google.com/store/apps/details?id=com.bahadirozden.crossword' },
    ],
    technologies: ['Unity', 'C#', 'Google AdMob', "Firebase"],
    date: '2023-11',
    category: 'game'
  }
];
