import { Logo } from "@/components/(frontstore)/Logo";
import { Header } from "../../components/(frontstore)/Header";
import { Benifits } from "@/components/(frontstore)/Benifits";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Logo />
      <Benifits />
    </div>
  );
}
