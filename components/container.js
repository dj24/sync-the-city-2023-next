import { useEffect, useState } from "react";
import clsx from "clsx";

export const Container = ({ children, className }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);
  return (
    <div
      className={clsx(
        "p-4 flex flex-col gap-4 min-h-screen duration-800 transition-all",
        className,
      )}
      style={{ opacity }}
    >
      {children}
    </div>
  );
};
