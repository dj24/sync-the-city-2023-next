import { Steps } from "../../../components/steps";
import { Container } from "../../../components/container";
import { ContinueAndBack } from "../../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../../components/question-title";
import { useState } from "react";
import { MultipleChoiceSelection } from "../../../components/multiple-choice-selection";
import { Spacer } from "../../../components/spacer";

const correctAnswerIndex = 0;

const answers = ["20%", "50%", "30%", "15%"];

export default function Module1() {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState(-1);

  return (
    <Container>
      <Steps currentStep={0} totalSteps={2} />
      <Image
        style={{ height: 228 }}
        src={"/graphic_1.png"}
        alt=""
        width={500}
        height={500}
      />
      <QuestionTitle>
        What percentage of income should be allocated to savings and paying off
        debt?
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
      <Spacer />
      <ContinueAndBack
        onContinue={() => {
          const currentModuleScore = localStorage.getItem("module-score") || 0;
          if (selectedAnswer === correctAnswerIndex) {
            localStorage.setItem(
              "module-score",
              parseInt(currentModuleScore) + 1,
            );
          }
          router.push("/modules/test1/module2");
        }}
      />
    </Container>
  );
}
