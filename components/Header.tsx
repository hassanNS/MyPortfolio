"use client"
import React from 'react'
import { motion } from "framer-motion"
import { links } from "@/lib/data"
import Link from 'next/link'
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context'

// -translate-x-1/2 50% pulled back to center
export default function Header() {
  const {activeSection, setActiveSection, setTimeofLastClick} = useActiveSectionContext();

  return <header className="z-[999] relative">
    <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full
    rounded-none border border-white border-opacity-40
    bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
    backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
    initial={{ opacity: -100, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    ></motion.div>

    <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {
          links.map(link => (
            <motion.li className="relative h-3/4 flex items-center justify-center"
            initial={{ opacity: 100, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            key={link.hash}>
              <Link className={clsx("flex w-full items-center justify-center \
              px-3 py-3 hover:text-gray-950 transition", {
                "text-gray-950": activeSection === link.name
              })}
              href={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeofLastClick(Date.now())
              }}
              >
                {link.name}
                { link.name === activeSection && (
                  <motion.span className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30}}
                  ></motion.span>
                )}

              </Link>
            </motion.li>
          ))
        }
      </ul>
    </nav>
  </header>
}
