import React from "react";

const LargeUserIcon = ({user}) => {
    return (
        <img src={`/Images/${user.profile_picture}`} className="f-user-icon" alt=""/>
    );
};

export default LargeUserIcon;