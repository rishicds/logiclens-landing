"use client"
import OppoScroll from '@/components/Products/OurProducts'
import { GridHoverHero } from '@/components/Products/ProdHero'
import React from 'react'
import WhatsAppFloatButton from '@/components/common/CTAButton'
const page = () => {
  return (
    <><GridHoverHero/>
    <OppoScroll/>
    <WhatsAppFloatButton phoneNumber="+917708964718"/></>
  )
}

export default page
