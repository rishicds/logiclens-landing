import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter';

export const GridHoverHero = () => {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(document.body.clientHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    //@ts-expect-error-keno bolbo
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(129, 140, 248, 0)" }, { duration: 1.5 });
  };

  const handleMouseEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    //@ts-expect-error-ami janina
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(129, 140, 248, 1)" }, { duration: 0.15 });
  };

  return (
    <div className="bg-neutral-950">
      <div
        ref={scope}
        className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        {/* Static Heading */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white">
          OUR SOLUTIONS
        </h1>

        {/* Typewriter effect for the subtitle */}
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-neutral-500">
          <Typewriter
            words={['Explore world-class products and deploy them in your business with Logiclens.']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* Contact Us Button */}
        <Link href="/contact">
          <button className="pointer-events-auto bg-indigo-400 px-4 py-2 text-base sm:text-xl font-bold uppercase text-neutral-950 mix-blend-difference">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};
