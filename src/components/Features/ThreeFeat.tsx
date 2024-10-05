import React, { ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiChevronUp } from "react-icons/fi";
import {  AnimatePresence } from "framer-motion";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black pt-4">
      <h2 className="text-7xl px-4 py-8 text-center font-extrabold text-white">INDUSTRIES WE OFFER</h2>
      <TextParallaxContent
        imgUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenl1MTFmZ2w0MWxrNXo3cnZxMXA0dmtxZ2ZqMXF1Mjdxb2g0NHNkbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RiISl1mBw3G5ToCkjy/giphy.gif"
        subheading="Factories"
        heading="Smart Surveillance for Factories"
      >
        <ExampleContent industry="factories" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://media1.tenor.com/m/3cIAOjwJhpUAAAAC/retail-big-retail.gif"
        subheading="Retail Outlets"
        heading="Secure Retail Environments"
      >
        <ExampleContent industry="retail outlets" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Offices"
        heading="AI-Powered Office Monitoring"
      >
        <ExampleContent industry="offices" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://plus.unsplash.com/premium_photo-1664365805083-80ff9ccfde9d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Societies"
        heading="Secure societies"
      >
        <ExampleContent industry="societies" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Warehouses"
        heading="CCTV Solutions for Warehouses"
      >
        <ExampleContent industry="warehouses" />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1606414761913-5ece30a5f1b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Custom Requirements"
        heading="Tailored AI/ML CCTV Solutions"
      >
        <ExampleContent industry="custom requirements" />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ industry }: { industry: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const popupContent: { [key: string]: string } = {
    factories: "Logiclens offers cutting-edge video analytics solutions tailored for factories to boost safety, security, and operational efficiency. Our technology leverages AI-driven analytics to monitor production lines, detect equipment anomalies, and ensure compliance with safety protocols. With real-time alerts and detailed insights, factory managers can proactively address potential issues such as equipment malfunctions or safety hazards, reducing downtime and preventing accidents. Our solution also provides intelligent surveillance to monitor restricted areas and identify unauthorized access, ensuring the security of assets and personnel. By integrating with existing CCTV infrastructure, Logiclens delivers a seamless, scalable, and cost-effective solution for enhancing operational visibility and decision-making in industrial environments. Empower your factory with actionable intelligence and stay ahead in the era of smart manufacturing.",
    "retail outlets": "Logiclens provides advanced video analytics solutions for the retail sector, designed to enhance security, optimize operations, and improve customer experience. Our AI-powered technology enables retailers to monitor store activity in real-time, detecting suspicious behavior such as shoplifting or unauthorized access to restricted areas. Beyond security, our solution offers valuable insights into customer behavior, such as foot traffic patterns and dwell times, helping store managers optimize product placement and staffing levels. With features like real-time alerts and detailed analytics reports, retailers can make data-driven decisions to improve store layout, enhance loss prevention strategies, and deliver a more personalized shopping experience. Integrated seamlessly with existing CCTV systems, Logiclens offers a scalable, cost-effective way to transform retail surveillance into a powerful tool for business growth and security.",
    offices: "Logiclens offers state-of-the-art video analytics solutions for offices, enhancing security and operational efficiency. Our AI-driven technology monitors office spaces in real-time, providing instant alerts for unauthorized access, potential security breaches, and safety hazards. In addition to bolstering security, our solution helps optimize workplace management by monitoring occupancy levels, tracking employee movements, and identifying underutilized areas. This data empowers facility managers to improve space utilization, reduce energy costs, and ensure a safe and compliant work environment. By integrating seamlessly with existing CCTV infrastructure, Logiclens delivers a cost-effective, scalable solution to transform office surveillance into a strategic tool for enhancing safety, security, and productivity.",
    warehouses: "Logiclens provides advanced video analytics solutions specifically designed for warehouse environments, enhancing both security and operational efficiency. Our AI-driven technology monitors warehouse activities in real-time, detecting security threats such as unauthorized access, theft, and tampering. Beyond security, our solution helps streamline operations by tracking inventory movements, monitoring loading and unloading processes, and ensuring compliance with safety protocols. With features like real-time alerts and detailed analytics reports, warehouse managers can proactively address issues, minimize downtime, and prevent accidents. By integrating seamlessly with IP CCTV systems, Logiclens offers a scalable, cost-effective solution to transform traditional warehouse surveillance into a powerful tool for safeguarding assets, improving productivity, and optimizing resource management.",
    "custom requirements": "Logiclens offers tailored video analytics solutions designed to meet the specific needs of diverse industries and unique operational challenges. Our customizable AI-powered technology can detect a wide range of behaviors, such as loitering, crowd formation, and unusual movement patterns, providing actionable insights for specialized scenarios. Whether it's monitoring restricted areas, identifying suspicious activities, or ensuring compliance with industry-specific safety protocols, our solutions are adaptable to various environments, including factories, retail, offices, and warehouses. We collaborate closely with our clients to develop custom detection models for special use cases like PPE compliance, occupancy management, or customer behavior analysis. With Logiclens, organizations can leverage intelligent surveillance to enhance security, operational efficiency, and decision-making, transforming their video data into a powerful tool for addressing specific needs and driving business success.",
    "societies":"Logiclens provides advanced video analytics solutions specifically designed for buildings and societies, enhancing both security and operational efficiency. Our AI-driven technology monitors activities in real-time, detecting security threats such as unauthorized access, vandalism, and other suspicious behaviors. Beyond security, our solution streamlines building management by tracking foot traffic, monitoring access points, track entry and exit of vehicles and ensuring compliance with safety protocols. With features like real-time alerts and detailed analytics reports, facility managers can proactively address issues, minimize risks, and enhance overall safety. By integrating seamlessly with existing IP CCTV systems, Logiclens offers a scalable, cost-effective solution that transforms traditional surveillance into a powerful tool for safeguarding assets and improving community well-being."
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        AI/ML-Powered CCTV Solutions for {industry}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          We provide cutting-edge security solutions designed for {industry}. 
          Our AI/ML-powered CCTV systems ensure safety and real-time monitoring with advanced analytics.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Whether it&apos;s automating monitoring in factories or ensuring safety in retail outlets, 
          our solutions are tailored to your unique needs.
        </p>
        {!isExpanded && (
          <button 
            onClick={() => setIsExpanded(true)} 
            className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit flex items-center justify-between"
          >
            Learn more 
            <FiArrowUpRight className="ml-2" />
          </button>
        )}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden flex flex-col"
            >
              <p className="text-neutral-600 text-2xl mb-4">{popupContent[industry]}</p>
              <button 
                onClick={() => setIsExpanded(false)} 
                className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit flex items-center justify-between self-start"
              >
                Show less 
                <FiChevronUp className="ml-2" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextParallaxContentExample;