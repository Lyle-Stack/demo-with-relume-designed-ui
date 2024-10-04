import { Logo } from "@/components/(frontstore)/Logo";
import { Hero } from "../../components/(frontstore)/Hero";
import { Benifits } from "@/components/(frontstore)/Benifits";
import { HowItWork } from "@/components/(frontstore)/HowItWork";
import { Faqs } from "@/components/(frontstore)/Faqs";
import { Stories } from "@/components/(frontstore)/Stories";
import { CTA } from "@/components/(frontstore)/CallToAction";
import { Footer } from "@/components/(frontstore)/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Logo />
      <Benifits />
      <HowItWork />
      <Faqs />
      <Stories />
      <CTA />
      <Footer />
    </div>
  );
}
