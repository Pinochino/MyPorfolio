'use client'

import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/mode-toggle'
import { ChevronDown, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type HeaderRightType = {
  label: string
  path: string
}

const headerRight: HeaderRightType[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'MyCV',
    path: '/',
  },
]

const languageData: string[] = ['Vietnam', 'Tailwind']

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState<boolean>(false)
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false)
  const [languages, setLanguages] = useState<string[]>(languageData)
  const [languageSelected, setLanguageSelected] = useState<string | null>('English')
  const menuRef = useRef(null)

  const handleToggleHeader = () => {
    setToggleHeader((prev) => !prev)
  }

  const handleToggleLanguage = () => {
    setToggleLanguage((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLDivElement).contains(event.target as Node)) {
        setToggleLanguage(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutSide)

    return () => document.removeEventListener('mousedown', handleClickOutSide)
  }, [])

  const handleSelectedLanguage = (lag: string) => {
    setLanguageSelected(lag)
    setToggleLanguage(false)
  }

  return (
    <header className="w-full duration-75">
      <div className="bg-red-300 flex justify-between items-center px-[5%] h-16 w-[100%] text-base">
        <div className="text-2xl">Porfolio</div>
        <div className="md:flex justify-between items-center space-x-12 hidden ">
          {Array.from(headerRight).map((data: HeaderRightType, index: number) => (
            <div key={index}>
              <Link href={`${data.path}`}>{data.label}</Link>
            </div>
          ))}
          <div className="relative w-16">
            <Button size="sm" variant="outline" onClick={handleToggleLanguage} className="">
              {languageSelected}
              <ChevronDown />
            </Button>

            <div
              className={`absolute top-10 left-1  overflow-y-scroll w-36 shadow-4xl  ${toggleLanguage ? 'block' : 'hidden'} rounded-md w-full`}
              ref={menuRef}
            >
              {languages.map((e: string, index: number) => (
                <div
                  key={index}
                  className="[&:hover]:bg-slate-400 p-2 rounded-lg"
                  onClick={() => handleSelectedLanguage(e)}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>

          <ModeToggle />
        </div>
        <div className="md:hidden  block">
          <Button size={'icon'} variant={'default'} onClick={handleToggleHeader}>
            {' '}
            <MenuIcon />
          </Button>
        </div>
      </div>
      <div
        className={`absolute w-full pl-5 duration-400 bg-green-400 space-y-3 py-3 ${toggleHeader ? 'block' : 'hidden'}`}
      >
        {headerRight.map((e, index) => (
          <div key={index} className="">
            {e.label}
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
