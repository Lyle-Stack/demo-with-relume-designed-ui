"use client";
/* eslint-disable @next/next/no-img-element */

import { Button, ButtonProps, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

type HeroProps = {
  eyebowExternalLink: React.ComponentPropsWithoutRef<"a"> & { title: string };
  heading: string;
  description: string;
  buttons: (ButtonProps & { title: string })[];
  image: React.ComponentPropsWithoutRef<"img"> &
    Required<Pick<HTMLImageElement, "src" | "alt">>;
};

export const Hero = (props: Partial<HeroProps>) => {
  const {
    eyebowExternalLink: {
      title: eyebowTitle,
      className: eyebowClassName,
      ...eyebowProps
    },
    heading,
    description,
    buttons,
    image: { className: imageClassName, ...imageProps },
  } = {
    ...HeroDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="md:mb-18 mb-12 text-center lg:mb-20">
            <div className="w-full max-w-lg">
              <a
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  eyebowClassName,
                )}
                target="_blank"
                // TODO: change to github link
                href="#"
                {...eyebowProps}
              >
                {eyebowTitle}
                <ExternalLink className="ml-2 size-3" />
              </a>
              <h1 className="mb-2.5 mt-3 md:mb-6 md:mt-3">{heading}</h1>
              <p className="text-balance">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map(({ title, ...buttonPrpos }, index) => (
                  <Button key={`${title}-${index}`} {...buttonPrpos}>
                    {title}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className={cn("size-full object-cover", imageClassName)}
              {...imageProps}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroDefaults: HeroProps = {
  eyebowExternalLink: {
    title: "Source Code",
  },
  heading: "React.js & Next.js 14 App Route 的電商範例",
  description:
    "我正在建立一個，使用 Next.js 14 的網頁版電商，使用開放的原始碼，且公開開放專案內容。任何人有興趣，可以一起加入，想要使用的也可以免費使用（如果可以，告訴我你使用了）。",
  buttons: [
    { title: "進入 Demo", onClick: () => {} },
    { title: "示範用假按鈕", variant: "secondary" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "placeholder image",
  },
};
