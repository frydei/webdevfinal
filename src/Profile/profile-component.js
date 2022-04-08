import users from "../Data/user.json"
import "./profile.css"
import React from "react";

const ProfileItem = ({ first_name, city, profile_pic, state, biography }) => {
    return(
        <div className="f-profile">
            <img  className="f-profile-pic"
                  src={profile_pic}
            />
            <p><br/></p>
            <span className="f-profile-name"> {first_name}</span>
            <div>
                <i className="fa-solid fa-location-dot"> {city}, {state}</i>
            </div>

            <div>{biography}</div>

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