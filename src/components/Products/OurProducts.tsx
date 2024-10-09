import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const OppoScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className="bg-black text-black p-4 grid place-items-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Videos content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black text-white p-4 grid place-items-center">
        <h2 className="text-2xl">Enhancing Security and Efficiency</h2>
      </div>
    </>
  );
};

interface ContentItem {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
  features: string[];
}

const Content: React.FC<{ content: ContentItem[] }> = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description, features }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-6xl font-medium">{title}</h3>
          <ul className="list-disc list-inside text-2xl">
            {features.map((feature, featureIdx) => (
              <li className="" key={featureIdx}>{feature}</li>
            ))}
          </ul>
          <p className="font-light w-full text-2xl mb-4">{description}</p>
        </div>
      ))}
    </div>
  );
};

interface VideosProps {
  content: ContentItem[];
  scrollYProgress: MotionValue<number>;
}

const Videos: React.FC<VideosProps> = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ videoSrc, id, title }) => (
          <div key={id} className="h-screen w-full">
            <video
              className="w-full h-full object-cover"
              src={videoSrc}
              title={title}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const items: ContentItem[] = [
  {
    id: 1,
    title: "Facial Recognition System",
    description:
      "Accurately identify and verify individuals in real-time. Use cases include access control, event security, customer insights, and attendance monitoring.",
    videoSrc: "face.mp4",
    features: [
      "Access control through facial recognition",
      "Event security for real-time identification",
      "Customer demographic analysis for marketing",
      "Automated attendance monitoring in workplaces",
    ],
  },
  {
    id: 2,
    title: "Number Plate Detection System",
    description:
      "Automatically capture and recognize vehicle license plates. Applications include traffic law enforcement, parking management, fleet management, and access control for facilities.",
    videoSrc: "car.mp4",
    features: [
      "Identify vehicles for traffic law enforcement",
      "Monitor parking management and access control",
      "Track company vehicles in fleet management",
      "Secure access control for facilities based on vehicle",
    ],
  },
  {
    id: 3,
    title: "People, Animal, and Object Counting",
    description:
      "Track the movement of people, animals, and objects for critical data analysis. Use it for retail analytics, wildlife monitoring, public safety, and inventory management.",
    videoSrc: "animal.mp4",
    features: [
      "Track foot traffic for retail analytics",
      "Monitor wildlife movements for conservation efforts",
      "Ensure public safety by monitoring crowd sizes",
      "Track objects in warehouses for inventory management",
    ],
  },
  {
    id: 4,
    title: "Custom Behavior Detection",
    description:
      "Detect specific behaviors such as suspicious activity, retail loss prevention, employee productivity, or emergency response activation, tailored to your needs.",
    videoSrc: "custom.mp4",
    features: [
      "Monitor suspicious activity in public spaces",
      "Detect retail theft or loss prevention actions",
      "Track employee productivity based on behaviors",
      "Trigger alerts for emergency responses",
    ],
  },
  {
    id: 5,
    title: "Clothing Attributes Detection",
    description:
      "Analyze clothing styles and attributes for retail insights. Useful for trend analysis, personalized shopping experiences, and market research.",
    videoSrc: "/cloth.mp4",
    features: [
      "Analyze customer clothing preferences for marketing",
      "Monitor clothing trends over time for inventory planning",
      "Personalized shopping experience based on clothing",
      "Gather market research for brand positioning",
    ],
  },
  {
    id: 6,
    title: "Perimeter Breach Detection",
    description:
      "Monitor designated boundaries for unauthorized entries to ensure security. Applications include facility security, event safety, and wildlife protection.",
    videoSrc: "perimeter.mp4",
    features: [
      "Alert security for perimeter breaches",
      "Enhance facility security by monitoring sensitive zones",
      "Ensure safety by securing event perimeters",
      "Protect wildlife reserves from unauthorized access",
    ],
  },
  {
    id: 7,
    title: "Custom Event Detection",
    description:
      "Customizable platform to detect specific events like crowd gatherings, emergencies, workflow processes, and marketing interactions.",
    videoSrc: "event.mp4",
    features: [
      "Monitor crowd gatherings for potential safety risks",
      "Detect specific emergency events in real-time",
      "Track workflow events to improve manufacturing processes",
      "Analyze customer interactions during marketing campaigns",
    ],
  },
];

export default OppoScroll;