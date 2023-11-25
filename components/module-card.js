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
        <h2 className="text-gray-600/75">{title}</h2>
        <p className="text-xs text-gray-600/75">{children}</p>
        <div
          className="bg-black/30 left-0 bottom-0 h-8 absolute rounded-lg flex items-center p-2 text-white text-sm"
          style={{ width: `${progress}%` }}
        >
          Progress
        </div>
      </div>
    </Link>
  );
};
