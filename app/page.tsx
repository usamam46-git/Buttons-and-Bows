'use client'

import Achievements from '@/components/landing/acheivements'
import ChooseUsSection from '@/components/landing/chooseUs'
import FAQSection from '@/components/landing/faqs'
import Footer from '@/components/landing/footer'
import Gallery from '@/components/landing/gallery'
import Hero from '@/components/landing/hero'
import History from '@/components/landing/history'
import Legacy from '@/components/landing/legacy'
import Navbar from '@/components/landing/navbar'
import Offerings from '@/components/landing/offerings'
import Programs from '@/components/landing/programs'
import ButtonsAndBowsBanner from '@/components/landing/readyToJoin'
import Testimonials from '@/components/landing/testimonials'
import React from 'react'

const home = () => {
  return (
    <>
    <Navbar />
     <Hero /> 
     <Programs />
     <History />
     <Legacy />
     <Achievements />
     <Gallery />
     <Offerings />
     <ChooseUsSection />
     <FAQSection />
     <Testimonials />
     <ButtonsAndBowsBanner />
     <Footer />
    </>
  )
}

export default home
