import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";

export default function Test2() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={1} totalSteps={5} />
      <Image src={"/IMG_6459 1.jpg"} alt="" width={500} height={500} />
      <QuestionTitle>What is the UK's central bank?</QuestionTitle>
      <ContinueAndBack
        onBack={() => router.push("/onboarding-1")}
        onContinue={() => router.push("/onboarding-test/test3")}
      />
    </Container>
  );
}
