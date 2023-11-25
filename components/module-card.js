import Link from "next/link";

export const ModuleCard = ({
  background,
  children,
  progress = 0,
  title,
  href = "",
}) => {
  return (
    <Link href={href}>
      <div
        className="rounded-lg h-24 relative px-4 py-2"
        style={{ background }}
      >
        <h2 className="text-gray-600/75 text-sm mb-1">{title}</h2>
        <p className="text-[8px] leading-normal text-gray-600/75">{children}</p>
        <div
          className="bg-black/30 left-0 bottom-0 h-6 absolute rounded-lg flex items-center p-2 text-white text-xs"
          style={{ width: `${progress}%` }}
        >
          Progress
        </div>
      </div>
    </Link>
  );
};
