"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function AboutHero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-30">
      <p className="text-4xl md:text-4xl lg:text-8xl text-white  font-extrabold  text-center">
        OUR MISSION
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      At Logiclens, we are redefining the way organizations see their world through the lens of innovation and intelligence. Founded with a vision to transform traditional surveillance into a powerful tool for safety, security, and operational excellence, we specialize in providing cutting-edge video analytics solutions that empower businesses across various industries.
      </p>
    </WavyBackground>
  );
}
