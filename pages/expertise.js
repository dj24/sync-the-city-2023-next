import { ContinueAndBack } from "../components/continue-and-back";
import { useRouter } from "next/router";
import { Container } from "../components/container";
import clsx from "clsx";

const ExpertiseCard = ({ children, isSelected, percentage }) => {
  return (
    <div
      className={clsx(
        "bg-[#F1E5FF] rounded-lg w-full py-8 text-center overflow-hidden relative text-lg",
        isSelected && "border-4 border-solid border-[#D2C2E6]",
      )}
    >
      {children}
      {isSelected && (
        <div
          className="absolute h-8 bg-[#D2C2E6] rounded-lg -bottom-1 -left-1"
          style={{ width: `${percentage}%` }}
        />
      )}
    </div>
  );
};

const levels = ["Beginner", "Intermediate", "Advanced"];

export default function Expertise({ percentage = 55 }) {
  const router = useRouter();
  const onBoardingScore = localStorage.getItem("onboarding-score") || 0;

  let level = 0;
  if (onBoardingScore > 2) {
    level = 1;
  }
  if (onBoardingScore > 4) {
    level = 2;
  }

  return (
    <Container>
      <div className="flex-1 flex flex-col gap-5 justify-center">
        <h1 className="text-xl text-center mb-8">
          We Believe your expertise Level is:
        </h1>
        <ExpertiseCard percentage={percentage} isSelected={level === 0}>
          {levels[0]}
        </ExpertiseCard>
        <ExpertiseCard percentage={percentage} isSelected={level === 1}>
          {levels[1]}
        </ExpertiseCard>
        <ExpertiseCard percentage={percentage} isSelected={level === 2}>
          {levels[2]}
        </ExpertiseCard>
        {level < 2 && (
          <p className="text-center mt-8">
            Only {100 - percentage}% more work until you reach{" "}
            {levels[level + 1]} level!
          </p>
        )}
      </div>
      <ContinueAndBack
        onBack={() => router.push("/")}
        onContinue={() => router.push("/home")}
      />
    </Container>
  );
}
