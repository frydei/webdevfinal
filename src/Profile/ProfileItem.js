import users from "../Data/user.json"
import "./profile.css"
import React from "react";

const ProfileItem = ({user}) => {
    return(
        <div className="f-profile">
            <img  className="f-profile-pic"
                  src={`/images/${user.profile_picture}`}
                  alt={""}/>
            <div>
                <span className="f-profile-name"> {user.first_name}</span>
            </div>
            <div>
                <i className="fa-solid fa-location-dot"> {user.city}, {user.state}</i>
            </div>
            <p><br/></p>
            <div className="f-profile-bio">{user.biography}</div>
        </div>

    )
}

const ProfileComponent = () => {
    return (
        <div className="f-profile-view">
            <ProfileItem user={users}/>
        </div>
    );
}

export default ProfileComponent;