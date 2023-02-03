import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsCartFill, BsFillCalendarEventFill, BsCheckCircleFill } from "react-icons/bs";

import ProgressComponent from "./ProgressComponent";
import { Text } from "@nextui-org/react";
export const AddCampaign = () => {
  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center mb-3 ">
        <div className="flex flex-col space-y-1">
          <Text h2 className="m-0" color="#000">
            Your Campaigns
          </Text>
          <Text className="m-0" color="#00000080">
            Check the list of campaigns you created
          </Text>
        </div>
      </div>

      <div className="max-w-6xl mt-10 mx-auto  ">
        <ProgressBar
          percent={20}
          filledBackground="#FFB963"
          height="5px"
          unfilledBackground="#F5F5F5"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <ProgressComponent
                text="What you want to do"
                Icon={BsFillLightbulbFill}
                accomplished={accomplished}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <ProgressComponent
                text="Choose Product"
                Icon={BsCartFill}
                accomplished={accomplished}
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <ProgressComponent
                text="Campaign settings"
                Icon={BsFillCalendarEventFill}
                accomplished={accomplished}
              />
            )}
          </Step>

          <Step>
            {({ accomplished }) => (
              <ProgressComponent
                text="Ready to go"
                Icon={BsCheckCircleFill}
                accomplished={accomplished}
              />
            )}
          </Step>
        </ProgressBar>
      </div>
    </>
  );
};

export default AddCampaign;
