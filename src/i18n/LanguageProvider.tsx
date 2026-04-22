'use client'

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  Locale,
  PortfolioDictionary,
  portfolioDictionaries,
  SUPPORTED_LOCALES,
} from '@/i18n/dictionaries'

type LanguageContextValue = {
  locale: Locale
  dictionary: PortfolioDictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const STORAGE_KEY = 'portfolio-locale'

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
      setLocaleState(stored as Locale)
      return
    }

    const browserLocale = navigator.language.toLowerCase().split('-')[0] as Locale
    if (SUPPORTED_LOCALES.includes(browserLocale)) {
      setLocaleState(browserLocale)
    }
  }, [])

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem(STORAGE_KEY, nextLocale)
  }

  const value = useMemo(
    () => ({
      locale,
      dictionary: portfolioDictionaries[locale],
      setLocale,
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useI18n = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useI18n must be used within LanguageProvider')
  }

  return context
}
