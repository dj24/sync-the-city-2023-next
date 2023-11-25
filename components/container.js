import { useEffect, useState } from "react";

export const Container = ({ children }) => {
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(1);
  }, []);
  return (
    <div
      className="p-4 flex flex-col gap-4 min-h-screen duration-800 transition-all"
      style={{ opacity }}
    >
      {children}
    </div>
  );
};
