import Head from "next/head";
import Image from "next/image";
import { ProgressBar } from "../components/progress-bar";
import { Container } from "../components/container";
import { ModuleCard } from "../components/module-card";

const moduleColours = ["#B0C5F8", "#51A995", "#FDB772"];
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar progress={30} />
      <div className="rounded-lg border-2 border-[#FDB772] overflow-hidden">
        <Image alt="city" src="/isometric_city.png" width="500" height="500" />
      </div>
      {moduleColours.map((colour, i) => (
        <div style={{ alignSelf: i % 2 === 0 ? "start" : "end", width: "66%" }}>
          <ModuleCard
            href="/lesson"
            progress={30}
            background={colour}
            key={i}
          />
        </div>
      ))}
    </Container>
  );
}
