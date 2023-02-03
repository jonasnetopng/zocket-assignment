import React from "react";

const ProgressComponent = ({ text, Icon, accomplished }) => {
  return (
    <div
      className={`flex flex-col  items-center min-w-[200px] justify-center mt-5 ${
        !accomplished ? "opacity-50" : ""
      }`}
    >
      <div
        className={`w-[60px] h-[60px] border-4 border-white rounded-full   flex justify-center items-center ${
          accomplished ? "bg-[#F29A2E]" : "bg-gray-300"
        }`}
      >
        <Icon color={accomplished ? "white" : "gray"} size={20} />
      </div>
      <p className="text-[#0B1A33] text-center font-semibold">{text}</p>
    </div>
  );
};

export default ProgressComponent;
