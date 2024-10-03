/* eslint-disable @next/next/no-img-element */

import { ChevronRight } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

type StepProps = {
  image: React.ComponentPropsWithoutRef<"img"> &
    Required<Pick<HTMLImageElement, "src" | "alt">>;
  heading: string;
  description: string;
};

type HowItWorkProps = {
  tagline: string;
  heading: string;
  description: string;
  steps: StepProps[];
  buttons: ButtonProps[];
};

export const HowItWork = (props: Partial<HowItWorkProps>) => {
  const { tagline, heading, description, steps, buttons } = {
    ...HowItWorkDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="md:mb-18 mb-12 text-center lg:mb-20">
            <div className="w-full max-w-lg">
              <span className="lead mb-3 md:mb-4">{tagline}</span>
              <h1 className="mb-5 md:mb-6">{heading}</h1>
              <p className="text-balance">{description}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {steps.map(({ image, heading, description }, index) => (
            <div key={`how-it-work-${index}`}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img loading="lazy" {...image} />
              <h3>{heading}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

        <div className="md:mt-18 lg:mt:20 mt-12">
          <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
            {buttons.map(({ children, ...props }, index) => (
              <Button key={`benifits-button-${index}`} {...props}>
                {children}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorkDefaults: HowItWorkProps = {
  tagline: "How Will It  Go",
  heading: "目前還不能使用...一步步進行中...",
  description: `唯美的版型，不讓產品看起來廉價；乾淨的頁面，讓買家看到產品本身。希望更多人加入，建立一個人人可以開店的方法，超低成本開啟一家店，不用受平台活動、廣告、推薦系統影響，自己穩步建立一個店商。`,
  steps: [
    {
      image: {
        src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg",
        alt: "",
      },
      heading: "Step 1",
      description: "使用蝦皮 Open API 進行倉儲、出貨管理，與印單。",
    },
    {
      image: {
        src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg",
        alt: "",
      },
      heading: "Step 2",
      description: "串接金流，可以在站內上架、出售商品。",
    },
    {
      image: {
        src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg",
        alt: "",
      },
      heading: "Step 3",
      description: "串接物流，讓使用者選擇物流，商家方便出貨及追蹤貨運。",
    },
    {
      image: {
        src: "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316262904aee69_Placeholder%20Image%20-%20Landscape.svg",
        alt: "",
      },
      heading: "Step 4",
      description: "Shipee 正式上路！如果走到這一步，還沒胎死腹中，皆大歡喜。",
    },
  ],
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
};
