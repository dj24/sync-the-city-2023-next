export const Steps = ({ totalSteps, currentStep }) => {
  return (
    <div className="flex items-center">
      {Array.from(Array(totalSteps)).map((_, i) => {
        if (currentStep > i) {
          return (
            <>
              <div className="lesson-node">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {i < totalSteps - 1 && <div className="lesson-connector" />}
            </>
          );
        }
        if (currentStep === i) {
          return (
            <>
              <div className="lesson-node active">
                <div className="rounded-full w-3 h-3 bg-primary"></div>
              </div>
              {i < totalSteps - 1 && (
                <div className="lesson-connector inactive" />
              )}
            </>
          );
        }
        return (
          <>
            <div className="lesson-node inactive"></div>
            {i < totalSteps - 1 && (
              <div className="lesson-connector inactive" />
            )}
          </>
        );
      })}
    </div>
  );
};
