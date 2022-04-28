import React from "react";
import {REACT_APP_BASE} from "../App";

const UserIconSmallest = (param) => {
    return (
        <img src={`${REACT_APP_BASE}/${param.user.profile_picture}`} className="f-user-icon-smallest me-1" alt="" />
    );
};

export default UserIconSmallest;