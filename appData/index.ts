// Data for portfolio
import {
  SpringBootIcon,
  JavaScriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindCSS,
  DbeaverIcon,
  GitIcon,
  JavaIcon,
  VueIcon,
  TypescriptIcon,
  backendIcon,
  frontendIcon,
  fullstackIcon,
  devopsIcon,
  databaseIcon,
  customerIcon,
} from '../utils/icons'

// Service Data
export const serviceData = [
  {
    icon: fullstackIcon,
    title: 'Full Stack Development',
    shortDescription: 'Building scalable web applications using Java/Spring and modern JS frameworks.',
  },
  {
    icon: backendIcon,
    title: 'Backend Development',
    shortDescription: 'Developing robust REST APIs and microservices with Java and Spring Boot.',
  },
  {
    icon: frontendIcon,
    title: 'Frontend Development',
    shortDescription: 'Creating responsive and interactive UIs using React, Next.js, and Vue.js.',
  },
  {
    icon: devopsIcon,
    title: 'Cloud & DevOps',
    shortDescription: 'Deploying and managing applications on AWS with CI/CD pipelines.',
  },
  {
    icon: databaseIcon,
    title: 'Database Management',
    shortDescription: 'Optimizing SQL queries and managing relational databases like RDS.',
  },
  {
    icon: customerIcon,
    title: 'Client Communication & Support',
    shortDescription:
      'Handling customer communication, requirement discussions, email support, and issue resolution.',
  },
]

// Skill List
export const skillList = [
  {
    name: 'Java',
    icon: JavaIcon,
  },
  {
    name: 'Spring Boot',
    icon: SpringBootIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Vue.js',
    icon: VueIcon,
  },
  {
    name: 'TailwindCSS',
    icon: TailwindCSS,
  },
  {
    name: 'DBeaver',
    icon: DbeaverIcon,
  },
  {
    name: 'Git',
    icon: GitIcon,
  },
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#002848', '#607b96', '#02091c', '#5565e8', '#18f2e5'],
  },
  {
    name: 'Aqua',
    colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
  },
  {
    name: 'Retro',
    colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
  },
]

export const languages = ['Nepali', 'English', 'Hindi']

export const ThemeColorBlocks = [
  { className: "rounded-t-full rounded-bl-full bg-red-400" },
  { className: "rounded-t-full rounded-br-full bg-yellow-400" },
  { className: "rounded-tl-full rounded-b-full bg-blue-400" },
  { className: "rounded-tr-full rounded-b-full bg-green-400" },
]
