"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function AuroraHero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-4xl md:text-4xl lg:text-8xl text-white  font-extrabold  text-center">
        LOGICLENS
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of AI to redefine your security
      </p>
    </WavyBackground>
  );
}
