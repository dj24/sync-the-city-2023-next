export const ModuleCard = ({ background, children }) => {
  return (
    <div className="rounded-lg h-16" style={{ background }}>
      {children}
    </div>
  );
};
