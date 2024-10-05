"use client"
import OppoScroll from '@/components/Products/OurProducts'
import { GridHoverHero } from '@/components/Products/ProdHero'
import React from 'react'

const page = () => {
  return (
    <><GridHoverHero/>
    <h1 className='text-center p-4 text-6xl font-extrabold bg-black'>OUR PRODUCTS</h1>
    <OppoScroll/></>
  )
}

export default page
