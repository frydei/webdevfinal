import React from "react";

const UserIconSmallest = (param) => {
    return (
        <img src={`/images/${param.user.profile_picture}`} className="f-user-icon-small me-1" alt="" />
    );
};

export default UserIconSmallest;