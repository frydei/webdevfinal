import React from "react";
import LargeUserIcon from "../../Components/LargeUserIcon";

const ProfileItem = ({user}) => {
    return(
        <div className="f-profile d-flex flex-column align-items-center">
            <LargeUserIcon user={user}/>
            <h3 className="f-profile-name mt-2"> {user.username}</h3>
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

const ProfileComponent = ({user}) => {
    return (
        <div className="f-profile-view">
            <ProfileItem user={user}/>
        </div>
    );
}

export default ProfileComponent;