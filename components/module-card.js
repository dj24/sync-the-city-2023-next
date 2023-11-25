import Link from "next/link";

export const ModuleCard = ({
  background,
  children,
  progress = 0,
  href = "",
}) => {
  return (
    <Link href={href}>
      <div className="rounded-lg h-24 relative" style={{ background }}>
        {children}
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
