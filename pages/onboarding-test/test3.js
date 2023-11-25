import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";
import { useState } from "react";
import { MultipleChoiceSelection } from "../../components/multiple-choice-selection";
import { Spacer } from "../../components/spacer";

const correctAnswerIndex = 0;

const answers = [
  "To measure an individual’s creditworthiness",
  "To measure an individual’s total wealth",
  "To measure an individual’s property value",
  "To show how wealthy you are",
];

export default function Test3() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  return (
    <Container>
      <Steps currentStep={2} totalSteps={4} />
      <Image
        style={{ height: 228 }}
        src={"/IMG_6446.jpg"}
        alt=""
        width={500}
        height={500}
      />
      <QuestionTitle>What is the purpose of a credit score?</QuestionTitle>
      {answers.map((answer, i) => (
        <MultipleChoiceSelection
          onClick={() => setSelectedAnswer(i)}
          selected={selectedAnswer === i}
          colour={i}
        >
          {answer}
        </MultipleChoiceSelection>
      ))}
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
          router.push("/onboarding-test/test4");
        }}
      />
    </Container>
  );
}
