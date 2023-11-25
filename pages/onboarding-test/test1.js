import { Steps } from "../../components/steps";
import { Container } from "../../components/container";
import { ContinueAndBack } from "../../components/continue-and-back";
import { useRouter } from "next/router";
import Image from "next/image";
import { QuestionTitle } from "../../components/question-title";
import { FillInBlanks } from "../../components/fill-in-blanks";
import { useState } from "react";

const correctAnswer = "savings";

export default function Test1() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Steps currentStep={0} totalSteps={5} />
      <Image src={"/graphic_1.png"} alt="" width={500} height={500} />
      <QuestionTitle>What does ISA stand for ?</QuestionTitle>
      <FillInBlanks
        wordsBefore={"Individual"}
        correctAnswer={"Savings"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        wordsAfter={"Account"}
      />
      <ContinueAndBack
        onBack={() => router.push("/onboarding-1")}
        onContinue={() => {
          const currentOnboardingScore =
            localStorage.getItem("onboarding-score") || 0;
          if (inputValue.toLowerCase() === correctAnswer.toLowerCase()) {
            localStorage.setItem(
              "onboarding-score",
              currentOnboardingScore + 1,
            );
          }
          router.push("/onboarding-test/test2");
        }}
      />
    </Container>
  );
}
