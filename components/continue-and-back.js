import { BackIcon } from "./back-icon";

export const ContinueAndBack = ({ onBack, onContinue }) => {
  return (
    <div className="flex gap-4">
      <button onClick={onBack}>
        <BackIcon />
      </button>
      <button onClick={onContinue} className="flex-1">
        Continue
      </button>
    </div>
  );
};
