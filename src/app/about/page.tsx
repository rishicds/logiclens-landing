"use client"
import { AboutHero } from '@/components/AboutUs/AboutHero'
import { Awards } from '@/components/AboutUs/Awards'
import { OurCompany } from '@/components/AboutUs/OurCompany'
import StackedCardTestimonials from '@/components/AboutUs/Testimonials'
import WhatsAppFloatButton from '@/components/common/CTAButton'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <AboutHero/>
    <OurCompany/>
    <h1 className='text-6xl text-center font-extrabold p-8'> Awards and Certifications</h1>
    <Awards/>
    <div className='x-100'>
    <WhatsAppFloatButton phoneNumber="+917708964718"/>
    </div>
    <h1 className='text-6xl text-center font-extrabold p-8'> Our Clients</h1>
    <StackedCardTestimonials/>
    <Footer/>
    </>
  )
}

export default page
