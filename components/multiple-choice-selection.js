import clsx from "clsx";

const colours = ["#51A995", "#B0C5F8", "#FDB772", "#E66C6C"];

export const MultipleChoiceSelection = ({
  colour,
  children,
  onClick,
  selected = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "border rounded-xl border-black p-4 flex items-center gap-3 text-sm",
        selected && "bg-gray-400",
      )}
    >
      <div
        className={"w-8 h-8 rounded-full"}
        style={{ background: colours[colour] }}
      />
      {children}
    </div>
  );
};
