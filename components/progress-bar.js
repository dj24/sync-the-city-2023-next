export const ProgressBar = ({ progress }) => {
  return (
    <div className="bg-primary/50 w-full rounded-lg overflow-hidden">
      <div className="bg-primary h-4" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
