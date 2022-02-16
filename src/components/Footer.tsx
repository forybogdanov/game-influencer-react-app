import { Typography, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
    return ( 
        <Grid sx={{
            float: 'right',
            padding: '5px'
        }}>
            <Typography variant='h1' sx={{fontSize: 32, color: 'rgb(241, 143, 1)'}}>Game Influencer</Typography>
            <Typography variant='body1' sx={{fontSize: 16}}>by Nikifor Bogdanov</Typography> 
        </Grid>
     );
}
 
export default Footer;