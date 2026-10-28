import { Project } from '../types';

export const webProjects: Project[] = [
  {
    id: 'clonevoice',
    title: 'CloneVoice.app',
    description: 'AI Voice Cloning web application that allows users to create custom AI voices from text or audio samples.',
    images: [
      '/assets/clonevoice/cover.png',
      '/assets/clonevoice/1.png',
      '/assets/clonevoice/2.png',
      '/assets/clonevoice/3.png'
    ],
    links: [
      { type: 'live', url: 'https://clonevoice.app' },
      { type: 'github', url: 'https://github.com/LatifY/clone-voice' }
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Fal.AI', 'Supabase'],
    date: '2025',
    category: 'web'
  },
  {
    id: 'language-learning',
    title: 'Languli',
    description: 'AI Language Learning web application that helps users learn new languages through interactive video transcriptions and AI chatbots.',
    images: [
      '/assets/language-learning/cover.png',
      '/assets/language-learning/1.jpg',
      '/assets/language-learning/2.jpg',
      '/assets/language-learning/3.png'
    ],
    links: [
    ],
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Supabase'],
    date: '2025',
    category: 'web'
  },
  {
    id: 'zelzele',
    title: 'Zelzele',
    description: 'In 2024 February 6 an earthquake struck Turkey, causing widespread destruction and loss of life. Zelzele is a web application that provides lost animals information and helps connect owners with their lost pets.',
    images: [
      '/assets/zelzele/cover.jpeg',
      '/assets/zelzele/1.jpeg',
    ],
    links: [
      { type: 'live', url: 'https://zelzele.netlify.app/' },
      { type: 'linkedin', url: 'https://www.linkedin.com/posts/latifyilmaz_deprem-taesrkiyedeprem-zelzele-activity-7029914292858630144-JII-/' },
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Firebase'],
    date: '2024-02',
    category: 'web'
  },
  {
    id: 'trackovid',
    title: 'Trackovid - COVID-19 Tracker',
    description: 'A web application that provides real-time information about COVID-19 statistics and trends.',
    images: [
      '/assets/trackovid/cover.png',
      '/assets/trackovid/1.png',
    ],
    links: [
      { type: 'live', url: 'https://trackovid19.netlify.app/' },
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Disease.sh API'],
    date: '2021',
    category: 'web'
  },
];
