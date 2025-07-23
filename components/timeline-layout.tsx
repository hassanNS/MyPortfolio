'use client';
import { TimelineItemType } from '@/lib/types';
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from './timeline';
import { experiencesData } from '@/lib/data';
import SectionHeading from './section-heading';
import { useSectionView } from '@/lib/hooks';

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Vercel was founded in SF, USA',
    description:
      'Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework.',
    time: 'May, 2020',
  },
  {
    id: 2,
    title: 'Shadcn First Commit',
    description:
      'Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.',
    time: 'January, 2023',
  },
  {
    id: 3,
    title: 'Shadcn Timeline',
    description: 'Shadcn timeline component. Open Source.',
    time: 'November, 2024',
  },
];

export const TimelineLayout = () => {
  const { ref } = useSectionView('Experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:px-54 sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <Timeline className="mt-8">
        {experiencesData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineHeader>
              <TimelineTime>{item.date}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
            {item.description && (
              <TimelineDescription>{item.description}</TimelineDescription>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};
