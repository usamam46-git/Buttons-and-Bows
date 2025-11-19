'use client'

import Achievements from '@/components/landing/acheivements'
import Gallery from '@/components/landing/gallery'
import Hero from '@/components/landing/hero'
import History from '@/components/landing/history'
import Legacy from '@/components/landing/legacy'
import Programs from '@/components/landing/programs'
import React from 'react'

const home = () => {
  return (
    <>
     <Hero /> 
     <Programs />
     <History />
     <Legacy />
     <Achievements />
     <Gallery />
    </>
  )
}

export default home
