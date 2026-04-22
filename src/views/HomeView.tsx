import Banner from '@/modules/home/Banner'
import About from '@/modules/home/About'
import Contact from '@/modules/home/Contact'
import Experience from '@/modules/home/Experience'
import Skill from '@/modules/home/Skill'
import Projects from '@/modules/projects/Projects'
import React from 'react'

const HomeView = () => {
  return (
    <div className="space-y-2">
      <Banner />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomeView
