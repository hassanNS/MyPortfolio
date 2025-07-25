'use client';

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Shortcut to props
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'], // animation starts when viewport reaches end, continues until 33% more
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last-mb-0"
    >
      <section className="rounded-lg bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 flex flex-col relative sm:h-[20rem] sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-gray-200 transition">
        <div className="py-4 px-5 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 mb-6 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] text-white uppercase tracking-wide rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile image (only shows on small screens) */}
        <div className="relative h-60 sm:hidden w-full mt-4">
          <Image
            src={imageUrl}
            alt={`${title} project`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 80vw"
            quality={95}
          />
        </div>

        {/* Desktop image (preserves all existing animations) */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:flex absolute w-[20rem] sm:w-[28.5rem] top-8 -right-50 sm:-right-40 rounded-t-lg shadow-2xl
            sm:group-even:right-[initial] sm:group-even:-left-40
            sm:group-hover:-translate-x-3
            sm:group-hover:translate-y-3
            sm:group-hover:-rotate-2
            group-hover:scale-[1.04]
            sm:group-even:group-hover:translate-x-3
            sm:group-even:group-hover:-translate-y-3
            sm:group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}
