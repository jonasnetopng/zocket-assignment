import React from "react";

const ActiveScreen = ({ Component }) => {
  return <div className="bg-[#E5E5E5] p-10 py-3 basis-full">{<Component />}</div>;
};

export default ActiveScreen;
