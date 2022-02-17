import React from "react";
import { ICampaign, ICampaignProps } from "../types";
import { Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { addPrefix, StyleClassPrefix } from "./prefixes";

const prefix = StyleClassPrefix.Campaign;

export const campaignClasses = {
    campaignName: addPrefix(prefix, "campaignName"),
    campaignStartDate: addPrefix(prefix, "campaignStartDate"),
    campaignBudget: addPrefix(prefix, "campaignBudget"),
    campaignLanguage: addPrefix(prefix, "campaignLanguage")
};

export const StyledCampaign = styled(Grid)(({ theme }) => ({
    backgroundColor: 'rgb(34, 34, 34)',
    margin: '10px',
    textAlign: 'center',
    width: 'fit-content',
    padding: '20px',
    borderRadius: '5px',
    [`& .${campaignClasses.campaignName}`]: {
        fontSize: 32, 
        color: 'rgb(241, 143, 1)'
    },
    [`& .${campaignClasses.campaignStartDate}`]: {
        fontSize: 16
    },
    [`& .${campaignClasses.campaignBudget}`]: {
        fontSize: 16
    },
    [`& .${campaignClasses.campaignLanguage}`]: {
        fontSize: 16
    },
}));
const classes = campaignClasses;
const Campaign = (props: ICampaignProps) => {
    const campaign: ICampaign = props.campaign
    return ( 
        <StyledCampaign>
            <Typography className={classes.campaignName} variant='h1'>{campaign.name}</Typography>
            <Typography className={classes.campaignStartDate} variant='body1'>Start date: {campaign.startDate}</Typography>
            <Typography className={classes.campaignBudget} variant='body1'>Budget: {campaign.budget}</Typography>
            <Typography className={classes.campaignLanguage} variant='body1'>Language: {campaign.language}</Typography>
        </StyledCampaign>
     );
}
 
export default Campaign;