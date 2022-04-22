import React from "react";
import {Link} from "react-router-dom";
import UserIconSmall from "./UserIconSmall";

const Request = ({user}) => {

    const acceptClick = () => {

    }

    const rejectClick = () => {

    }
    return(
        <div className="d-flex align-items-center justify-content-between f-request-box pb-3">
            <div className="d-flex align-items-center">
                <Link className="f-link"
                      to={`/frydei/profile/${user.first_name.toLowerCase().split("")[0] + user.last_name.toLowerCase()}`}><UserIconSmall user={user}/>
                </Link>
                <h3 className="ms-2 f-small-regular">{user.first_name} {user.last_name} wants to join your event.</h3>
            </div>
            <div className="d-flex justify-content-between" style={{"width": "8%"}}>
                <button className="f-icon-button f-orange-font"
                        id="accept" onClick={acceptClick}>
                    <i className="far fa-check-circle"/>
                </button>
                <button className="f-icon-button" id="reject" onClick={rejectClick}>
                    <i className="far fa-times-circle f-dark"/>
                </button>
            </div>
        </div>

    )
}

export default Request;