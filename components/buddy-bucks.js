import { BuddyCoinIcon } from "./buddy-coin-icon";

export const BuddyBucks = () => {
  return (
    <div className="border-2 border-buddy border-solid p-2 px-4 flex rounded-lg self-end gap-4 items-center">
      <BuddyCoinIcon />
      <div>
        <span className="text-lg mr-1">5055</span>
        <span className="text-sm">Buddy Bucks</span>
      </div>
    </div>
  );
};
