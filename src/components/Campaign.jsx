import { Badge, Checkbox, Switch } from "@nextui-org/react";
import React from "react";
import { DateTime } from "luxon";

import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";

// utility function to convert date string to readable date
const getFormattedDate = (date) => {
  return DateTime.fromISO(date).toFormat("dd LLL yyyy");
};

const Campaign = ({ data, onDelete }) => {
  return (
    <div className="campaign_labels  flex border-b-2 border-gray-200  p-3 pb-5 mt-3">
      <div className="basis-[200px]  flex items-center space-x-3">
        <Checkbox color="primary"></Checkbox>
        <Switch size="xs" checked={data?.start} />
      </div>
      <div className="basis-[400px] flex space-x-2 items-center">
        <div className="w-[50px] h-[50px] ">
          <img
            className="w-full h-full object-cover rounded-md"
            src={data?.campaignImage.url}
            alt={data?.campaignTitle}
          />
        </div>

        <div>
          <p className="text-black text-sm">{data?.campaignTitle}</p>
          <p className=" text-xs text-gray-400">Created at {getFormattedDate(data?.createdAt)}</p>
        </div>
      </div>
      <div className="basis-[400px] items-center flex text-sm">
        {`${getFormattedDate(data?.startDate)} - ${getFormattedDate(data?.endDate)}`}{" "}
      </div>
      <div className="basis-[200px] items-center flex">{data?.clicks}</div>
      <div className="basis-[200px] items-center flex">INR {data?.budget}</div>
      <div className="basis-[100px] items-center flex">{data?.location}</div>
      {/* Here I have used only two cases for platform, although we have to revamp all platforms according to api platform response */}
      <div className="basis-[200px] items-center text-center justify-center flex">
        {data?.platform.startsWith("f") ? (
          <BsFacebook color="#1977F3" size={20} />
        ) : (
          <FaYoutube color="red" size={20} />
        )}
      </div>
      <div className="basis-[200px] items-center flex">
        <Badge color="success" size="lg" variant="flat">
          {data?.campaign_status}{" "}
        </Badge>
      </div>
      <div className="basis-[200px] items-center flex space-x-5">
        <FiEdit3 color="#0F6EFF" size={18} />
        <AiOutlineDelete color="#FC3F3F" onClick={() => onDelete(data.id)} size={18} />
      </div>
    </div>
  );
};

export default Campaign;
