'use client'

import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/mode-toggle'
import { useWindowDimension } from '@/hooks/useWindowDimension'
import {  MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

type HeaderRightType = {
  label: string
  path: string
}

const headerRight: HeaderRightType[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'My CV', path: '/my-cv' },
]


const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false)
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const { scrollY } = useWindowDimension()

  const handleToggleHeader = () => setToggleHeader((prev) => !prev)
  const { theme } = useTheme()


  useEffect(() => {
    if (Number(scrollY) >= 80) setShrinkHeader(true)
    else setShrinkHeader(false)
  }, [scrollY])



  return (
  <header
  className={`w-full fixed top-0 z-50 transition-all duration-500 ${
    shrinkHeader
      ? 'backdrop-blur-lg bg-white/40 shadow-md1'
      : 'bg-white/20 backdrop-blur-sm'
  }`}
>
      <div className="flex justify-between items-center px-[5%] h-16">
        <Link href="/" className="font-extrabold text-2xl  tracking-wide hover:opacity-80">
          Portfolio<span className="text-gray-700">.</span>
        </Link>

        <div className={`hidden md:flex items-center space-x-8  font-medium  ${theme === 'dark' ? "text-white" : "text-gray-700"}`}>
          {headerRight.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`relative group transition-all duration-300 ${theme === 'dark' ? "text-white" : "text-gray-700"}`}
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}


          <ModeToggle />
        </div>

        <div className="md:hidden block">
          <Button
            size="icon"
            variant="ghost"
            className="text-rose-600"
            onClick={handleToggleHeader}
          >
            {toggleHeader ? <X /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {toggleHeader && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden bg-white shadow-lg border-t border-gray-200 py-4 space-y-3 px-5 text-gray-700  font-medium  `}
          >
            {headerRight.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block hover:text-rose-600 transition-all "
                onClick={() => setToggleHeader(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Language</span>
              </div>
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
