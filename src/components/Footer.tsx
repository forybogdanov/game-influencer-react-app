import { Typography, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { addPrefix, StyleClassPrefix } from "./prefixes";

const prefix = StyleClassPrefix.Footer;

export const footerClasses = {
    appName: addPrefix(prefix, "appName"),
    author: addPrefix(prefix, "author")
};

export const StyledFooter = styled(Grid)(({theme}) => ({
    [`& .${footerClasses.appName}`]: {
        fontSize: 32, 
        color: 'rgb(241, 143, 1)', 
        float: 'right',
        marginRight: '10px'
    },
    [`& .${footerClasses.author}`]: {
        fontSize: 16, 
        float: 'right',
        marginRight: '10px'
    }
}));

const classes = footerClasses

const Footer = () => {
    return ( 
        <StyledFooter container direction='column'>
            <Grid item>
                <Typography className={classes.appName} variant='h1'>Game Influencer</Typography>
            </Grid>
            <Grid item>
                <Typography className={classes.author} variant='body1'>by Nikifor Bogdanov</Typography> 
            </Grid>
        </StyledFooter>
     );
}
 
export default Footer;