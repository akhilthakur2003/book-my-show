import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center space-y-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-gray-600 font-medium text-lg">
        Loading movie details...
      </p>
    </div>
  );
};

export default Loading;
