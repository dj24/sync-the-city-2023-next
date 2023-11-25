import Head from "next/head";
import Image from "next/image";
import { ProgressBar } from "../components/progress-bar";
import { Container } from "../components/container";
import { ModuleCard } from "../components/module-card";
import { BuddyBucks } from "../components/buddy-bucks";
import { YourCity } from "../components/your-city";
import { BuddyIllustration } from "../components/buddy-illustration";

const modules = [
  {
    colour: "#B0C5F8",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
  },
  {
    colour: "#51A995",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
  },
  {
    colour: "#FDB772",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
  },
  {
    colour: "#B0C5F8",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
  },
  {
    colour: "#51A995",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
  },
  {
    colour: "#FDB772",
    title: "Lorem Ipsum",
    content:
      "Learn about loreum ipsum ghsi ahev aksg deicgwvbc shavetc eisgwv dyvwrti dhdsvertj dhdudk sgstrwhi sbdhfi sbhdyki.",
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
      <div className="rounded-lg border-2 border-[#FDB772] overflow-hidden">
        <Image alt="city" src="/isometric_city.png" width="500" height="500" />
      </div>
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
