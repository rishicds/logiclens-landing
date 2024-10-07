"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function Awards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full pb-8">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            DPIIT Recognition
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Recognized by the Department for Promotion of Industry and Internal Trade, Government of India
          </p>
        </div>
        <Image
          src="https://www.business-northeast.com/wp-content/uploads/2021/07/dpiit-agencies.jpg" // Replace with actual DPIIT logo
          width={300}
          height={300}
          alt="DPIIT logo"
          className="absolute -right-4 lg:-right-[5%] -bottom-0 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Best Technology Startup
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Awarded by Startup Jharkhand for our innovative technology solutions
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-purple-900 min-h-[500px] lg:min-h-[300px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Incubated at IIM Lucknow
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Proud to be incubated at one of India&apos;s premier management institutes, fostering innovation and entrepreneurship
          </p>
        </div>
        <Image
          src="https://msg91.com/assets/startups/iiml.png" // Replace with actual IIM Lucknow logo
          width={300}
          height={400}
          alt="IIM Lucknow logo"
          className="absolute -right-15 md:-right-[50%] lg:-right-[0] -bottom-1 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}