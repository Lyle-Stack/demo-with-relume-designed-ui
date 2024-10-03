/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button, ButtonProps } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FeaturesProps = {
  icon: React.ComponentPropsWithoutRef<"img"> &
    Required<Pick<HTMLImageElement, "src" | "alt">>;
  heading: string;
  description: string;
};

type BenifitsProps = {
  tagline: string;
  heading: string;
  buttons: ButtonProps[];
  features: FeaturesProps[];
};

export const Benifits = (props: Partial<BenifitsProps>) => {
  const { tagline, heading, buttons, features } = {
    ...BenifitsDefaults,
    ...props,
  };

  const scrollSection = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSection,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div className="md:sticky md:left-0 md:top-0 md:-mt-24 md:pb-10 md:pt-24 lg:-mt-28 lg:pt-28">
          <span className="lead mb-3 md:mb-4">{tagline}</span>
          <h1 className="rb-5 mb-5 md:mb-6">{heading}</h1>
          <div className="mt-6 flex items-center gap-4 md:mt-8">
            {buttons.map(({ children, ...props }, index) => (
              <Button key={`benifits-button-${index}`} {...props}>
                {children}
              </Button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]">
            <motion.div
              ref={scrollSection}
              className="bg-black"
              style={{ height }}
            />
          </div>
          {features.map(
            (
              { heading, description, icon: { className, ...iconProps } },
              index,
            ) => (
              <div
                key={index}
                className="grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10"
              >
                <div className="relative flex flex-col items-center justify-start py-10">
                  <div className="relative z-10 -mt-4 bg-white px-2 py-4 md:px-4">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img className={cn("size-12", className)} {...iconProps} />
                  </div>
                </div>
                <div className="py-10">
                  <span className="large mb-3 leading-[1.4] md:mb-4">
                    {heading}
                  </span>
                  <p>{description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const BenifitsDefaults: BenifitsProps = {
  tagline: "Proudly Open Source",
  heading: "我們開源，運行 & 使用開源工具，免費 & 無版權疑慮",
  buttons: [
    { children: "Button", variant: "secondary" },
    {
      children: (
        <>
          Button <ChevronRight />
        </>
      ),
      variant: "ghost",
    },
  ],
  // TODO: change all icon and desc
  features: [
    {
      icon: {
        src: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/package-open.svg",
        alt: "Next.js / React.js",
      },
      heading: "Next.js / React.js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: {
        src: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/package-open.svg",
        alt: "ShadCN",
      },
      heading: "ShadCN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: {
        src: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/package-open.svg",
        alt: "TailwindCSS",
      },
      heading: "TailwindCSS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: {
        src: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/package-open.svg",
        alt: "PostgreSQL",
      },
      heading: "PostgreSQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
};
