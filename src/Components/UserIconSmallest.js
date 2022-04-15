import React from "react";

const UserIconSmallest = (param) => {
    console.log(param)
    return (
        <img src={`/images/${param.user.profile_picture}`} className="f-user-icon-smallest me-1" alt="" />
    );
};

export default UserIconSmallest;