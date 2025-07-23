'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionView } from '@/lib/hooks'
import { animate, motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) =>{
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index
      }
    }
  }
}

export default function Skills() {
  const {ref} = useSectionView("Skills");
  return (
    <section ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40" id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {
          skillsData.map((skill, index) => (
            <motion.li key={index}
              className="bg-white border border-black/[0.1] px-5 py-3 rounded-xl"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true,}}
              custom={index} // custom prop to use in animation
              >
                {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
