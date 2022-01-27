import Campaign from "./Campaign";
const Campaigns = ({campaigns}) => {
    return ( 
        <div className="campaigns-holder">
            <ul>        
                {campaigns.map((campaign) => (
                    <li key={campaign.id}><Campaign  campaign={campaign}/></li>
                ))}
            </ul>
        </div>
     );
}
 
export default Campaigns;