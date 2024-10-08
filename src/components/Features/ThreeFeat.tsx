import React, { ReactNode, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiChevronUp } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <h2 className="text-4xl lg:text-7xl py-8 text-center font-extrabold text-white">
  INDUSTRIES WE OFFER
</h2>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/4686755/4686755-uhd_2560_1440_24fps.mp4"
        mediaType="video"
        subheading="Factories"
        heading="Smart Surveillance for Factories"
      >
        <ExampleContent industry="factories" />
      </TextParallaxContent>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/3723439/3723439-uhd_2732_1440_24fps.mp4"
        mediaType="video"
        subheading="Retail Outlets"
        heading="Secure Retail Environments"
      >
        <ExampleContent industry="retail outlets" />
      </TextParallaxContent>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/8347237/8347237-uhd_2560_1440_25fps.mp4"
        mediaType="video"
        subheading="Offices"
        heading="AI-Powered Office Monitoring"
      >
        <ExampleContent industry="offices" />
      </TextParallaxContent>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/856661/856661-hd_1920_1080_25fps.mp4"
        mediaType="video"
        subheading="Societies"
        heading="Secure Societies"
      >
        <ExampleContent industry="societies" />
      </TextParallaxContent>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/4294436/4294436-uhd_2560_1440_25fps.mp4"
        mediaType="video"
        subheading="Warehouses"
        heading="CCTV Solutions for Warehouses"
      >
        <ExampleContent industry="warehouses" />
      </TextParallaxContent>
      <TextParallaxContent
        mediaUrl="https://videos.pexels.com/video-files/18068806/18068806-uhd_2558_1440_24fps.mp4"
        mediaType="video"
        subheading="Custom Requirements"
        heading="Tailored AI CCTV Solutions"
      >
        <ExampleContent industry="custom requirements" />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  mediaUrl,
  mediaType,
  subheading,
  heading,
  children,
}: {
  mediaUrl: string;
  mediaType: "video" | "image";
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
        <StickyMedia mediaUrl={mediaUrl} mediaType={mediaType} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyMedia = ({ mediaUrl, mediaType }: { mediaUrl: string; mediaType: "video" | "image" }) => {
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
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      {mediaType === "video" ? (
        <video
          src={mediaUrl}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          style={{
            backgroundImage: `url(${mediaUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        />
      )}
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
    "societies":"Logiclens provides advanced video analytics solutions specifically designed for buildings and societies, enhancing both security and operational efficiency. Our AI-driven technology monitors activities in real-time, detecting security threats such as unauthorized access, vandalism, and other suspicious behaviors. Beyond security, our solution streamlines building management by tracking foot traffic, monitoring access points, track entry and exit of vehicles and ensuring compliance with safety protocols. With features like real-time alerts and detailed analytics reports, facility managers can proactively address issues, minimize risks, and enhance overall safety. By integrating seamlessly with existing IP CCTV systems, Logiclens offers a scalable, cost-effective solution that transforms traditional surveillance into a powerful tool for safeguarding assets and improving community well-being."
  };
  const introContent: { [key: string]: string } = {
    factories: "Enhance your factory's security and efficiency with our AI-powered CCTV solutions. Monitor production lines, detect anomalies, and ensure safety compliance in real-time.",
    "retail outlets": "Revolutionize your retail security and customer insights with our smart surveillance. Prevent theft, analyze foot traffic, and optimize store layout for better customer experiences.",
    offices: "Transform your office security and space management with our intelligent monitoring systems. Detect unauthorized access, optimize workspace utilization, and ensure a safe work environment.",
    warehouses: "Streamline your warehouse operations and security with our advanced CCTV analytics. Track inventory, monitor loading processes, and prevent theft with real-time alerts.",
    "custom requirements": "Get a tailor-made surveillance solution for your unique business needs. Our customizable AI technology adapts to your specific security and operational challenges.",
    societies: "Elevate community safety and management with our smart surveillance for societies. Monitor common areas, track vehicle movement, and ensure resident security with advanced analytics."
  };

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold text-neutral-600 md:col-span-4">
        AI Powered CCTV Solutions for {industry}
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          {introContent[industry]}
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
              <p className="text-neutral-600 text-2xl w-[40rem] mb-4 text-justify mx-auto">
  {popupContent[industry]}
</p>
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