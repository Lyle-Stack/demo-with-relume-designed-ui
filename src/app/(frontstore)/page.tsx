import { Logo } from "@/components/(frontstore)/Logo";
import { Header } from "../../components/(frontstore)/Header";
import { Benifits } from "@/components/(frontstore)/Benifits";
import { HowItWork } from "@/components/(frontstore)/HowItWork";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Logo />
      <Benifits />
      <HowItWork />
    </div>
  );
}
