"use client"

import WhatsAppFloatButton from "@/components/common/CTAButton";
import { GoogleGeminiEffectDemo } from "@/components/CTA/GeminiCTA";
import { TextParallaxContentExample } from "@/components/Features/ThreeFeat";
import { AuroraHero } from "@/components/Hero/Hero";
import { DarkGradientPricing } from "@/components/Hero/Pricing";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Header";


export default function Home() {
  return (
   <>
   <Navbar/><AuroraHero/>
   <TextParallaxContentExample/>
   <GoogleGeminiEffectDemo/>
   <DarkGradientPricing/>
   <WhatsAppFloatButton phoneNumber="+917708964718"/>
   <Footer/>
   </>
  );
}
