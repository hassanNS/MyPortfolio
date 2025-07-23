import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type TimelineItemType = {
  id: number;
  title: string;
  description?: string;
  time: string;
};
