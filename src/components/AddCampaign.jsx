import React, { useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsCartFill, BsFillCalendarEventFill, BsCheckCircleFill } from "react-icons/bs";

import ProgressComponent from "./ProgressComponent";
import { Text } from "@nextui-org/react";
import { WhatObjective } from "./NewCampaignSteps.jsx/WhatObjective";
import { ChooseProduct } from "./NewCampaignSteps.jsx/ChooseProduct";
import { CampaignSettings } from "./NewCampaignSteps.jsx/CampaignSettings";
import Ready from "./NewCampaignSteps.jsx/Ready";
import useCommonStore from "../Store/store";

export const AddCampaign = () => {
  const steps = useCommonStore((state) => state.steps);

  console.log(steps);

  let activeStep = null;
  let completion = 25;

  if (steps === 1) {
    activeStep = <WhatObjective />;
  }

  if (steps === 2) {
    completion = 50;
    activeStep = <ChooseProduct />;
  }
  if (steps === 3) {
    completion = 75;
    activeStep = <CampaignSettings />;
  }

  if (steps === 4) {
    completion = 100;
    activeStep = <Ready />;
  }

  return (
    <>
      {/* HEADER  */}
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
      {/* PROGRESS BAR */}
      <div className="max-w-6xl mt-14 mx-auto  ">
        <ProgressBar
          percent={completion}
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
      {activeStep}
    </>
  );
};

export default AddCampaign;
