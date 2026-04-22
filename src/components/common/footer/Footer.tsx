'use client'

import { useI18n } from '@/i18n/LanguageProvider'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const { dictionary } = useI18n()

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <span className="text-center text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {dictionary.footer.copyright}. {dictionary.footer.rights}
        </span>

        <div className="flex items-center gap-2">
          <a
            href="mailto:example@gmail.com"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
