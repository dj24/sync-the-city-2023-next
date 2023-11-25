import { useEffect, useState } from "react";

export const ProgressBar = ({ progress }) => {
  const [actual, setActual] = useState(0);
  useEffect(() => {
    setActual(progress);
  }, []);
  return (
    <div className="bg-primary/50 w-full rounded-lg overflow-hidden">
      <div
        className="bg-primary h-6 transition-all delay-200 duration-1000 ease-in-out"
        style={{ width: `${actual}%` }}
      ></div>
    </div>
  );
};
