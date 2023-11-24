import Head from "next/head";
import { ProgressBar } from "../components/progress-bar";
import { Container } from "../components/container";
import { ModuleCard } from "../components/module-card";
import { Steps } from "../components/steps";

const moduleColours = ["#B0C5F8", "#51A995", "#FDB772"];
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar progress={30} />
      <Steps currentStep={2} totalSteps={5} />
      {moduleColours.map((colour, i) => (
        <ModuleCard background={colour} key={i} />
      ))}
    </Container>
  );
}
