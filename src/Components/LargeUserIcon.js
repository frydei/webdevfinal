import React from "react";

const LargeUserIcon = ({user}) => {
    return (
        <img src={`/images/${user.profile_picture}`} className="f-user-icon-large" alt=""/>
    );
};

export default LargeUserIcon;