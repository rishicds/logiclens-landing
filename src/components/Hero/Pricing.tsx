import React, { ReactNode, CSSProperties } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const DarkGradientPricing = () => {
  return (
    <section
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 0%, rgba(13,13,17,1), rgba(9,9,11,1))",
      }}
      className="relative overflow-hidden bg-zinc-950 text-zinc-200 selection:bg-zinc-600"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Our Pricing
          </h2>
          <p className="text-center text-base text-zinc-400 md:text-lg">
            Choose the best solution for your needs, starting with a free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Free Trial */}
          <PriceCard
            tier="Free Trial"
            price="Rs.0"
            bestFor="1 Camera, 1 Use Case"
            CTA={<GhostButton className="w-full">Start 30 day Trial</GhostButton>}
            benefits={[
              { text: "1 Camera", checked: true },
              { text: "1 Detection Use Case", checked: true },
              { text: "Basic Reporting", checked: false },
              { text: "Priority Support", checked: false },
              { text: "Advanced Analytics", checked: false },
              { text: "Custom Integrations", checked: false },
            ]}
          />

          {/* Out of the Box */}
          <PriceCard
            tier="Out of the Box"
            price="RsXXXX/mo"
            bestFor="Multi Cams, Advanced Detections"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                14-Day Free Trial
              </GhostButton>
            }
            benefits={[
              { text: "Fixed Cameras", checked: true },
              { text: "Advanced Detections", checked: true },
              { text: "Basic Reporting", checked: true },
              { text: "Priority Support", checked: false },
              { text: "Advanced Analytics", checked: false },
              { text: "Custom Integrations", checked: false },
            ]}
          />

          {/* Custom Solution */}
          <PriceCard
            tier="Custom Solution"
            price="Contact Us"
            bestFor="Advanced Detections, Large Setup"
            CTA={<GhostButton className="w-full">Contact Us</GhostButton>}
            benefits={[
              { text: "Unlimited Cameras", checked: true },
              { text: "Advanced Detections", checked: true },
              { text: "Full Analytics and Reporting", checked: true },
              { text: "Priority Support", checked: true },
              { text: "Custom Integrations", checked: true },
              { text: "Onsite Support", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }: PriceCardProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <FiCheck />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <FiX />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};

const Card = ({ className, children, style = {} }: CardProps) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={twMerge(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const GhostButton = ({ children, className, ...rest }: GhostButtonProps) => {
  return (
    <button
      className={twMerge(
        "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type PriceCardProps = {
  tier: string;
  price: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
};

type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

type BenefitType = {
  text: string;
  checked: boolean;
};

type GhostButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
