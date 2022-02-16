import React from "react";
import { ICampaign, ICampaignsProps } from "../types";
import Campaign from "./Campaign";
import { Grid } from "@mui/material";

const Campaigns = (props: ICampaignsProps) => {
    return ( 
        <Grid container display='flex' sx={{
            minHeight: '70vh'
        }}>
                {props.campaigns.map((campaign: ICampaign) => (
                    <Grid item key={campaign.name}>
                        <Campaign campaign={campaign}/>
                    </Grid>
                ))}
        </Grid>
     );
}
 
export default Campaigns;