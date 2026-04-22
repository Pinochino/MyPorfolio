'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/i18n/LanguageProvider'
import { Download, Github, Linkedin, Mail, MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { useToast } from '@/hooks/use-toast'

const Banner = () => {
  const { dictionary } = useI18n()
  const { toast } = useToast()

  const socials = [
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:example@gmail.com', label: 'Email' },
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  const handleDownloadFile = async () => {
    try {
      const res = await fetch('/api/downloadFile', {
        method: 'GET',
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.download = 'TranDinhHung_CV.pdf'
      anchor.click()
      window.URL.revokeObjectURL(url)

      toast({ description: dictionary.contact.form.success })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unexpected exception'
      toast({ description: message })
    }
  }

  return (
    <section id="home" className="relative overflow-hidden px-[5%] pb-20 pt-28">
      <div className="absolute left-0 top-0 h-[460px] w-full bg-[radial-gradient(circle_at_20%_20%,rgba(30,64,175,0.14),transparent_40%),radial-gradient(circle_at_80%_40%,rgba(15,118,110,0.12),transparent_40%)]" />

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700 dark:text-teal-300">
              {dictionary.hero.greeting}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
              {dictionary.hero.name}
            </h1>
            <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300">{dictionary.hero.role}</h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {dictionary.hero.shortIntro}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
              <a href="#projects">
                {dictionary.hero.ctaPrimary}
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-teal-700 text-teal-800 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-300 dark:hover:bg-teal-900/20">
              <a href="#contact">{dictionary.hero.ctaSecondary}</a>
            </Button>
            <Button variant="secondary" onClick={handleDownloadFile}>
              {dictionary.common.downloadCv}
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center fade-up"
        >
          <div className="absolute -right-8 -top-6 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

          <div className="surface-3d relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-6 shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">profile.ts</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Open to work</span>
            </div>

            <div className="mb-5 flex items-center gap-4">
              <Image
                src="/images/user.jpg"
                alt="Tran Dinh Hung"
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full border-2 border-amber-400 object-cover"
              />
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{dictionary.hero.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{dictionary.hero.role}</p>
              </div>
            </div>

            <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs text-slate-100">
{`const developer = {
  cleanCode: true,
  productMindset: true,
  teamwork: 'strong',
  stack: ['Next.js', 'Node.js', 'PostgreSQL']
}`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner
