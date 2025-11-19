'use client'

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
    </>
  )
}

export default home
