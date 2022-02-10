import React from "react";
import { ICampaign, ICampaignProps } from "../types";

const Campaign = (props: ICampaignProps) => {
    const campaign: ICampaign = props.campaign
    return ( 
        <div className="container campaign">
            <h1>{campaign.name}</h1>
            <p>Game: {campaign.gameName}</p>
            <p>Start date: {campaign.startDate}</p>
            <p>Budget: {campaign.budget}</p>
            <p>Language: {campaign.language}</p>
        </div>
     );
}
 
export default Campaign;