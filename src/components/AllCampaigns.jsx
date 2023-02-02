import { Button, Text } from "@nextui-org/react";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Container, Card, Row } from "@nextui-org/react";
const AllCampaigns = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div className="flex flex-col space-y-1">
          <Text h2 className="m-0" color="#000">
            Your Campaigns
          </Text>
          <Text className="m-0" color="#00000080">
            Check the list of campaigns you created
          </Text>
        </div>
        <div>
          <Button>
            <span className="mr-2">
              <AiOutlinePlusCircle size={20} />
            </span>{" "}
            Create new campaign
          </Button>
        </div>
      </div>

      <Card>
        <Card.Body>
          <Row>
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              NextUI gives you the best developer experience with all the features you need for
              building beautiful and modern websites and applications.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default AllCampaigns;
