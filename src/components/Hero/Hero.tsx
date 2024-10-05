"use client";
import React, { useRef } from "react";
import { WavyBackground } from "../ui/wavy-background";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function AuroraHero() {
  const letters = "LOGICLENS".split("");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.2]), springConfig);

  return (
    <motion.div ref={containerRef} className="min-h-[150vh] flex items-start justify-center pt-20">
      <WavyBackground className="max-w-4xl mx-auto pb-40 sticky top-20">
        <motion.div style={{ y, scale }}>
          <div className="text-4xl md:text-6xl lg:text-8xl text-white font-extrabold text-center mb-8">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
                whileHover={{
                  scale: 1.2,
                  color: "#00FFFF",
                  transition: { duration: 0.2 },
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-xl md:text-2xl text-white font-normal inter-var text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Leverage the power of AI to redefine your security
          </motion.p>
        </motion.div>
      </WavyBackground>
    </motion.div>
  );
}