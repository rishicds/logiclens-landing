"use client"
import OppoScroll from '@/components/Products/OurProducts'
import { GridHoverHero } from '@/components/Products/ProdHero'
import React from 'react'
import WhatsAppFloatButton from '@/components/common/CTAButton'
const page = () => {
  return (
    <><GridHoverHero/>
    <h1 className='text-center p-4 text-6xl text-white font-extrabold bg-black'>OUR PRODUCTS</h1>
    <OppoScroll/>
    <WhatsAppFloatButton phoneNumber="+917708964718"/></>
  )
}

export default page
