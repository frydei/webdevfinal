import React from "react";

const UserIconSmallest = (param) => {
    return (
        <img src={`/Images/${param.user.profile_picture}`} className="f-user-icon-smallest me-1" alt="" />
    );
};

export default UserIconSmallest;