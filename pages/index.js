import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import { ContinueAndBack } from "../components/continue-and-back";
import { Spacer } from "../components/spacer";
import { BuddyIllustration } from "../components/buddy-illustration";
import { useEffect } from "react";

export default function Test() {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear("onboarding-score");
  }, []);
  return (
    <Container className={"flex flex-col items-center justify-center"}>
      <Image
        width={400}
        height={400}
        src="/buddylogo.png"
        alt={"buddy"}
        className="-mb-16 mt-16"
      />
      <h1 className="text-4xl">Budget Buddy</h1>
      <p className="text-lg">Because finances are ruff</p>
      <Spacer />
      <ContinueAndBack onContinue={() => router.push("/onboarding-1")} />
    </Container>
  );
}
