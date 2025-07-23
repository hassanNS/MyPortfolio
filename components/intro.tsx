'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useSectionView } from '@/lib/hooks';
import profilePic from '@/public/profile_pic.jpeg';

export default function Intro() {
  const { ref } = useSectionView('Home', 0.5); // useSectionView is a custom hook that returns a ref and inView state

  return (
    // If everything related to each other, semantically, better to use section tag
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={profilePic}
              alt="my portrait"
              width="292"
              height="292"
              quality="95"
              priority={true} // image loaded as fast as possible
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Naz.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">7 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">Web Applications and API's</span>
        (Next.js Node Angular React Java Spring) .
      </motion.h1>

      {/* use one primary button and other secondary */}
      {/* Tailwind is mobile first so the default style is for mobile, and sm: means for smaller to bigger devices it should be X */}
      <motion.div
        className="flex flex-col gap-3 sm:flex-row justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* very nice button reactivity */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3
          flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1"></BsArrowRight>
        </Link>
        <a
          className="group bg-white px-7 py-3 flex text-gray-700
        items-center gap-2 rounded-full focus:scale-110
        hover:scale-110 active:scale-105 cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV{' '}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white px-4 py-4 flex items-center gap-2 rounded-full focus:scale-110
        hover:scale-110 active:scale-105 cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/hassanns"
          target="_blank"
        >
          <BsLinkedin></BsLinkedin>
        </a>
        <a
          className="bg-white px-4 py-4 flex items-center gap-2 rounded-full focus:scale-110
        hover:scale-110 active:scale-105 cursor-pointer borderBlack"
          href="https://github.com/hassanNS/"
          target="_blank"
        >
          <FaGithub></FaGithub>
        </a>
      </motion.div>
    </section>
  );
}
