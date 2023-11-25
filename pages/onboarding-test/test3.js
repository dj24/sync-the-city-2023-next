import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";

export default function Test3() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={2} totalSteps={5} />
      <Image src={"/IMG_6446.jpg"} alt="" width={500} height={500} />
      <QuestionTitle>What is the purpose of a credit score?</QuestionTitle>
      <ContinueAndBack
        onBack={() => router.push("/onboarding-1")}
        onContinue={() => router.push("/onboarding-test/test4")}
      />
    </Container>
  );
}
