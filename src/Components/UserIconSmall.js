import React from "react";
import {REACT_APP_BASE} from "../App";

const UserIconSmallest = ({user}) => {
    return (
        <img src={`${REACT_APP_BASE}/${user.profile_picture}`} className="f-user-icon-small me-1" alt="" />
    );
};

export default UserIconSmallest;