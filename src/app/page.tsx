"use client"

import WhatsAppFloatButton from "@/components/common/CTAButton";
import { GoogleGeminiEffectDemo } from "@/components/CTA/GeminiCTA";
import { TextParallaxContentExample } from "@/components/Features/ThreeFeat";
import { AuroraHero } from "@/components/Hero/Hero";
import { DarkGradientPricing } from "@/components/Hero/Pricing";


export default function Home() {
  return (
   <><AuroraHero/>
   <TextParallaxContentExample/>
   <GoogleGeminiEffectDemo/>
   <DarkGradientPricing/>
   <WhatsAppFloatButton phoneNumber="+917708964718"/>
   </>
  );
}
