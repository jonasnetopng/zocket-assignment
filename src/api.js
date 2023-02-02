import { request, gql } from "graphql-request";

const graphQLAPI = "https://api-ap-south-1.hygraph.com/v2/cldmv2zl11kdl01tchepw8wxf/master";
export const getCampaigns = async () => {
  const query = gql`
    query Campaigns {
      campaigns {
        budget
        campaignTitle
        campaign_status
        clicks
        endDate
        id
        location
        campaignImage {
          url
        }
        platform
        start
        startDate
      }
    }
  `;

  const results = await request(graphQLAPI, query);
  return results.campaigns;
};
