'use client'

import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/mode-toggle'
import { useWindowDimension } from '@/hooks/useWindowDimension'
import { useI18n } from '@/i18n/LanguageProvider'
import { LOCALE_LABELS, Locale, SUPPORTED_LOCALES } from '@/i18n/dictionaries'
import { Globe, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'


const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false)
  const [shrinkHeader, setShrinkHeader] = useState(false)
  const { scrollY } = useWindowDimension()
  const { dictionary, locale, setLocale } = useI18n()

  const handleToggleHeader = () => setToggleHeader((prev) => !prev)

  useEffect(() => {
    if (Number(scrollY) >= 80) setShrinkHeader(true)
    else setShrinkHeader(false)
  }, [scrollY])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        shrinkHeader
          ? 'border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/75'
          : 'bg-white/60 backdrop-blur-md dark:bg-slate-950/70',
      )}
    >
      <div className="flex justify-between items-center px-[5%] h-16">
        <Link href="/#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          {dictionary.header.brand}
        </Link>

        <div className="hidden items-center space-x-7 md:flex">
          {dictionary.header.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-slate-800 transition-colors hover:text-blue-700 dark:text-slate-100 dark:hover:text-teal-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-teal-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/85 px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-200">
            <Globe className="h-3.5 w-3.5" />
            <select
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            >
              {SUPPORTED_LOCALES.map((localeOption) => (
                <option key={localeOption} value={localeOption}>
                  {LOCALE_LABELS[localeOption]}
                </option>
              ))}
            </select>
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
            className="space-y-3 border-t border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 md:hidden"
          >
            {dictionary.header.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block transition-colors hover:text-teal-500"
                onClick={() => setToggleHeader(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{dictionary.common.language}</span>
              </div>
              <select
                value={locale}
                onChange={(event) => setLocale(event.target.value as Locale)}
                className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700 outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
              >
                {SUPPORTED_LOCALES.map((localeOption) => (
                  <option key={localeOption} value={localeOption}>
                    {LOCALE_LABELS[localeOption]}
                  </option>
                ))}
              </select>
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
