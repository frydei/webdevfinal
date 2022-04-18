
import React, {useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import ProfileEvent from "../Components/ProfileEvent";

const ProfileScreen = ({user}) => {
    const [tab, changeTab] = useState("UPCOMING_EVENTS");

    return (
        <div className='profile'>
            <ProfileComponent/>
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