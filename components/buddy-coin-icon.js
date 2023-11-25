import Image from "next/image";

export const BuddyCoinIcon = () => {
  return (
    <Image
      className="w-8 h-8 scale-[1.75]"
      width={96}
      height={96}
      src={"/card-icon.png"}
      alt="coin"
    />
  );
};
