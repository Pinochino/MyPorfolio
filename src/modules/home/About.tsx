"use client"

import React from 'react'
import { useI18n } from '@/i18n/LanguageProvider'
import { CheckCircle2 } from 'lucide-react'

const About = () => {
  const { dictionary } = useI18n()

  return (
    <section id="about" className="px-[5%] py-16">
      <div className="surface-3d grid gap-8 rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/95 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
            {dictionary.about.subtitle}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{dictionary.about.title}</h2>

          <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300">
            {dictionary.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 dark:border-blue-600/30 dark:bg-blue-500/10">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {dictionary.about.strengthsTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {dictionary.about.strengths.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/api/downloadFile"
            className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {dictionary.common.downloadCv}
          </a>
        </div>
      </div>
    </section>
  )
}

export default About