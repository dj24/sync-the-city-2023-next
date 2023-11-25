import Image from "next/image";
import { useEffect, useState } from "react";

export const BuddyIllustration = () => {
  const [y, setY] = useState(150);
  useEffect(() => {
    setY(0);
  }, []);
  return (
    <div
      style={{ transform: `rotate(16.72deg) translateY(${y}px)` }}
      className="w-48 h-48 overflow-hidden origin-top fixed -bottom-16 -left-4 transition-all duration-700 ease-out delay-1000"
    >
      <Image
        style={{ transform: `translateY(-40px) scale(1.25)` }}
        width={400}
        height={400}
        src="/buddy.png"
        alt={"buddy"}
      />
    </div>
  );
};
