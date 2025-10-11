'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, SquareMenu } from 'lucide-react'
import { motion } from 'framer-motion'

const projectData = [
  {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },

    {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },

    {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },
    {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },
    {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },
    {
    title: 'React Native E-Commerce App',
    description:
      'A modern e-commerce mobile app built with React Native, Redux Toolkit, and Firebase. Includes authentication, cart, and product search features.',
    image:
      'https://hoidanit.vn/_next/image?url=https%3A%2F%2Fhoidanit.vn%2Fimages%2F2610799786e82f64a8aea3b0ecd23b55c.png&w=1920&q=75',
    github: 'https://github.com/',
    live: 'https://your-demo-link.com',
  },
]

const Projects = () => {
  return (
    <div className="bg-red-400 px-[5%] w-full mb-5">
      <div className="text-center my-4">
        <h5 className="text-xl">My Recent Works</h5>
        <p>Here are a few projects i&#039;ve worked on recently</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5  justify-items-center">
        {Array.from(projectData).map((project, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Card className="w-[90%] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-white dark:bg-gray-800">
              <CardHeader className="relative p-0 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center gap-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 text-white border-white hover:bg-white hover:text-black"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Github
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/20 text-white border-white hover:bg-white hover:text-black"
                  >
                    <SquareMenu className="mr-1 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <h5 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                  {project.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center py-4">
                <div className="w-16 h-[3px] bg-gradient-to-r from-rose-400 to-pink-500 rounded-full" />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
