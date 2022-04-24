import React from "react";

const UserIconName = ({user}) => {
    return(
        <div className="d-flex align-items-center">
            <h3 className="f-header-username pe-3 mb-0">Hi, {user.first_name}</h3>
            <img src={`/Images/${user.profile_picture}`} className="f-user-icon" alt=""/>
        </div>
    )
}

export default UserIconName;