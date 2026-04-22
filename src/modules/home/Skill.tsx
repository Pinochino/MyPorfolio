'use client'

import React from 'react'
import { useI18n } from '@/i18n/LanguageProvider'

const Skill = () => {
  const { dictionary } = useI18n()

  return (
    <section id="skills" className="px-[5%] py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{dictionary.skills.title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{dictionary.skills.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {dictionary.skills.categories.map((category) => (
          <div
            key={category.title}
            className="surface-3d rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/95"
          >
            <h3 className="text-lg font-semibold text-blue-900 dark:text-slate-100">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition duration-300 hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-400 dark:hover:text-teal-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skill
