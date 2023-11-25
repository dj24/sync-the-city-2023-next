import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";

export default function Test2() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={1} totalSteps={3} />
      <ContinueAndBack
        onBack={() => router.push("/onboarding-test/test1")}
        onContinue={() => router.push("/onboarding-test/test3")}
      />
    </Container>
  );
}
