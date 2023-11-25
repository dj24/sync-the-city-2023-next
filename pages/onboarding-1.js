import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import { ContinueAndBack } from "../components/continue-and-back";
import { Spacer } from "../components/spacer";
import { useEffect } from "react";

export default function Test() {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear("onboarding-score");
  }, []);
  return (
    <Container
      className={"flex flex-col items-center justify-start bg-[#F1E5FF]"}
    >
      <div className="flex flex-col items-center mt-8">
        <Image
          src="/IMG_6451 1.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />

        <div className={"flex flex-col items-center mt-20"}>
          <p className="mb-4 text-center">
            Finances ARE ruff, <br /> <br /> <br />
            so it's a good thing that <br />
            you're not on your own
          </p>
        </div>
      </div>
      <Spacer />
      <ContinueAndBack onContinue={() => router.push("/onboarding_exam")} />
    </Container>
  );
}
