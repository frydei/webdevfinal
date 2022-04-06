import React from "react";

const UserIcon = (param) => {
    console.log(param)
    return (
        <img src={`/images/${param.user.profile_picture}`} className="f-user-icon-small" alt=""/>
    );
};

export default UserIcon;