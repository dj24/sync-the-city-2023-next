import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";
import { useState } from "react";
import { MultipleChoiceSelection } from "../../components/multiple-choice-selection";

const correctAnswerIndex = 1;

const answers = ["30%", "20%", "50%", "15%"];

export default function Test4() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  return (
    <Container>
      <Steps currentStep={3} totalSteps={4} />
      <Image
        style={{ height: 228 }}
        src={"/IMG_6448.jpg"}
        alt=""
        width={500}
        height={500}
      />
      <QuestionTitle>
        What percentage of your income should you allocate to savings and debt?
      </QuestionTitle>
      {answers.map((answer, i) => (
        <MultipleChoiceSelection
          onClick={() => setSelectedAnswer(i)}
          selected={selectedAnswer === i}
          colour={i}
        >
          {answer}
        </MultipleChoiceSelection>
      ))}
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
          router.push("/expertise");
        }}
      />
    </Container>
  );
}
