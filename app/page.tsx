'use client'

import Achievements from '@/components/landing/acheivements'
import ChooseUsSection from '@/components/landing/chooseUs'
import FAQSection from '@/components/landing/faqs'
import Gallery from '@/components/landing/gallery'
import Hero from '@/components/landing/hero'
import History from '@/components/landing/history'
import Legacy from '@/components/landing/legacy'
import Offerings from '@/components/landing/offerings'
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
     <Offerings />
     <ChooseUsSection />
     <FAQSection />
    </>
  )
}

export default home
