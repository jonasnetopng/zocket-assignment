import { Button, Card, Text } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Input } from "@nextui-org/react";
import { Select } from "antd";
import { ImCheckboxUnchecked } from "react-icons/im";
import Campaign from "./Campaign";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import useCommonStore from "../Store/store";
import { DateTime } from "luxon";


const AllCampaigns = () => {
  // campaigns data coming from store
  const campaigns = useCommonStore((state) => state.allCampaigns);
  const searchInputRef = useRef();
  // getCampaigns is the request to call data from api, this is too from store
  const getCampaigns = useCommonStore((state) => state.getCampaigns);
  useEffect(() => {
    // loading on first load
    console.log("check loading");
    getCampaigns();
  }, [getCampaigns]);

  // operative campaigns denotes any campaigns that have fetched after any filter i.e search,  status etc
  const [operativeCampaigns, setOperativeCampaigns] = useState(null);

  const onPlatformChange = (value) => {
    if (value === "all") {
      setOperativeCampaigns(campaigns);
      return;
    }
    setOperativeCampaigns(campaigns.filter((campaign) => campaign.platform.startsWith(value[0])));
  };

  const onStatusChange = (value) => {
    if (value === "all") {
      setOperativeCampaigns(campaigns);
      return;
    }
    setOperativeCampaigns(
      campaigns.filter((campaign) => campaign.campaign_status.toLowerCase().startsWith(value[0])),
    );
  };
  const onDateChange = (days) => {
    const subtractedDate = DateTime.now().minus({ days: +days }).toISODate();
    setOperativeCampaigns(campaigns.filter((campaign) => campaign.startDate > subtractedDate));
  };

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.toLowerCase();

    const getSearched = (campaign) => {
      return campaign.campaignTitle.toLowerCase().includes(searchTerm);
    };
    setOperativeCampaigns(campaigns.filter(getSearched));
  };

  const handleDelete = (campaignId) => {
    setOperativeCampaigns(campaigns.filter((campaign) => campaign.id !== campaignId));
  };






  let finalCampaigns = null;
  // checking to show whether the searched or the fetched ones from api
  finalCampaigns = operativeCampaigns ? operativeCampaigns : campaigns;

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
              ref={searchInputRef}
              onChange={handleSearch}
            />
            <div className="filter-parts flex space-x-10">
              <div className="platform-filter flex space-x-3 items-center">
                <span className="text-gray-500">Platform</span>
                <Select
                  showSearch
                  size="large"
                  className="min-w-[150px]"
                  dropdownMatchSelectWidth={true}
                  placeholder="All Platform"
                  optionFilterProp="children"
                  onChange={onPlatformChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "all",
                      label: "All platform",
                    },
                    {
                      value: "google",
                      label: "Google",
                    },
                    {
                      value: "fB",
                      label: "FB",
                    },
                    {
                      value: "yt",
                      label: "Youtube",
                    },
                    {
                      value: "ig",
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
                  onChange={onStatusChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "all",
                      label: "All Status",
                    },
                    {
                      value: "ln",
                      label: "Live now",
                    },
                    {
                      value: "pa",
                      label: "Paused",
                    },
                    {
                      value: "ex",
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
                  onChange={onDateChange}
                  filterOption={(input, option) =>
                    (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "30",
                      label: "Last 30 days",
                    },
                    {
                      value: "15",
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
          {!finalCampaigns ? (
            <Loader />
          ) : (
            finalCampaigns?.map((item) => (
              <Campaign key={item.id} data={item} onDelete={handleDelete} />
            ))
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default AllCampaigns;
