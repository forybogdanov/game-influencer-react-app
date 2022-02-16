import { Typography, Button, Grid } from "@mui/material";
import React from "react";
import { IHeaderProps } from "../types";

const Header = (props: IHeaderProps) => {
    return ( 
        <Grid container
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '15px',
            backgroundColor: 'rgb(34, 34, 34)',
            color: 'rgb(241, 143, 1)'
        }}>
            <Typography variant='h1' sx={{fontSize: 32}}>Game Influencer</Typography>
            <Button variant='contained' sx={{
                margin: '10px',
                color: 'rgb(34, 34, 34)',
                backgroundColor: 'rgb(241, 143, 1)'
            }} onClick={props.onClick}>{props.showForm ? 'Close' : 'Add Campaign' }</Button>
        </Grid>
     );
}
 
export default Header;