/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

type LogoProps = {
  heading: string;
  logos: Array<
    React.ComponentPropsWithoutRef<"img"> &
      Required<Pick<HTMLImageElement, "src" | "alt">>
  >;
};

export const Logo = (props: Partial<LogoProps>) => {
  const { heading, logos } = {
    ...LogoDefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mx-auto mb-8 w-full max-w-lg text-center leading-[1.2] md:mb-10 lg:mb-12">
          {heading}
        </h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {logos.map(({ className, ...logo }, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="bg-neutral-lightest flex w-full items-start justify-center justify-self-center px-4 pb-4 pt-[0.875rem] md:p-[0.875rem]"
            >
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                className={cn("max-h-12 md:max-h-14", className)}
                {...logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LogoDefaults: LogoProps = {
  heading: "我用了這些...",
  // TODO: change logo to my tech stack
  logos: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Webflow logo 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
      alt: "Relume logo 3",
    },
  ],
};
