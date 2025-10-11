'use client'

import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/mode-toggle'
import { useWindowDimension } from '@/hooks/useWindowDimension'
import { ChevronDown, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type HeaderRightType = {
  label: string
  path: string
}

const headerRight: HeaderRightType[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'My CV', path: 'https://www.topcv.vn/xem-cv/WwMCAwIAAlICBANUUl9UVlMDVVVUCAYBBAwGVg1883' },
]

const languageData: string[] = ['Vietnam', 'English']

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false)
  const [toggleLanguage, setToggleLanguage] = useState(false)
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const [languages] = useState(languageData)
  const [languageSelected, setLanguageSelected] = useState('English')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useWindowDimension()

  const handleToggleHeader = () => setToggleHeader((prev) => !prev)
  const handleToggleLanguage = () => setToggleLanguage((prev) => !prev)

  useEffect(() => {
    if (Number(scrollY) >= 80) setShrinkHeader(true)
    else setShrinkHeader(false)
  }, [scrollY])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleLanguage(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectedLanguage = (lag: string) => {
    setLanguageSelected(lag)
    setToggleLanguage(false)
  }

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        shrinkHeader
          ? 'backdrop-blur-md bg-white/80 shadow-lg'
          : 'bg-gradient-to-r from-rose-200 via-pink-200 to-rose-100'
      }`}
    >
      <div className="flex justify-between items-center px-[5%] h-16">
        <Link href="/" className="font-extrabold text-2xl  tracking-wide hover:opacity-80">
          Portfolio<span className="text-gray-700">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {headerRight.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative group transition-all duration-300"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <div className="relative w-18" ref={menuRef}>
          <div className='w-18'>
              <Button
                size="sm"
                variant="outline"
                onClick={handleToggleLanguage}
                className="flex items-center gap-2 border-gray-300 hover:border-rose-400 transition-all w-18"
              >
                {languageSelected}
                <ChevronDown className="w-4 h-4" />
              </Button>
          </div>

            <AnimatePresence>
              {toggleLanguage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 w-32"
                >
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectedLanguage(lang)}
                      className="px-3 py-2 hover:bg-rose-100 cursor-pointer"
                    >
                      {lang}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            className="md:hidden bg-white shadow-lg border-t border-gray-200 py-4 space-y-3 px-5 text-gray-700 font-medium"
          >
            {headerRight.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="block hover:text-rose-600 transition-all"
                onClick={() => setToggleHeader(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Language</span>
                <select
                  className="border border-gray-300 rounded-md px-2 py-1 mt-1 text-sm"
                  onChange={(e) => handleSelectedLanguage(e.target.value)}
                  value={languageSelected}
                >
                  {languages.map((lang) => (
                    <option key={lang}>{lang}</option>
                  ))}
                </select>
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
