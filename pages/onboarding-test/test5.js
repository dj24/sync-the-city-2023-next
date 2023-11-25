import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";

export default function Test5() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={4} totalSteps={5} />
      <Image src={"/IMG_6449.jpg"} alt="" width={500} height={500} />
      <QuestionTitle>
        What percentage of your income should you allocate to savings and debt?
      </QuestionTitle>
      <ContinueAndBack
        onBack={() => router.push("/onboarding-1")}
        onContinue={() => router.push("/expertise")}
      />
    </Container>
  );
}
