import React from "react";

const UserIconSmallest = ({user}) => {
    return (
        <img src={`/images/${user.profile_picture}`} className="f-user-icon-small me-1" alt="" />
    );
};

export default UserIconSmallest;