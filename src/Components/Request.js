import React from "react";
import Spacer from "./Spacer";

import UserIconSmall from "./UserIconSmall";

const Request = (param) => {
    return(
        <div className="d-flex align-items-center justify-content-between f-request-box pb-3">
            <div className="d-flex align-items-center">
                <UserIconSmall user={param.user}/>
                <h3 className="ms-2 f-small-regular">{param.user.first_name} {param.user.last_name} wants to join your event.</h3>
            </div>
            <div>
                <button className="f-icon-button f-orange-font me-2"><i className="far fa-check-circle"/></button>
                <button className="f-icon-button"><i className="far fa-times-circle"/></button>
            </div>
        </div>

    )
}

export default Request;