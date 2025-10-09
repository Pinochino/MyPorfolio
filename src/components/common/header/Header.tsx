'use client';

import { Button } from '@/components/ui/button';
import ModeToggle from '@/components/ui/mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown, MenuIcon, SplinePointer } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const headerRight: string[] = [
  'Home',
  'About',
  'Projects',
  'MyCV',
]

const languageData: string[] = [
  'Vietnam',
  "Tailwind"
]


const Header = () => {

  const [toggleHeader, setToggleHeader] = useState<boolean>(false);
  const [toggleLanguage, setToggleLanguage] = useState<boolean>(false);
  const [languages, setLanguages] = useState<string[]>(languageData)
  const [languageSelected, setLanguageSelected] = useState<string | null>('English')
  const menuRef = useRef(null);

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
    setLanguageSelected(lag);
    setToggleLanguage(false)
  }

  return (
    <header className='w-full fixed top-0 duration-75'>
      <div className='bg-red-300 flex justify-between items-center px-[5%] h-12 w-[100%] text-sm'>
        <div>Porfolio</div>
        <div className='md:flex justify-between items-center space-x-12 hidden '>
          {headerRight.map((data: string, index: number) => (
            <div key={index}>
              <span>{data}</span>
            </div>
          ))}
          <ModeToggle />
          <div className='relative w-14'>
            <Button size="sm" variant="outline" onClick={handleToggleLanguage}
              className=''
            >
              {languageSelected}
              <ChevronDown />
            </Button>

            <div className={`absolute z-10 top-10  overflow-y-scroll w-full shadow-4xl  ${toggleLanguage ? 'block' : 'hidden'} rounded-md w-32`} ref={menuRef}>
              {languages.map((e: string, index: number) => (
                <div key={index} className='[&:hover]:bg-slate-400 p-2 rounded-lg'
                onClick={() => handleSelectedLanguage(e) }
                >{e}</div>
              ))}
            </div>
          </div>

        </div>
        <div className='md:hidden  block'>
          <Button size={'icon'}
            variant={'default'}
            onClick={handleToggleHeader}
          >   <MenuIcon /></Button>
        </div>
      </div>
      <div className={`absolute w-full pl-5 duration-400 bg-green-400 ${toggleHeader ? 'block' : 'hidden'}`}>
        {
          headerRight.map((e, index) => (
            <div key={index}>{e}</div>
          ))
        }
      </div>
    </header >
  )
}

export default Header