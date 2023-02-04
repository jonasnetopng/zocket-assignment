import { Button, Card, Text } from "@nextui-org/react";
import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import useCommonStore from "../../Store/store";
export const WhatObjective = () => {
  // steps function to increase step on progress
  const setSteps = useCommonStore((state) => state.setSteps);

  return (
    <>
      <Card variant="bordered" css={{ marginTop: "$20", padding: "$4" }}>
        <Card.Body>
          <Text className="font-bold text-md pb-2 border-b-2 border-gray-200 ">
            What you want to do? <span className="text-gray-400 ml-2 ">(Step 1 of 4)</span>
          </Text>

          <div className="campaign_categories p-3  pl-0 grid grid-cols-3 gap-3">
            {[
              Array.from(new Array(9).keys()).map((item) => (
                <Card isPressable isHoverable variant="bordered">
                  <Card.Body>
                    <div className="flex space-x-3 items-center">
                      <BsFillTelephoneForwardFill color="#0F6EFF" size={20} />
                      <div className="flex flex-col space-y-1">
                        <p className="text-[#0B1A33]  text-xs font-bold">Get Leads as calls</p>
                        <p className="text-gray-500 text-xs">
                          Reach broad audience and get leads through calls
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              )),
            ]}
          </div>
        </Card.Body>
      </Card>
      <div className="flex justify-end mt-3">
        <Button onPress={setSteps}>Continue</Button>
      </div>
    </>
  );
};
