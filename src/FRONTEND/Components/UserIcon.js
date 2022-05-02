import React from "react";
import {REACT_APP_BASE} from "../../App";

const LargeUserIcon = ({user}) => {
    return (
        <img src={`${REACT_APP_BASE}/${user.profile_picture}`} className="f-user-icon" alt=""/>
    );
};

export default LargeUserIcon;