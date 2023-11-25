import Head from "next/head";
import Image from "next/image";
import { ProgressBar } from "../components/progress-bar";
import { Container } from "../components/container";
import { ModuleCard } from "../components/module-card";
import { BuddyBucks } from "../components/buddy-bucks";
import { YourCity } from "../components/your-city";
import { BuddyIllustration } from "../components/buddy-illustration";
import Link from "next/link";

const modules = [
  {
    colour: "#B0C5F8",
    title: "Smart Saving",
    content:
      "One of they key aspects of saving, is knowing where to start. This module will introduce practical advice to build healthy habits.",
  },
  {
    colour: "#51A995",
    title: "Types of Bank accounts",
    content:
      "Setting up a bank account can feel overwhelming. This module will give you the basics and help you understand your choices.",
  },
  {
    colour: "#FDB772",
    title: "What is a credit score?",
    content:
      "Credit scores are super important, but there is a lot of misunderstanding about what influences them. Take this module to learn more.",
  },
  {
    colour: "#B0C5F8",
    title: "Introduction to Income Tax",
    content:
      "Income tax is a big part of life. Understanding the basics will help you make informed decisions.",
  },
];
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar progress={30} />
      <BuddyBucks />
      <Link
        href="/game"
        className="rounded-lg border-2 border-[#FDB772] overflow-hidden"
      >
        <Image alt="city" src="/isometric_city.png" width="500" height="500" />
      </Link>
      <YourCity />
      {modules.map((module, i) => (
        <div style={{ alignSelf: i % 2 === 0 ? "start" : "end", width: "66%" }}>
          <ModuleCard
            title={module.title}
            href="/lesson"
            progress={30}
            background={module.colour}
            key={i}
          >
            {module.content}
          </ModuleCard>
        </div>
      ))}
      <BuddyIllustration />
    </Container>
  );
}
