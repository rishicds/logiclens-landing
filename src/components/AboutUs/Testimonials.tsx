import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";


const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className=" text-black py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl text-white font-semibold">What our customers think</h3>
        <p className="text-white my-4">
          Our clients share their experience with us and how we helped them enhance their security and operations.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-gray-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-blue-500"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-blue-500"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  logo,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between bg-white text-black shadow-lg rounded-lg"
    >
      <img src={logo} alt={`${name} logo`} className="h-16 w-auto mx-auto mb-4" />
      <p className="text-lg lg:text-xl font-light italic my-8">
        &apos;{description}&apos;
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm text-gray-600">{title}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  logo: string;
  title: string;
  name: string;
  description: string;
}

const testimonials = [
  {
    logo: "https://minsulate.com/assets/images/logo/minsulate%20logo.png",
    description: "With the help of LogicLens' facial recognition and number plate detection software we are able to monitor the employees and vehicles on our factory helping us solve major issues.",
    name: "Minsulate Manufacturing Company",
    title: "Manufacturing Company",
  },
  {
    logo: "https://res.cloudinary.com/binarycode/image/upload/v1661862804/Qi%20Venture/0.Logos/Logo_4_QiVentureXOrtigan1_lmaj8w.svg",
    description: "With Logiclens Facial Recognition System we are monitoring the attendance of our employees using our existing CCTV system in place.",
    name: "Qi Ventures",
    title: "Corporate Office",
  },
  {
    logo: "https://osamdairy.com/wp-content/uploads/2018/04/logo.png",
    description: "With the help of Logiclens Video Analytics we are making sure we have eyes, alerts and reports of every hygienic compliances we need to take care which was earlier very difficult.",
    name: "Osam Dairy",
    title: "Food Processing Company",
  },
  {
    logo: "https://reteation.com/wp-content/themes/reteation/images/logo.svg",
    description: "We are able to monitor the unauthorised entry of people and also our produced product count. We have reduced theft significantly.",
    name: "Reteation Tea",
    title: "Tea Manufacturing Industry",
  },
];