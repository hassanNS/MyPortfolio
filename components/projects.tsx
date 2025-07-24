'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionView('Projects', 0.5);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center px-4 py-16 scroll-mt-28"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
