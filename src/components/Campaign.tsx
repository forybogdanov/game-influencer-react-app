import React from "react";
import { ICampaign, ICampaignProps } from "../types";
import { Typography, Grid } from "@mui/material";

const Campaign = (props: ICampaignProps) => {
    const campaign: ICampaign = props.campaign
    return ( 
        <Grid className="container campaign">
            <Typography variant='h1' sx={{fontSize: 32}}>{campaign.name}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Start date: {campaign.startDate}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Budget: {campaign.budget}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Language: {campaign.language}</Typography>
        </Grid>
     );
}
 
export default Campaign;