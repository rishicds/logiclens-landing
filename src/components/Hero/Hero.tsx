import React, { useRef, useState, useEffect } from "react";
import { WavyBackground } from "../ui/wavy-background";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function AuroraHero() {
  const letters = "LOGICLENS".split("");
  const containerRef = useRef(null);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const phrases = [
    "Leverage the power of AI to redefine your security",
    "Enhance your security with cutting-edge AI",
    "Transform your business with intelligent solutions"
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.1]), springConfig);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < phrases[phraseIndex].length) {
        setText((prev) => prev + phrases[phraseIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [charIndex, phraseIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div ref={containerRef} className="min-h-[100vh]  flex items-start justify-center pt-10 sm:pt-20">
      <WavyBackground className=" mb-20 sm:mb-40 sticky top-10 sm:top-20">
        <motion.div style={{ y, scale }}>
          <div className="text-6xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl text-white font-extrabold text-center mb-4 sm:mb-8">
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
          <motion.div
            className="text-xl sm:text-base md:text-xl lg:text-2xl text-green-400 font-mono text-center h-12 sm:h-16 flex items-center justify-center px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              textShadow: "0 0 8px rgba(74, 222, 128, 0.5)",
            }}
          >
            <span>{text}</span>
            {showCursor && <span className="animate-blink">|</span>}
          </motion.div>
        </motion.div>
      </WavyBackground>
    </motion.div>
  );
}