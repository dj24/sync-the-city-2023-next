import Link from "next/link";
import Image from "next/image";
import { ContinueAndBack } from "../components/continue-and-back";
import { Container } from "../components/container";
import { Steps } from "../components/steps";
import { Spacer } from "../components/spacer";
import { useRouter } from "next/router";
export default function Lesson() {
  const router = useRouter();
  return (
    <>
      <Container>
        <Steps currentStep={0} totalSteps={5} />
        <Image width={500} height={500} src="/image_1.jpg" alt="" />
        Essentials (50%):
        <ul className="list-disc list-inside text-sm">
          <li>
            Allocate about 50% of your income to cover essential expenses like
            groceries, bills, rent or mortgage, debt payments, and insurance.
          </li>
          <li>
            Transfer this money to a separate account immediately to ensure your
            basic needs are covered.
          </li>
        </ul>
        Savings and Debt (20%):
        <ul className="list-disc list-inside text-sm">
          <li>Dedicate 20% of your income to savings and paying down debt.</li>
          <li>
            Initially, focus on building an emergency fund before addressing
            credit card balances.
          </li>
          <li></li>
        </ul>
        Remaining 30%:{" "}
        <ul className="list-disc list-inside text-sm">
          <li>
            Use the remaining 30% of your income as discretionary spending. Do
            not track expenses in this category, but prioritize saving and
            spending based on your financial goals.
          </li>
        </ul>
        <Spacer />
        <ContinueAndBack
          onContinue={() => router.push("/modules/test1/module1")}
          onBack={() => router.push("/home")}
        />
      </Container>
    </>
  );
}
