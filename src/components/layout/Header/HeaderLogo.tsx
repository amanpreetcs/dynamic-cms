import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex-shrink-0">
      <h1 className="text-2xl font-bold text-blue-600">
        <a
          href="#home"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Dynamic Platform
        </a>
      </h1>
    </div>
  );
};

export default HeaderLogo;
