import { Logo } from "@/components/(frontstore)/Logo";
import { Hero } from "../../components/(frontstore)/Hero";
import { Benifits } from "@/components/(frontstore)/Benifits";
import { HowItWork } from "@/components/(frontstore)/HowItWork";
import { Faqs } from "@/components/(frontstore)/Faqs";
import { Stories } from "@/components/(frontstore)/Stories";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Logo />
      <Benifits />
      <HowItWork />
      <Faqs />
      <Stories />
    </div>
  );
}
