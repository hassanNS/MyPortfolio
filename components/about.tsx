'use client';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';

export default function About() {
  // The functional body is the render method of the component
  const { ref } = useSectionView('About');

  return (
    // scroll-mt-28 is used to offset the scroll position when the section is linked to from the navbar
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.{' '}
        <span className="font-medium">
          I frequently use React, Next.js, Angular, Node.js, and SQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I{"'"}m not coding</span>, I enjoy
        writing, fitness, teaching, and{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
