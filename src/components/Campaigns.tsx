import React from "react";
import { ICampaign, ICampaignsProps } from "../types";
import Campaign from "./Campaign";

const Campaigns = (props: ICampaignsProps) => {
    return ( 
        <div className="campaigns-holder">
            <ul>        
                {props.campaigns.map((campaign: ICampaign) => (
                    <li key={campaign.id}><Campaign  campaign={campaign}/></li>
                ))}
            </ul>
        </div>
     );
}
 
export default Campaigns;