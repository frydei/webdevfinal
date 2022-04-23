import React from "react";

const UserIconSmallest = ({user}) => {
    return (
        <img src={`/Images/${user.profile_picture}`} className="f-user-icon-small me-1" alt="" />
    );
};

export default UserIconSmallest;