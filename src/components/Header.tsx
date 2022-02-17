import { Typography, Button, Grid } from "@mui/material";
import React from "react";
import { IHeaderProps } from "../types";
import styled from "@emotion/styled";
import { addPrefix, StyleClassPrefix } from "./prefixes";

const prefix = StyleClassPrefix.Header;

export const headerClasses = {
  appName: addPrefix(prefix, "appName"),
  openFormButton: addPrefix(prefix, "openFormButton"),
};

export const StyledHeader = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "15px",
  backgroundColor: "rgb(34, 34, 34)",
  color: "rgb(241, 143, 1)",
  [`& .${headerClasses.appName}`]: {
    fontSize: 32,
  },
  [`& .${headerClasses.openFormButton}`]: {
    margin: "10px",
    backgroundColor: "rgb(241, 143, 1)",
  },
}));

const classes = headerClasses;

const Header = (props: IHeaderProps) => {
  return (
    <StyledHeader container>
      <Typography className={classes.appName} variant="h1">
        Game Influencer
      </Typography>
      <Button
        className={classes.openFormButton}
        variant="contained"
        onClick={props.onClick}
      >
        {props.showForm ? "Close" : "Add Campaign"}
      </Button>
    </StyledHeader>
  );
};

export default Header;
