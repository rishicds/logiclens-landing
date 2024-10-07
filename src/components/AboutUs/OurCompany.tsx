"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function OurCompany() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-[24rem] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Get To Know Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 text-center text-slate-300 max-w-4xl mx-auto space-y-4"
      >
        <p className="text-lg font-semibold mt-16 text-justify mx-auto">
        We are dedicated to empowering businesses and organizations with cutting-edge software that harnesses the full potential of video analytics. By leveraging artificial intelligence and machine learning, we transform vast amounts of video data into actionable insights, enabling our clients to make informed, data-driven decisions that optimize their operations.

        </p>
        <p className="text-lg font-semibold text-justify mx-auto">
        Our journey began with a simple yet profound belief: that technology should not just watch, but understand. Driven by this passion, we harness the power of artificial intelligence to turn ordinary camera systems into smart, proactive guardians. Whether it&apos;s enhancing safety in factories, optimizing operations in warehouses, securing office spaces, or providing bespoke solutions for unique use cases, our AI-powered solutions deliver actionable insights that make a real difference.

        </p>
        <p className="text-lg font-semibold text-justify mx-auto">
        We are a team of innovators, engineers, and dreamers who are dedicated to pushing the boundaries of what&apos;s possible with video analytics. We listen, we adapt, and we innovate to meet the evolving needs of our clients. At Logiclens, we believe that every organization has a unique story, and our mission is to help them see that story unfold more clearly, securely, and efficiently.

        </p>
        <p className="text-lg font-semibold text-justify mx-auto">
          From our modest beginnings, we have grown exponentially, propelled by our unwavering belief in the power of disruptive solutions. Today, our company stands tall, envisioning to empower organizations worldwide with cutting-edge software that streamlines operations, drives efficiency, and fosters growth.
        </p>
        <p className="text-lg font-semibold text-justify mx-auto">
          Our journey embodies the spirit of perseverance and showcases the untapped potential that resides within each individual. As we continue to expand our reach and impact, we remain rooted in our small-town values, constantly pushing boundaries and challenging the status quo, fueling our passion to shape a future where technology propels businesses forward.
        </p>
        <p className="text-lg font-semibold text-justify mx-auto">
        Join us as we continue to explore the future of intelligent surveillance, where every frame tells a story, and every insight drives progress. Together, we are creating a world where technology not only observes but also understands and empowers.
        </p>
      </motion.div>
    </LampContainer>
  );
}