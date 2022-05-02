import React, {useEffect, useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import {useOutletContext, useParams} from "react-router";
import HomeEvent from "../../Components/HomeEvent";
import MediaCard from "../../Components/MediaCard";
import {getUserByUsername} from "../../../BACKEND/Services/UsersServices";
import {useLocation} from "react-router-dom";
import FavoriteEvent from "../../Components/FavoriteEvent";

const ProfileScreen = () => {
    const {username} = useParams();
    const location = useLocation();
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    const [user, setUser] = useState(current_user);

    useEffect(async () => {
        if (location.state.user !== "CURRENT") {
            const url_user = await getUserByUsername(username);
            setUser(url_user);
        }
    }, []);
    const [tab, changeTab] = useState("UPCOMING_EVENTS");

    console.log(user)
    let selected;
    if (tab === "UPCOMING_EVENTS") {
        selected = {
            upcoming: "selected",
            past: "",
            media: "",
            favorited: "",
        };
    } else if (tab === "MY_EVENTS") {
        selected = {
            upcoming: "",
            past: "selected",
            media: "",
            favorited: "",
        };
    } else if (tab === "FAVORITED_EVENTS") {
        selected = {
            upcoming: "",
            past: "",
            media: "",
            favorited: "selected",
        };
    } else {
        selected = {
            upcoming: "",
            past: "",
            media: "selected",
            favorited: "",
        };
    }
    console.log(user)

    const update = (new_user) => {
        setCurrentUser(new_user)
    }
    return (
        <div className="f-profile" style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            {user._id === undefined ? null : <ProfileComponent user={user}/>}
            <ProfileNav changeTab={changeTab} selected={selected}/>

            <div className="f-event-grid mt-3">
                {tab === "MY_EVENTS" &&
                    (user._id === undefined ? null : user.user_events.map && user.user_events.map(event => <HomeEvent event={event}
                                                                                              page="Past"/>))}

                {tab === "UPCOMING_EVENTS" &&
                    (user._id === undefined ? null : user.upcoming_events.map && user.upcoming_events.map(event => <HomeEvent event={event}
                                                                                                  page="Upcoming"/>))}

                {tab === "FAVORITED_EVENTS" &&
                    (user._id === undefined ? null : user.favorited.map && user.favorited.map(event => <FavoriteEvent event={event}
                                                                                                logged_in={logged_in}
                                                                                                current_user={user}
                                                                                                setCurrentUser={setCurrentUser}
                                                                                                update={update}
                                                                                            page="Favorited"/>))}
                {tab === "MEDIA" &&
                    (user._id === undefined ? null : user.media.map && user.media.map(med => <MediaCard media={med}/>))}
            </div>

        </div>
    );
};

export default ProfileScreen;