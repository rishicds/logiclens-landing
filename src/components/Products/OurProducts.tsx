import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import cctvGif from '../../app/images/cctv.gif';
import vehicleGif from '../../app/images/vehicle.gif';
import objectGif from '../../app/images/object.gif';
import signGif from '../../app/images/sign.gif';
import clothingGif from '../../app/images/clothing.gif';
import perimeterGif from '../../app/images/perimeter.gif';
import customGif from '../../app/images/custom.gif';

const OppoScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className="bg-black text-black p-4 grid place-items-center">
        
      </div>
      <section ref={targetRef} className="flex bg-black text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      <div className="bg-black text-white p-4 grid place-items-center">
        
      </div>
    </>
  );
};

const Content = ({ content }: { content: typeof items }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col justify-between ${
            idx % 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <h3 className="text-6xl font-medium">{title}</h3>
          <p className="font-light w-full text-2xl ">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: typeof items;
  scrollYProgress: MotionValue<number>;
}) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-24 md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          
          
          <Image
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
            width={100}
            height={100}
            
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    title: "Facial Recognition System",
    description:
      "Our Facial Recognition System employs state-of-the-art algorithms to accurately identify and verify individuals in real-time, bolstering security and access control. Use cases include access control, event security, customer insights, and attendance monitoring.",
    img: cctvGif,
  },
  {
    id: 2,
    title: "Number Plate Detection System",
    description:
      "Automatically capture and recognize vehicle license plates, streamlining traffic management and enhancing security. Applications include traffic law enforcement, parking management, fleet management, and access control for facilities.",
    img: vehicleGif,
  },
  {
    id: 3,
    title: "People, Animal, and Object Recognition",
    description:
      "Our technology tracks the movement of people, animals, and objects for critical data analysis. Use it for retail analytics, wildlife monitoring, public safety, and inventory management.",
    img: objectGif,
  },
  {
    id: 4,
    title: "Custom Behavior Detection",
    description:
      "Detect specific behaviors such as suspicious activity, retail loss prevention, employee productivity, or emergency response activation, tailored to your specific needs.",
    img: signGif,
  },
  {
    id: 5,
    title: "Clothing Attributes Detection",
    description:
      "Analyze clothing styles and attributes to gain valuable insights for retail and marketing strategies. Useful for trend analysis, personalized shopping experiences, and market research.",
    img: clothingGif,
  },
  {
    id: 6,
    title: "Perimeter Breach Detection",
    description:
      "Monitor designated boundaries for unauthorized entries to ensure enhanced security for sensitive areas, including facility security, event safety, and wildlife protection.",
    img: perimeterGif,
  },
  {
    id: 7,
    title: "Custom Event Detection",
    description:
      "Customizable platform to detect specific events like crowd gatherings, emergencies, workflow processes, and marketing interactions for tailored monitoring and tracking.",
    img: customGif,
  },
];