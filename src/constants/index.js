import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  videopoker,
  reedit,
  servo,
  codingchallenge,
  ga,
  poker,
  quantium,
} from '../assets';


export const navLinks = [
    {
        id: 'about',
        title: 'About',
      },
      {
        id: 'projects',
        title: 'Projects',
      },
      {
        id: 'contact',
        title: 'Contact',
      },
]

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'React Developer',
    icon: reactjs,
  },

];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },


  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },


];

const projects = [
  {
    id: 'project-1',
    name: 'Video-Poker',
    description: 'A remake of a classic casino game, video poker!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: videopoker,
    repo: 'https://github.com/dpockyyy/video-poker?tab=readme-ov-file',
    demo: 'https://dpockyyy.github.io/video-poker/',
  },
  {
    id: 'project-2',
    name: 'Reedit',
    description:
      'Reedit is a clone of the popular website "Reddit" with limited functionality',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: reedit,
    repo: 'https://github.com/dpockyyy/reedit',
    demo: 'https://reedit.onrender.com/posts',
  },
  {
    id: 'project-3',
    name: 'Servo App',
    description: 'Collabrative project that uses the Google Maps API to find service stations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: servo,
    repo: 'https://github.com/dpockyyy/servo_app',
    demo: 'https://servo-app-t113.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'CODE w/GOGGINS',
    description: `CODE w/GOGGINS is a coding challenge website where users can level up their coding skills with the help of AI Assistant Drill Sergeant Goggins.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: codingchallenge,
    repo: 'https://github.com/dpockyyy/codingchallenge',
    demo: 'https://codingchallenge-9222.onrender.com/',
  },
];

const experiences = [
  {
    title: 'Software Engineering Immersive Graduate',
    company_name: 'General Assembly',
    icon: ga,
    iconBg: '#797979',
    date: 'Dec 2023 - Mar 2024',
  },
  {
    title: 'Professional Poker Player',
    company_name: 'Self employed',
    icon: poker,
    iconBg: '#797979',
    date: 'Jan 2019 - Dec 2023',
  },
  {
    title: 'Data Analyst',
    company_name: 'Quantium',
    icon: quantium,
    iconBg: '#797979',
    date: 'Jan 2016 - Jun 2017',
  },
];

export { services, technologies, projects, experiences, }