import { Typography, Button, Grid } from "@mui/material";
import React from "react";
import { IHeaderProps } from "../types";

const Header = (props: IHeaderProps) => {
    return ( 
        <Grid container className="header">
            <Typography variant='h1' sx={{fontSize: 32}}>Game Influencer</Typography>
            <Button variant='contained' className="btn" onClick={props.onClick}>{props.showForm ? 'Close' : 'Add Campaign' }</Button>
        </Grid>
     );
}
 
export default Header;