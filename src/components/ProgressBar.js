import React from "react";

const ProgressBar = ({ value }) => {
  const clampedValue = Math.min(100, Math.max(0, value));
  
  return (
    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-4 sm:h-3 md:h-4 lg:h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
      <div
        className="
          h-full bg-blue-500 transition-all duration-500"
        style={{ 
          width: `${clampedValue}%`,
          transition: "width 0.3s ease-in-out"
        }}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressBar;
