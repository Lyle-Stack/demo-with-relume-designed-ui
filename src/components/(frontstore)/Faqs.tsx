/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import React from "react";
import { buttonVariants } from "../ui/button";

type FaqsProps = {
  heading: string;
  description: string;
  questions: {
    image: React.ComponentPropsWithoutRef<"img"> &
      Required<Pick<HTMLImageElement, "src" | "alt">>;
    title: string;
    description: string;
  }[];
  linkButton: React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    description: string;
  };
};

export const Faqs = (props: Partial<FaqsProps>) => {
  const {
    heading,
    description,
    questions,
    linkButton: {
      title: linkTitle,
      className: linkClassName,
      description: linkDesc,
      ...linkProps
    },
  } = {
    ...FaqsDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="md:mb-18 mb-12 text-center lg:mb-20">
            <div className="w-full max-w-lg">
              <h1>{heading}</h1>
              <p className="text-size-medium">{description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16">
          {questions.map(
            (
              { image: { className, ...imageProps }, title, description },
              index,
            ) => (
              <div
                key={`faqs-item-${index}`}
                className="flex flex-col items-center"
              >
                <div className="mb-3 md:mb-6">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    loading="lazy"
                    {...imageProps}
                    className={cn("size-12 object-cover", className)}
                  />
                </div>
                <span className="large">{title}</span>
                <p>{description}</p>
              </div>
            ),
          )}
        </div>
        <div className="mt-12 md:mt-14 lg:mt-16">
          <div className="flex flex-col items-center">
            <h2>{linkTitle}</h2>
            <p>{linkDesc}</p>
            <div className="mt-6 md:mt-8">
              <a
                {...linkProps}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer",
                  linkClassName,
                )}
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqsDefaults: FaqsProps = {
  heading: "常見問題",
  description: "這是還在醞釀的專案，有問題可以直接聯繫我。",
  questions: Array.from({ length: 6 }).map((_, index) => ({
    image: {
      src: "https://s3.ap-southeast-2.amazonaws.com/lyleliao.com/public/package-open.svg",
      alt: "",
    },
    title: `Question ${index + 1}`,
    description: `Answer ${index + Math.floor(Math.random() * 1_000)} 隨機問題與回答，佔位子 Demo`,
  })),
  linkButton: {
    title: "還有其他問題？",
    description: "可以直接告訴我，提問 or 幫助，都歡迎。",
    children: "聯繫我",
  },
};
