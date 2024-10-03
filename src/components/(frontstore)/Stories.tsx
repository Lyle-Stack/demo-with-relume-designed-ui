/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageProps = React.ComponentPropsWithoutRef<"img"> &
  Required<Pick<HTMLImageElement, "src" | "alt">>;

type StoriesProps = {
  contents: {
    tagline: string;
    heading: string;
    description: string;
    buttons: ButtonProps[];
    image: ImageProps;
  }[];
};

export const Stories = (props: Partial<StoriesProps>) => {
  const { contents } = {
    ...StoriesDefaults,
    ...props,
  };

  const scrollSection = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const target = scrollSection?.current;
      if (!target) return;
      const viewHeight = window.innerHeight;
      const currentScrollPosition =
        viewHeight / 2 - target.getBoundingClientRect().top;
      const currentSection = Math.floor(currentScrollPosition / viewHeight);

      if (currentSection < 0) {
        setActiveSection(-1);
      } else {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-[5%]" ref={scrollSection}>
      <div className="container relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
        <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
          {contents.map(({ image: { className, ...props } }, index) => (
            <img
              key={`stories-images-${index}`}
              className={cn(
                "absolute w-full",
                {
                  "opacity-100": activeSection === index,
                  "opacity-0": activeSection !== index,
                },
                {
                  "opacity-100": index === 0 && activeSection < 0,
                },
                {
                  "opacity-100":
                    index === contents.length - 1 &&
                    activeSection >= contents.length,
                },
                className,
              )}
              {...props}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 md:block">
          {contents.map(
            (
              {
                tagline,
                heading,
                description,
                buttons,
                image: { className: imageClassName, ...imageProps },
              },
              contentIndex,
            ) => (
              <div key={`stories-contents-${contentIndex}`}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <span className="lead">{tagline}</span>
                  <h2>{heading}</h2>
                  <p>{description}</p>
                  <div className="mt-6 flex items-center gap-x-4 md:mt-8">
                    {buttons.map(({ children, ...props }, buttonIndex) => (
                      <Button
                        key={`stories-contents-${contentIndex}-buttons-${buttonIndex}`}
                        {...props}
                      >
                        {children}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img
                      className={cn("w-full", imageClassName)}
                      {...imageProps}
                    />
                  </div>
                </div>
                <div
                  className={cn(
                    "fixed inset-0 -z-10 bg-[#e5e5e5] transition-opacity duration-300",
                    {
                      "opacity-100": activeSection % 2 === 0,
                    },
                    {
                      "opacity-0":
                        activeSection < 0 ||
                        activeSection >= contents.length ||
                        activeSection % 2 === 1,
                    },
                  )}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const StoriesDefaults: StoriesProps = {
  contents: [
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { children: "Button", variant: "secondary", size: "lg" },
        {
          children: (
            <>
              Button <ChevronRight />
            </>
          ),
          variant: "link",
          size: "lg",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { children: "Button", variant: "secondary", size: "lg" },
        {
          children: (
            <>
              Button <ChevronRight />
            </>
          ),
          variant: "link",
          size: "lg",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { children: "Button", variant: "secondary", size: "lg" },
        {
          children: (
            <>
              Button <ChevronRight />
            </>
          ),
          variant: "link",
          size: "lg",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      tagline: "Tagline",
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      buttons: [
        { children: "Button", variant: "secondary", size: "lg" },
        {
          children: (
            <>
              Button <ChevronRight />
            </>
          ),
          variant: "link",
          size: "lg",
        },
      ],
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};
