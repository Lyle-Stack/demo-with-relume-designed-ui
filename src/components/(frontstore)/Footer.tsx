import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

type FooterProps = {
  logo: {
    url: string;
  } & React.ComponentPropsWithoutRef<"img"> &
    Required<Pick<HTMLImageElement, "src" | "alt">>;
  columnLinks: {
    links: React.ComponentPropsWithRef<"a">[];
  }[];
  socialMediaLinks: {
    url: string;
    icon: React.ReactNode;
  }[];
  footerText: string;
  footerLinks: {
    title: string;
    url: string;
  }[];
};

export const Footer = (props: Partial<FooterProps>) => {
  const {
    logo: { url: logUrl, className: logoImgClassName, ...urlImg },
    footerText,
    columnLinks,
    footerLinks,
    socialMediaLinks,
  } = {
    ...FooterDefaults,
    ...props,
  };

  return (
    <footer className="md:py-18 px-[5%] py-12 lg:py-20">
      <div className="container">
        <div className="md:pb-18 grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href={logUrl} className="lg:justify-self-start">
            <img
              {...urlImg}
              className={cn("inline-block", logoImgClassName)}
            />
          </a>
          {columnLinks.map((column, index) => (
            <ul
              key={`footer-column-${index}`}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map(({ children, ...link }, linkIndex) => (
                <li
                  key={`footer-column-${index}-link-${linkIndex}`}
                  className="font-semibold"
                >
                  <a {...link}>{children}</a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
              <li
                key={index}
                className="underline decoration-black underline-offset-1"
              >
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export const FooterDefaults: FooterProps = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { children: "Link One", href: "#" },
        { children: "Link Two", href: "#" },
        { children: "Link Three", href: "#" },
        { children: "Link Four", href: "#" },
        { children: "Link Five", href: "#" },
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <Facebook className="size-6" /> },
    { url: "#", icon: <Instagram className="size-6" /> },
    { url: "#", icon: <Twitter className="size-6 p-0.5" /> },
    { url: "#", icon: <Linkedin className="size-6" /> },
    { url: "#", icon: <Youtube className="size-6" /> },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
