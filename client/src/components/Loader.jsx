import React from "react";

const Loader = () => {
  return (
    <div
      className="progress"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="indeterminate"></div>
    </div>
  );
};

export default Loader;
