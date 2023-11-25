import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";
import clsx from "clsx";
import { Spacer } from "../../components/spacer";
import { MultipleChoiceSelection } from "../../components/multiple-choice-selection";
import { useState } from "react";

const correctAnswerIndex = 1;

export default function Test2() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  return (
    <Container>
      <Steps currentStep={1} totalSteps={4} />
      <Image
        style={{ height: 228 }}
        src={"/IMG_6459 1.jpg"}
        alt=""
        width={500}
        height={500}
      />
      <QuestionTitle>What is the UK's central bank?</QuestionTitle>
      <Spacer />
      <MultipleChoiceSelection
        onClick={() => setSelectedAnswer(0)}
        selected={selectedAnswer === 0}
        colour={0}
      >
        Nationwide
      </MultipleChoiceSelection>
      <MultipleChoiceSelection
        onClick={() => setSelectedAnswer(1)}
        selected={selectedAnswer === 1}
        colour={1}
      >
        Bank of England
      </MultipleChoiceSelection>
      <MultipleChoiceSelection
        onClick={() => setSelectedAnswer(2)}
        selected={selectedAnswer === 2}
        colour={2}
      >
        Bank of Britain
      </MultipleChoiceSelection>
      <Spacer />
      <ContinueAndBack
        onBack={() => router.push("/onboarding-1")}
        onContinue={() => {
          const currentOnboardingScore =
            localStorage.getItem("onboarding-score") || 0;
          if (selectedAnswer === correctAnswerIndex) {
            localStorage.setItem(
              "onboarding-score",
              parseInt(currentOnboardingScore) + 1,
            );
          }
          router.push("/onboarding-test/test3");
        }}
      />
    </Container>
  );
}
