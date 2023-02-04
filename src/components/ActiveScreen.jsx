import React from "react";

const ActiveScreen = ({ Component }) => {
  return <div className="bg-[#E5E5E5] p-10 py-2 basis-full overflow-auto">{<Component />}</div>;
};

export default ActiveScreen;
