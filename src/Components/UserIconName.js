import React from "react";

const UserIconName = (param) => {
    return(
        <div className="d-flex align-items-center">
            <h3 className="f-header-username pe-3 mb-0">Hi, {param.user.first_name}</h3>
            <img src="/images/sample.jpeg" className="f-user-icon" alt=""/>
        </div>
    )
}

export default UserIconName;