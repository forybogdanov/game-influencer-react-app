import { Typography, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
    return ( 
        <Grid className="footer">
            <Typography variant='h1' sx={{fontSize: 32}}>Game Influencer</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>by Nikifor Bogdanov</Typography> 
        </Grid>
     );
}
 
export default Footer;