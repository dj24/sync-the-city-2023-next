import Image from "next/image";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import { ContinueAndBack } from "../components/continue-and-back";

export default function Test() {
  const router = useRouter();
  return (
    <Container className="bg-[#FFF4E9] items-center justify-center">
      <p className="mb-4 text-center">
        To decide which level you are at, <br />
        please take this quick test
      </p>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image
            src="/Frame 3.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <ContinueAndBack
          onContinue={() => router.push("/onboarding-test/test1")}
        />
      </div>
    </Container>
  );
}
