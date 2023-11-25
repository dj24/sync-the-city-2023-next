import { useState } from "react";

export const FillInBlanks = ({ wordsBefore, wordsAfter, correctAnswer }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col gap-6 items-center flex-1 justify-center">
      {wordsBefore}
      <input onChange={(e) => setInputValue(e.target.value)} />
      {wordsAfter}
    </div>
  );
};
