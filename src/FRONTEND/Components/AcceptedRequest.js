import React, {useState} from "react";
import {Link} from "react-router-dom";
import UserIconSmall from "./UserIconSmall";
import {useNavigate, useOutletContext} from "react-router";

const AcceptedRequest = ({user, event}) => {
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate(`/frydei/profile/${user.username}`, {
            state: {
                user: "USER"
            }
        });

    };
    return (
        <div className="d-flex align-items-center justify-content-between f-request-box pb-3">
            <div className="d-flex align-items-center">
                <button className="f-link-button" onClick={() => navigateToProfile}>
                    <UserIconSmall user={user}/>
                </button>
                <h3 className="ms-2 f-small-regular">You added {user.name} to your event!</h3>
            </div>
        </div>

    );
};

export default AcceptedRequest;