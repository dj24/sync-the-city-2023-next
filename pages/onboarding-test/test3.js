import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";

export default function Test3() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={2} totalSteps={3} />
      <ContinueAndBack
        onBack={() => router.push("/onboarding-test/test2")}
        onContinue={() => router.push("/expertise")}
      />
    </Container>
  );
}
