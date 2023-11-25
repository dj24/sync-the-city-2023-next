import { Container } from "../components/container";
import { ContinueAndBack } from "../components/continue-and-back";
import Image from "next/image";
import { Steps } from "../components/steps";
import { QuestionTitle } from "../components/question-title";
import { FillInBlanks } from "../components/fill-in-blanks";

export default function MultipleChoice() {
  return (
    <Container>
      <Steps currentStep={0} totalSteps={5} />
      <Image src={"/graphic_1.png"} alt="" width={500} height={500} />
      <QuestionTitle>What does ISA stand for ?</QuestionTitle>
      <FillInBlanks wordsBefore={"Individual"} wordsAfter={"Account"} />
      <ContinueAndBack />
    </Container>
  );
}
