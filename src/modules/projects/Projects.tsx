'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/LanguageProvider'

const Projects = () => {
  const { dictionary } = useI18n()

  return (
    <section id="projects" className="px-[5%] py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{dictionary.projects.title}</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{dictionary.projects.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dictionary.projects.items.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="surface-3d h-full overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-sm dark:border-slate-800 dark:bg-slate-950/95">
              <CardHeader className="relative p-0 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="secondary">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="mr-1 h-4 w-4" />
                        {dictionary.projects.github}
                      </a>
                    </Button>
                    <Button asChild size="sm" className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
                      <a href={project.liveDemo} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" />
                        {dictionary.projects.liveDemo}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-5">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{project.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-700 transition duration-300 hover:border-blue-700 hover:text-blue-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">
                  <span className="font-semibold">{dictionary.projects.role}: </span>
                  {project.role}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
