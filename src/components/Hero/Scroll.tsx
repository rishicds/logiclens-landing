import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";
  
  export const VelocityText = () => {
    const targetRef = useRef(null);
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"],
    });
  
    const scrollVelocity = useVelocity(scrollYProgress);
  
    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });
  
    return (
     <>
        <div className="sticky top-0 flex overflow-hidden">
          <motion.p
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap mt-20 text-3xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
          >
           We build the best AI security solutions for your business.We build the best AI security solutions for your business.We build the best AI security solutions for your business.
          </motion.p>
        </div>
        </>
    );
  };