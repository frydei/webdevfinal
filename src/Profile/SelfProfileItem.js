import {useNavigate} from "react-router";
import more_menu from "../Data/more_menu.json";
import React, {useState} from "react";
import LargeUserIcon from "../Components/LargeUserIcon";
import Spacer from "../Components/Spacer";

const SelfProfileItem = ({user}) => {
    // console.log("this one undefined?")
    // console.log(user.username)

    return(
        <div className="f-profile d-flex flex-column align-items-center">
            <LargeUserIcon user={user}/>
            <h3 className="f-profile-name mt-2"> {user.username} </h3>
            <h4 className="f-profile-bio mt-3"> {user.first_name} {user.last_name} &nbsp;•&nbsp;{user.email} </h4>
            <div className="f-profile-location d-flex align-items-center ">
                <i className="fa-solid fa-location-dot me-2"/>
                <h4 className=" m-0">{user.city}, {user.state}</h4>
            </div>
            <div className="f-profile-bio mt-3">
                <h4>{user.biography}</h4>
            </div>

        </div>

    )
}

export default SelfProfileItem;