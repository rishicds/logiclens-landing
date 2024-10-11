"use client"
import { ShiftingContactForm } from '@/components/common/Contact'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
    <div className='pt-40'>
      <ShiftingContactForm/>
    </div>
    <Footer/>
    </div>
  )
}

export default page
