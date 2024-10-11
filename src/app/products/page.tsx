"use client"
import OppoScroll from '@/components/Products/OurProducts'
import { GridHoverHero } from '@/components/Products/ProdHero'
import React from 'react'
import WhatsAppFloatButton from '@/components/common/CTAButton'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/Header'
const page = () => {
  return (
    <>
    <Navbar/>
    <GridHoverHero/>
    <OppoScroll/>
    <WhatsAppFloatButton phoneNumber="+917708964718"/>
    <Footer/></>
  )
}

export default page
