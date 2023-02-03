
import { Card, Text } from "@nextui-org/react";
import React from "react";
import { DatePicker } from "antd";
import { Slider } from "antd";
import { GiMoneyStack } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
export const CampaignSettings = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Card variant="bordered" css={{ marginTop: "$20", padding: "$4", maxWidth: "50%" }}>
      <Card.Body>
        <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
          Campaign Settings<span className="text-gray-400 ml-2 ">(Step 3 of 4)</span>
        </Text>

        <div className="budget_section py-5 flex flex-col space-y-4">
          <div className="flex space-x-2 items-center">
            <div className="first w-[30px] h-[30px] bg-[#0F6EFF] rounded-full text-white flex justify-center items-center">
              1
            </div>
            <Text h5 className="underline text-sm flex m-0 items-center justify-center">
              Budget and dates info
            </Text>
          </div>

          <div className="budget_timeline pl-8 ml-4 border-l-2 flex flex-col space-y-2 border-blue-200">
            <Text h4 className="text-gray-100 text-sm mb ">
              Budget Timeline
            </Text>
            <div className="budget_switch rounded-3xl text-sm w-1/2 bg-gray-200 flex ">
              <div className="bg-[#0F6EFF] basis-1/2 text-center p-2 text-white  rounded-3xl">
                Lifetime
              </div>
              <div className="basis-1/2 text-center p-2">Daily</div>
            </div>

            <div className="dates flex space-x-2 pt-3">
              <div className="basis-1/2">
                <p className="text-sm mb-2">Start Date</p>
                <DatePicker className="w-full" onChange={onChange} size="large" />
              </div>
              <div className="basis-1/2">
                <p className="text-sm mb-2">End Date</p>
                <DatePicker className="w-full" onChange={onChange} size="large" />
              </div>
            </div>
            <div className="campaign_budget pt-3">
              <div className="flex justify-between">
                <Text h4 className="text-sm text-gray-300">
                  Enter Campaign Budget
                </Text>
                <div className="flex items-center">
                  <GiMoneyStack color="blue" size={15} />
                  {/* the currencies to be fetched from api response */}
                  <span className="text-xs">INR</span>
                  <AiFillCaretDown />
                </div>
              </div>
              <Slider defaultValue={30} tooltip={{ open: true }} min={100} max={100000} />
              <div className="flex justify-between">
                <p className="text-xs">100</p>
                <p className="text-xs">1,00,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="campaign_categories p-3  pl-0 grid grid-cols-3 gap-3"></div>
      </Card.Body>
    </Card>
  );
};
