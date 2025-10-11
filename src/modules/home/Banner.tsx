'use client'

import { Button } from '@/components/ui/button'
import { Download, Facebook, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const socialIcons = [
  { icon: <Facebook />, link: 'https://facebook.com' },
  { icon: <Mail />, link: 'mailto:example@gmail.com' },
  { icon: <Github />, link: 'https://github.com' },
  { icon: <Linkedin />, link: 'https://linkedin.com' },
]
  

const Banner = () => {
  const texts = ['Fullstack Developer', 'Freelancer']
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    // Nếu hết vòng thì reset
    if (index === texts.length) {
      setIndex(0)
      return
    }

    const currentText = texts[index]

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < currentText.length) {
        // Đang gõ
        setSubIndex((prev) => prev + 1)
      } else if (deleting && subIndex > 0) {
        // Đang xóa
        setSubIndex((prev) => prev - 1)
      } else if (!deleting && subIndex === currentText.length) {
        // Dừng một chút trước khi xóa
        setTimeout(() => setDeleting(true), 1000)
      } else if (deleting && subIndex === 0) {
        // Chuyển sang text tiếp theo
        setDeleting(false)
        setIndex((prev) => (prev + 1) % texts.length)
      }
    }, deleting ? 60 : 120)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  // Hiệu ứng nháy dấu |
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])
const skills = ['Express', 'NestJS', 'Spring Boot', 'Next.js']


  return (
    <div className="relative mt-20 overflow-hidden py-20 px-[5%] ">
      
      <div className="absolute -top-20 -right-20 w-96 h-96  blur-3xl rounded-full animate-pulse"></div>

      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="leading-tight">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Hi There! <span className="animate-bounce inline-block">🖐️</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-rose-600">
              I'm <span className="">Trần Đình Hùng</span>
            </h3>
           
            {/* 🎬 Hiệu ứng typing */}
            <p className="text-lg mt-3 min-h-[28px]">
                    {`${texts[index].substring(0, subIndex)}`}
              <span className="border-r-2 border-rose-600 animate-pulse ml-1"></span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 my-8">
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size={'icon'}
                  className="rounded-full border-rose-300 hover:bg-rose-500 hover:text-white transition-all"
                >
                  {s.icon}
                </Button>
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            <Button className="uppercase bg-rose-500 hover:bg-rose-600 text-white px-6 rounded-lg shadow-lg transition-all">
              My Skills 🫰
            </Button>
            <Button
              className="uppercase border border-rose-400 text-rose-600 px-6 rounded-lg flex gap-2 items-center"
            >
              Get Resume
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative  backdrop-blur-xl border  rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="flex space-x-2 px-5 py-3 border-b border-rose-100 bg-gradient-to-r ">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>

          <pre className="px-6 py-5 text-sm font-mono  whitespace-pre-wrap">
{`const developer = {
  name: "Trần Đình Hùng",
  skills: [${skills.map((s) => `"${s}"`).join(', ')}],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable() {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5
  }
}`}
          </pre>
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
