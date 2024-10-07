import React, { useRef, useState, useEffect } from "react";
import { WavyBackground } from "../ui/wavy-background";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function AuroraHero() {
  const letters = "LOGICLENS".split("");
  const containerRef = useRef(null);
  const [text, setText] = useState("");
  const fullText = "Leverage the power of AI to redefine your security";
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.2]), springConfig);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index, text]);

  return (
    <motion.div ref={containerRef} className="min-h-[150vh] flex items-start justify-center pt-20">
      <WavyBackground className="max-w-4xl mx-auto pb-40 sticky top-20">
        <motion.div style={{ y, scale }}>
          <div className="text-4xl md:text-8xl lg:text-9xl text-white font-extrabold text-center mb-8">
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
                  scale: 1.4,
                  color: "#00FFFF",
                  textShadow: "0 0 15px #00FFFF",
                  transition: { duration: 0.2 },
                }}
                className="inline-block cursor-pointer transition-all duration-200"
                style={{
                  textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                }}
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
            style={{
              textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
            }}
          >
            {text}
          </motion.p>
        </motion.div>
      </WavyBackground>
    </motion.div>
  );
}