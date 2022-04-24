
import React, {useEffect, useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import ProfileEvent from "../Components/ProfileEvent";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import HomeEvent from "../Components/HomeEvent";
import {month_num} from "../Components/Complaints";
import {getUserByUsername} from "../BACKEND/Actions/UsersActions";
import MediaCard from "../Components/MediaCard";

const ProfileScreen = () => {
    const param = useParams();
    const username = param.username;
    const [user, setUser] = useState([])
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    useEffect(() =>
        getUserByUsername(dispatch, username).then(r => setUser(r)), [])


    const [tab, changeTab] = useState("UPCOMING_EVENTS");
    //let user = users.find(u => u.first_name.toLowerCase().split("")[0] + u.last_name.toLowerCase() === uname)

    const getDate = (e) => {
        return new Date(e.date)
    }
    console.log(user)
    let selected;
    if (tab === "UPCOMING_EVENTS") {
        selected = {
            upcoming: "selected",
            past: "",
            media: "",
            favorited: "",
        }
    } else if (tab === "PAST_EVENTS") {
        selected = {
            upcoming: "",
            past: "selected",
            media: "",
            favorited: "",
        }
    } else if (tab === "FAVORITED_EVENTS") {
        selected = {
            upcoming: "",
            past: "",
            media: "",
            favorited: "selected",
        }
    } else {
        selected = {
            upcoming: "",
            past: "",
            media: "selected",
            favorited: "",
        }
    }


    /*const cleanUp = () => {
        dispatch({
            type: "user-clean-up",
            past: past
        })
    }

    const past = user.upcoming_events.filter(event => getDate(event) < new Date() ? cleanUp(event) : event)

*/
    return (
        <div className='f-profile' style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            {user._id === undefined ? null : <ProfileComponent user={user}/>}
            <ProfileNav changeTab={changeTab} selected={selected}/>

            <div className="f-event-grid mt-3">
                {tab === "PAST_EVENTS" &&
                    (user._id === undefined ? null : user.past_events.map(event => <HomeEvent event={event} page="Past"/>))}

                {tab === "UPCOMING_EVENTS" &&
                    (user._id === undefined ? null : user.upcoming_events.map(event => <HomeEvent event={event} page="Upcoming"/>))}

                {tab === "FAVORITED_EVENTS" &&
                    (user._id === undefined ? null : user.favorited.map(event => <HomeEvent event={event} page="Favorited"/>))}
                {tab === "MEDIA" &&
                    (user._id === undefined ? null : user.media.map(med => <MediaCard media={med}/>))}
            </div>

        </div>
    )
};

export default ProfileScreen;