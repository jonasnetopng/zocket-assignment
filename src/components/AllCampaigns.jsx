import { Button, Card, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Input } from "@nextui-org/react";
import { Select } from "antd";
import { ImCheckboxUnchecked } from "react-icons/im";
import { getCampaigns } from "../api";
import Campaign from "./Campaign";
import Loader from "./Loader";
import { Link } from "react-router-dom";
const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const campaignsResponse = await getCampaigns();

      setCampaigns(campaignsResponse);
    };

    fetchData();
  }, []);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

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
        <Link to="/add">
          <Button>
            <span className="mr-2">
              <AiOutlinePlusCircle size={20} />
            </span>
            Create new campaign
          </Button>
        </Link>
      </div>

      {/* main content */}
      <Card variant="bordered" css={{ height: "60vh", padding: "$5" }}>
        <Card.Body>
          <div className="filters flex py-3 justify-between items-center">
            <Input
              labelPlaceholder="Search for the Campaign"
              color="#00000080"
              size="md"
              width="250px"
            />
            <div className="filter-parts flex space-x-10">
              <div className="platform-filter flex space-x-3 items-center">
                <span className="text-gray-500">Platform</span>
                <Select
                  showSearch
                  size="large"
                  placeholder="All Platform"
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "All platform",
                      label: "All platform",
                    },
                    {
                      value: "Google",
                      label: "Google",
                    },
                    {
                      value: "FB",
                      label: "FB",
                    },
                    {
                      value: "Youtube",
                      label: "Youtube",
                    },
                    {
                      value: "Instagram",
                      label: "Instagram",
                    },
                  ]}
                />
              </div>
              <div className="status-filter flex space-x-3 items-center">
                <span className="text-gray-500">Status</span>
                <Select
                  showSearch
                  size="large"
                  placeholder="All Status"
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "All Status",
                      label: "All Status",
                    },
                    {
                      value: "Live now",
                      label: "Live now",
                    },
                    {
                      value: "Paused",
                      label: "Paused",
                    },
                    {
                      value: "Exhausted",
                      label: "Exhausted",
                    },
                  ]}
                />
              </div>
              <div className="days-filter ">
                <Select
                  showSearch
                  size="large"
                  placeholder="Last 30 days"
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Last 30 days",
                      label: "Last 30 days",
                    },
                    {
                      value: "Last 15 days",
                      label: "Last 15 days",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          {/* campaign-option-header */}
          <div className="campaign_labels flex rounded-md bg-[#EAEAEA] text-[#00000080] p-3 mt-3">
            <div className="  basis-[200px] flex items-center space-x-2">
              <ImCheckboxUnchecked />
              <span>On/Off</span>
            </div>
            <div className="basis-[400px]">Campaign</div>
            <div className="basis-[400px]">Date Range</div>
            <div className="basis-[200px]">Clicks</div>
            <div className="basis-[200px]">Budget</div>
            <div className="basis-[100px]">Location</div>
            <div className="basis-[200px] flex justify-center ">Platform</div>
            <div className="basis-[200px]">Status</div>
            <div className="basis-[200px]">Actions</div>
          </div>

          {/* all campaigns */}
          {!campaigns ? (
            <Loader />
          ) : (
            campaigns?.map((item) => <Campaign key={item.id} data={item} />)
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default AllCampaigns;
