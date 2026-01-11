import { Project } from '../types';

export const otherProjects: Project[] = [
  {
    id: 'opengl-drawing',
    title: 'Drawing Tool with OpenGL in C',
    description: 'A simple and fun drawing tool built with C and OpenGL that uses the GPU to render strokes. Instead of just pixels, lines are drawn using geometry for smooth and fast rendering results.',
    images: [
      '/assets/opengl-drawing/videogif.gif'
    ],
    links: [
      { type: 'github', url: 'https://github.com/LatifY/opengl-draw-renderer' }
    ],
    technologies: ['C', 'OpenGL', 'CMake', 'GPU Programming'],
    date: 'Dec 2025 - PRESENT 🛠️',
    category: 'other'
  },
  {
    id: 'hrms',
    title: 'Human Resources Management System',
    description: 'A Full Stack HR Management System developed during Engin Demiroğ\'s software camp. Built with a Java Spring Boot backend and React frontend, this project implements a layered architecture covering job advertisements, employers, and candidates management.',
    images: [
      '/assets/hrms/info1.png',
      '/assets/hrms/info2.jpg'
    ],
    links: [
      { type: 'github', url: 'https://github.com/LatifY/HRMS' },
      { type: 'github', url: 'https://github.com/LatifY/hrms-frontend' }
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Swagger'],
    date: 'May 2021 - Jul 2021',
    category: 'other'
  },
  {
    id: 'game-architecture',
    title: 'GameArchitecture',
    description: 'A comprehensive Unity package designed to simplify game development. It includes essential systems like Game Manager, Audio Manager, Save/Load System, and Localization, providing developers with robust technical tools out of the box.',
    images: [
      '/assets/gamearchitecture/icon.png',
      '/assets/gamearchitecture/github1.png',
      '/assets/gamearchitecture/github2.png'
    ],
    links: [
      { type: 'github', url: 'https://github.com/LatifY/GameArchitecture' }
    ],
    technologies: ['Unity', 'C#', 'Package Development', 'Editor Tools'],
    date: 'Apr 2021 - Jul 2021',
    category: 'other'
  }
];
