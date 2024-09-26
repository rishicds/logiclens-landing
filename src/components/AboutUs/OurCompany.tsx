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
        className="mt-[24rem] mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Our Company
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
        <p className="text-lg font-semibold">
          Welcome to Logiclens Solutions, we provide advanced video analytics solutions. With a passion for technology and a deep understanding of data analysis, we empower businesses and organizations to unlock the full potential of video analytics. Our innovative solutions leverage cutting-edge artificial intelligence and machine learning algorithms to extract valuable insights from vast amounts of video data, enabling our clients to make data-driven decisions and optimize their operations.
        </p>
        <p className="text-lg font-semibold">
          At the heart of our story lies the incredible journey of three visionary entrepreneurs hailing from small towns. Fuelled by ambition and unwavering determination, we embarked on a transformative quest to build a Software-as-a-Service (SAAS) company that would revolutionize the tech industry.
        </p>
        <p className="text-lg font-semibold">
          Through countless late nights and tireless efforts, we defied the odds, overcoming challenges and embracing innovation at every turn. With a shared vision and complementary skill sets, we forged a formidable partnership, fusing our expertise in technology, business strategy, and customer-centricity.
        </p>
        <p className="text-lg font-semibold">
          From our modest beginnings, we have grown exponentially, propelled by our unwavering belief in the power of disruptive solutions. Today, our SAAS company stands tall, envisioning to empower organizations worldwide with cutting-edge software that streamlines operations, drives efficiency, and fosters growth.
        </p>
        <p className="text-lg font-semibold">
          Our journey embodies the spirit of perseverance and showcases the untapped potential that resides within each individual. As we continue to expand our reach and impact, we remain rooted in our small-town values, constantly pushing boundaries and challenging the status quo, fueling our passion to shape a future where technology propels businesses forward.
        </p>
        <p className="text-lg font-semibold">
          Join us on this remarkable voyage, where dreams take flight, and together, we harness the boundless possibilities of tomorrow.
        </p>
      </motion.div>
    </LampContainer>
  );
}