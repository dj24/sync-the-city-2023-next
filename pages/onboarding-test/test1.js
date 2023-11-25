import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";

export default function Test1() {
  const router = useRouter();
  return (
    <Container>
      <Steps currentStep={0} totalSteps={3} />
      <ContinueAndBack
        onContinue={() => router.push("/onboarding-test/test2")}
      />
    </Container>
  );
}
