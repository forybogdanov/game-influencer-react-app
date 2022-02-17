import React from "react";
import { ICampaign, ICampaignsProps } from "../types";
import Campaign from "./Campaign";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

export const StyledCampaigns = styled(Grid)(({ theme }) => ({
  minHeight: "70vh",
}));

const Campaigns = (props: ICampaignsProps) => {
  return (
    <StyledCampaigns container display="flex">
      {props.campaigns.map((campaign: ICampaign) => (
        <Grid item key={campaign.name}>
          <Campaign campaign={campaign} />
        </Grid>
      ))}
    </StyledCampaigns>
  );
};

export default Campaigns;
