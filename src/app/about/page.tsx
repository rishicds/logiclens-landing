"use client"
import { AboutHero } from '@/components/AboutUs/AboutHero'
import { Awards } from '@/components/AboutUs/Awards'
import { OurCompany } from '@/components/AboutUs/OurCompany'
import StackedCardTestimonials from '@/components/AboutUs/Testimonials'
import MagnetButtonExample from '@/components/common/CTAButton'
import React from 'react'

const page = () => {
  return (
    <>
    <AboutHero/>
    <OurCompany/>
    <h1 className='text-6xl text-center font-extrabold p-8'> Awards and Certifications</h1>
    <Awards/>
    <div className='x-100'>
    <MagnetButtonExample/>
    </div>
    <h1 className='text-6xl text-center font-extrabold p-8'> Our Clients</h1>
    <StackedCardTestimonials/>
    </>
  )
}

export default page
