import {useNavigate} from "react-router";
import more_menu from "../Data/more_menu.json";
import React, {useState} from "react";
import LargeUserIcon from "../Components/LargeUserIcon";
import Spacer from "../Components/Spacer";

const SelfProfileItem = ({user}) => {
    const navigate = useNavigate();
    let more;
    if (user.admin_access) {
        const admin = {menu: "Admin Dashboard", link: "admin"};
        more = [...more_menu, admin];
    } else {
        more = more_menu;
    }
    let username = user.first_name.toLowerCase().split("")[0] + user.last_name.toLowerCase();

    function navigateToProfile() {
        navigate(`edit`, {
            state: {
                user: "CURRENT"
            }
        });
    }

    return(
        <div className="f-profile d-flex flex-column align-items-center">
            <LargeUserIcon user={user}/>
            <h3 className="f-profile-name mt-2"> {user.username} </h3>
            <h4 className="f-profile-bio mt-3"> {user.first_name} {user.last_name} &nbsp;•&nbsp;{user.email} </h4>
            <Spacer size={10}/>
            <button onClick={() => navigateToProfile()}> Edit Profile</button>
            <Spacer size={10}/>
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