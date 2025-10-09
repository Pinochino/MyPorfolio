import Banner from '@/modules/home/Banner'
import Experience from '@/modules/home/Experience'
import Skill from '@/modules/home/Skill'
import React from 'react'

const HomePage = () => {
  return (
    <div className="space-y-5">
      <Banner />
      <Skill />
      <Experience />
    </div>
  )
}

export default HomePage
