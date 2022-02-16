import { Typography, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
    return ( 
        <Grid container sx={{
            padding: '5px'
        }}>
            <Typography variant='h1' sx={{fontSize: 32, color: 'rgb(241, 143, 1)', float: 'right'}}>Game Influencer</Typography>
            <Typography variant='body1' sx={{fontSize: 16, float: 'right'}}>by Nikifor Bogdanov</Typography> 
        </Grid>
     );
}
 
export default Footer;