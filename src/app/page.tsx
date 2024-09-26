"use client"

import MagnetButtonExample from "@/components/common/CTAButton";
import { GoogleGeminiEffectDemo } from "@/components/CTA/GeminiCTA";
import { TextParallaxContentExample } from "@/components/Features/ThreeFeat";
import { AuroraHero } from "@/components/Hero/Hero";
import { DarkGradientPricing } from "@/components/Hero/Pricing";
import { CountUpStats } from "@/components/Stats/Stats";


export default function Home() {
  return (
   <><AuroraHero/>
   <TextParallaxContentExample/>
   <GoogleGeminiEffectDemo/>
   <DarkGradientPricing/>
   <MagnetButtonExample/>
   <CountUpStats/></>
  );
}
