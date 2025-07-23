import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import profilePic from '@/public/profile_pic.jpeg';
import mutanabbi from '@/public/mutanabbi.png';
import adabai from '@/public/adabai.svg';
import poebookImg from '@/public/poeBook.webp';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const; // make everything readonly and these specific strings (more precise)

export const experiencesData = [
  {
    title: 'Senior Software Engineer @ PSEG',
    location: 'Newark, NJ',
    description: 'Lead and implement features in .NET and C# for pseg.com',
    icon: React.createElement(CgWorkAlt), //React.createElement(LuGraduationCap),
    date: '2024-Present',
  },
  {
    title: 'Full Stack Engineer @ Comcast',
    location: 'Philadelphia, PA',
    description:
      'Migrated a Java Timeline-API, a central microservice for consuming and producing event data managing billions of customer events, to a Node.js/express API in Typescript and deployed application to Aws beanstalk with AWS API gateway in front and using AWS load balancer',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full Stack Engineer @ NBC & Comcast',
    location: 'Houston, TX',
    description:
      'Designed and built Angular application for tracking NBC assets and managed CICD pipelines\
      via Docker and Kubernetes.',
    icon: React.createElement(FaReact),
    date: '2017 - 2019',
  },
  {
    title: 'Graduated From Drexel University',
    location: 'Philadelphia, PA',
    description: 'Software Engineering B.S/English, Cumm Lade',
    icon: React.createElement(FaReact),
    date: '2017',
  },
] as const;

export const projectsData = [
  {
    title: 'Mutanabbi',
    description:
      'AI powered web app for improving Arabic composition with grammar and spelling corrections at the click of a button.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'Gemini API',
      'OpenAI API',
    ],
    imageUrl: mutanabbi,
  },
  {
    title: 'Adab AI',
    description:
      'Arabic Composition web app that gives your prompts to write and improve your Arabic.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Turso', 'OpenAI API'],
    imageUrl: adabai,
  },
  {
    title: 'Pearls in the Deep',
    description:
      'My first book. Accessible and contemporary treatment of the problem of evil.',
    tags: [
      'Creative Writing',
      'Philosophy',
      'Islamic Studies',
      'Arabic',
      'Amazon KDP',
      'Public Speaking',
      'Podcasting',
    ],
    imageUrl: poebookImg,
  },
] as const;

export const skillsData = [
  'Azure CI/CD',
  'Aws',
  'Java',
  'Java Spring',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Sql',
  'Redux',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
  'GraphQL',
  'REST APIs',
  'AI Wrapping',
  'AI Prompting',
  'LLM Engineering',
  'Machine Learning',
  'Functional Programming',
] as const;
