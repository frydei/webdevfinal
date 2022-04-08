import users from "../Data/user.json"
import "./profile.css"
import React from "react";

const ProfileItem = ({ first_name, city, profile_pic, state, biography }) => {
    return(
        <div className="f-profile">
            <img  className="f-profile-pic"
                  src={profile_pic}
            />
            <div>
                <span className="f-profile-name"> {first_name}</span>
            </div>
            <div>
                <i className="fa-solid fa-location-dot"> {city}, {state}</i>
            </div>
            <p><br/></p>
            <div className="f-profile-bio">{biography}</div>



        </div>

    )
}

const ProfileComponent = () => {
    return (
        <div className="f-profile-view">
            {users.map(user => {
                return (ProfileItem(user));
            })}
        </div>
    );
}

export default ProfileComponent;