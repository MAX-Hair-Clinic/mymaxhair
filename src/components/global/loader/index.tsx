import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="w-full  min-h-screen bg-black flex items-center justify-center">
      <div className="w-16 h-16 border-t-4 border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
