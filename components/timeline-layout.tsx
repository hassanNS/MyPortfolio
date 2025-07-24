'use client';
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
