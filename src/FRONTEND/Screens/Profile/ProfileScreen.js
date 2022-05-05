import React, {useEffect, useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import {useOutletContext, useParams} from "react-router";
import HomeEvent from "../../Components/HomeEvent";
import MediaCard from "../../Components/MediaCard";
import {getUserByUsername} from "../../../BACKEND/Services/UsersServices";
import FavoriteEvent from "../../Components/FavoriteEvent";

const ProfileScreen = () => {
    const {username} = useParams();
    const [user, setUser] = useState();

    useEffect(async () => {
        const url_user = await getUserByUsername(username);
        setUser(url_user);
    }, []);
    const [tab, changeTab] = useState("UPCOMING_EVENTS");

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

    if(!user) {
        return null
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
                                                                                                                      update={null}
                                                                                                                      page="Favorited"/>))}
                {tab === "MEDIA" &&
                    (user._id === undefined ? null : user.media.map && user.media.map(med => <MediaCard media={med}/>))
                }

            </div>

        </div>
    );
};

export default ProfileScreen;