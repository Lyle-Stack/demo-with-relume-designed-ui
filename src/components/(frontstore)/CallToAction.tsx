import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";
import { Input, InputProps } from "../ui/input";

type CTAProps = {
  heading: string;
  description: string;
  input: InputProps;
  button: ButtonProps;
  termsAndConditions: string;
  image: React.ComponentPropsWithoutRef<"img"> &
    Required<Pick<HTMLImageElement, "src" | "alt">>;
};
export const CTA = (props: Partial<CTAProps>) => {
  const {
    heading,
    description,
    input,
    button: { children: buttonChildren, ...buttonProps },
    termsAndConditions,
    image: { className: imageClassName, ...imageProps },
  } = {
    ...CTADefaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <div className="mb-0 mt-6 max-w-sm md:mt-8">
              <div className="mb-4 grid grid-cols-1 items-center gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:mt-8">
                <Input type="email" {...input} />
                <Button {...buttonProps}>{buttonChildren}</Button>
              </div>
              <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
            </div>
          </div>
          <div>
            <img
              className={cn("w-full object-cover", imageClassName)}
              {...imageProps}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CTADefaults: CTAProps = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  input: { placeholder: "Enter your email" },
  button: { children: "Sign up" },
  termsAndConditions: `
    <p class='text-xs'>
      By clicking Sign Up you're confirming that you agree with our
      <a href='#' class='underline'>Terms and Conditions</a>.
    </p>
    `,
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
};
