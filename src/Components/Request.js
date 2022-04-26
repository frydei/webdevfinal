import React from "react";
import {Link} from "react-router-dom";
import UserIconSmall from "./UserIconSmall";
import {useNavigate} from "react-router";

const Request = ({user}) => {
    const navigate = useNavigate()
    const acceptClick = () => {

    }

    const rejectClick = () => {

    }

    const navigateToProfile = () => {
        navigate(`/frydei/profile/${user.username}`, {
            state: {
                user: "USER"
            }
        });

    }
    return(
        <div className="d-flex align-items-center justify-content-between f-request-box pb-3">
            <div className="d-flex align-items-center">
                <button className="f-link-button" onClick={() => navigateToProfile}>
                    <UserIconSmall user={user}/>
                </button>
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