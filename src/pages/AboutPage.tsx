'use client';
import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

const skills = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Firebase',
]
const AboutPage = () => {
   return (
    <section className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-[5%] py-20 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10 text-center"
      >
        About <span className="text-rose-500">Me</span> 💫
      </motion.h2>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-5xl">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Hi, I’m <span className="text-rose-500">Nguyen Minh</span> 👋
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I’m a <span className="font-medium text-rose-500">Fullstack Developer</span> and{' '}
            <span className="font-medium text-rose-500">Freelancer</span> passionate about building
            beautiful, performant, and accessible web applications.
            <br />
            I enjoy turning complex problems into simple, elegant interfaces — especially with
            modern tools like React, Next.js, and Node.js.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            When I’m not coding, you can find me learning new technologies, designing UI/UX, or
            exploring the latest trends in web development.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mb-8">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-5">
              Download CV
            </Button>
            <Button variant="outline" className="rounded-full px-5">
              Contact Me
            </Button>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Button size="icon" variant="outline" className="rounded-full">
                <Github />
              </Button>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin />
              </Button>
            </a>
            <a href="mailto:example@gmail.com">
              <Button size="icon" variant="outline" className="rounded-full">
                <Mail />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72">
            <Image
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="profile"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-rose-400 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-rose-400/10 blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-4xl text-center"
      >
        <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          My Skills ⚡
        </h4>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-full text-gray-800 dark:text-gray-100 shadow-sm cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPage
