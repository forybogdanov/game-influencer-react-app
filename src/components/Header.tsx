import React from "react";
import { IHeaderProps } from "../types";
const Header = (props: IHeaderProps) => {
    return ( 
        <div className="header">
        <h1>Game Influencer</h1>
        <button className="btn" onClick={props.onClick}>{props.showForm ? 'Close' : 'Add Campaign' }</button>
        </div>
     );
}
 
export default Header;