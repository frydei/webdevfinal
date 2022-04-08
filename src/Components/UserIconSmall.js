import React from "react";

const UserIconSmall = (param) => {
    console.log(param)
    return (
        <img src={`/images/${param.user.profile_picture}`} className="f-user-icon-smallest me-1" alt="" />
    );
};

export default UserIconSmall;