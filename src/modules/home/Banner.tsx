'use client'

import { Button } from '@/components/ui/button'
import { useI18n } from '@/i18n/LanguageProvider'
import { Download, Github, Linkedin, Mail, MoveRight } from 'lucide-react'
import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import HeroScene from './HeroScene'

const Banner = () => {
  const { dictionary } = useI18n()
  const { toast } = useToast()
  const reduceMotion = useReducedMotion()
  const [pointerPosition, setPointerPosition] = useState({ x: 0.5, y: 0.5 })
  const motionX = useSpring(pointerPosition.x, { stiffness: 120, damping: 18, mass: 0.8 })
  const motionY = useSpring(pointerPosition.y, { stiffness: 120, damping: 18, mass: 0.8 })
  const rotateX = useTransform(motionY, [0, 1], [8, -8])
  const rotateY = useTransform(motionX, [0, 1], [-10, 10])

  const socials = [
    { icon: <Mail className="h-4 w-4" />, href: 'mailto:example@gmail.com', label: 'Email' },
    { icon: <Github className="h-4 w-4" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  const highlights = [
    'Scalable frontend architecture with Next.js and TypeScript',
    'Reliable backend/API integration with strong code quality',
    'Professional UI with smooth motion and performance-first mindset',
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
    <section id="home" className="relative overflow-hidden px-[5%] pb-24 pt-28 md:pb-28">
      <motion.div
        aria-hidden="true"
        className="animated-gradient absolute inset-x-[-12%] top-0 h-[640px] opacity-55 blur-3xl"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(56,189,248,0.18), rgba(20,184,166,0.14), rgba(30,64,175,0.14), rgba(15,23,42,0.1))',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, -18, 0],
                scale: [1, 1.05, 1],
              }
        }
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(circle_at_12%_24%,rgba(14,116,144,0.16),transparent_34%),radial-gradient(circle_at_86%_24%,rgba(51,65,85,0.16),transparent_34%),radial-gradient(circle_at_48%_80%,rgba(59,130,246,0.1),transparent_36%)]"
      />

      <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-7"
        >
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-300"
            >
              {dictionary.hero.greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.65 }}
              className="max-w-xl text-4xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-6xl"
            >
              {dictionary.hero.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.55 }}
              className="text-xl font-semibold text-slate-700 dark:text-slate-300 md:text-2xl"
            >
              {dictionary.hero.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {dictionary.hero.shortIntro}
            </motion.p>
          </div>

          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="space-y-2"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-teal-500/80" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              asChild
              className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <a href="#projects">
                {dictionary.hero.ctaPrimary}
                <MoveRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-teal-700 text-teal-800 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-300 dark:hover:bg-teal-900/20"
            >
              <a href="#contact">{dictionary.hero.ctaSecondary}</a>
            </Button>
            <Button variant="secondary" onClick={handleDownloadFile}>
              {dictionary.common.downloadCv}
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            aria-hidden="true"
            className="float-slow absolute -right-8 -top-6 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            className="float-slow absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl"
          />

          <motion.div
            onPointerMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect()
              setPointerPosition({
                x: (event.clientX - bounds.left) / bounds.width,
                y: (event.clientY - bounds.top) / bounds.height,
              })
            }}
            onPointerLeave={() => setPointerPosition({ x: 0.5, y: 0.5 })}
            style={reduceMotion ? undefined : { rotateX, rotateY }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="surface-3d relative w-full max-w-xl overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/88 p-5 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.42)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/82"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.25),transparent_42%,rgba(15,118,110,0.08),transparent_75%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/75 p-3 dark:border-slate-700/70 dark:bg-slate-950/40">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/user.jpg"
                    alt={dictionary.hero.name}
                    width={58}
                    height={58}
                    className="h-14 w-14 rounded-full border-2 border-slate-300 object-cover dark:border-slate-600"
                  />
                  <div>
                    <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                      {dictionary.hero.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{dictionary.hero.role}</p>
                  </div>
                </div>
                <span className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-600/60 dark:bg-emerald-900/20 dark:text-emerald-300">
                  Open to work
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 dark:border-slate-700/70 dark:bg-slate-950/40">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Primary Stack</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                    Next.js, React, TypeScript, Node.js
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 dark:border-slate-700/70 dark:bg-slate-950/40">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Working Style</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                    Detail-oriented, communicative, delivery-focused
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-3 dark:border-slate-700/70 dark:bg-slate-950/80">
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Interactive 3D Signature
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    subtle motion
                  </span>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] border border-slate-200/70 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_75%_30%,rgba(20,184,166,0.16),transparent_32%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))] dark:border-slate-700/60">
                  <HeroScene />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-4 dark:border-slate-700/70 dark:bg-slate-950/40">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Professional Note</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  I help teams ship maintainable products with polished UX, reliable backend services, and performance that scales.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner
