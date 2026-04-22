'use client'

import React from 'react'
import { useI18n } from '@/i18n/LanguageProvider'

const Experience = () => {
  const { dictionary } = useI18n()

  return (
    <section id="experience" className="px-[5%] py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{dictionary.experience.title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{dictionary.experience.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="surface-3d rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{dictionary.experience.workTitle}</h3>
          <div className="mt-5 space-y-5">
            {dictionary.experience.work.map((item) => (
              <article key={`${item.period}-${item.title}`} className="border-l-2 border-blue-700 pl-4 transition duration-300 hover:translate-x-1 dark:border-blue-400">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  {item.period}
                </p>
                <h4 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.organization}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="surface-3d rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {dictionary.experience.educationTitle}
          </h3>
          <div className="mt-5 space-y-5">
            {dictionary.experience.education.map((item) => (
              <article key={`${item.period}-${item.title}`} className="border-l-2 border-teal-700 pl-4 transition duration-300 hover:translate-x-1 dark:border-teal-400">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  {item.period}
                </p>
                <h4 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.organization}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
