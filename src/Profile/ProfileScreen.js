
import React, {useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import ProfileEvent from "../Components/ProfileEvent";
import users from "../Data/users.json";
import {useParams} from "react-router";

const ProfileScreen = () => {
    const param = useParams();
    const uname = param.username;
    const [tab, changeTab] = useState("UPCOMING_EVENTS");
    let user = users.find(u => u.first_name.toLowerCase().split("")[0] + u.last_name.toLowerCase() === uname)
    console.log(user)

    return (
        <div className='f-profile' style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            <ProfileComponent user={user}/>
            <ProfileNav changeTab={changeTab}/>

            {tab === "PAST_EVENTS" &&
             user.past_events.map(event => <ProfileEvent event={event}/>)}

            {tab === "UPCOMING_EVENTS" &&
             user.upcoming_events.map(event => <ProfileEvent event={event}/>)}

            {tab === "FAVORITED_EVENTS" &&
             user.favorited.map(event => <ProfileEvent event={event}/>)}

        </div>
    )
};

export default ProfileScreen;