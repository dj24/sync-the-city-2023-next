import { ContinueAndBack } from "/components/continue-and-back";
import { useRouter } from "next/router";
import { Container } from "/components/container";
import clsx from "clsx";
import Image from "next/image";

export default function moduleCompleted({ percentage = 55 }) {
  const router = useRouter();
  let onBoardingScore = 0;
  if (typeof window !== "undefined") {
    onBoardingScore = localStorage.getItem("module-score") || 0;
  }

  let level = 0;
  if (onBoardingScore > 2) {
    level = 1;
  }
  if (onBoardingScore > 3) {
    level = 2;
  }

  return (
    <Container className={"text-center"}>
      <h1>Well done!</h1>
      <ContinueAndBack onContinue={() => router.push("/home")} />
    </Container>
  );
}
