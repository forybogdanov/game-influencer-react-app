import React from "react";
import { ICampaign, ICampaignProps } from "../types";
import { Typography, Grid } from "@mui/material";

const Campaign = (props: ICampaignProps) => {
    const campaign: ICampaign = props.campaign
    return ( 
        <Grid sx={{
            backgroundColor: 'rgb(34, 34, 34)',
            margin: '10px',
            textAlign: 'center',
            width: 'fit-content',
            padding: '20px',
            borderRadius: '5px',
        }}>
            <Typography variant='h1' sx={{fontSize: 32, color: 'rgb(241, 143, 1)'}}>{campaign.name}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Start date: {campaign.startDate}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Budget: {campaign.budget}</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>Language: {campaign.language}</Typography>
        </Grid>
     );
}
 
export default Campaign;