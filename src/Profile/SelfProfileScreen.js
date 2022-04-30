import {useOutletContext, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getUserByUsername} from "../BACKEND/Actions/UsersActions";
import ProfileComponent from "./ProfileItem";
import ProfileNav from "./profileNav";
import HomeEvent from "../Components/HomeEvent";
import FavoriteEvent from "../Components/FavoriteEvent";
import MediaCard from "../Components/MediaCard";
import SelfProfileComponent from "./SelfProfileComponent";

const SelfProfileScreen = () => {
    const {username} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    const [user, setUser] = useState(current_user);

    useEffect(async () => {
        if (location.state.user !== "CURRENT") {
            const url_user = await getUserByUsername(dispatch, username);
            setUser(url_user);
        }
    }, []);
    console.log(user)


    const [tab, changeTab] = useState("UPCOMING_EVENTS");
    const [render, setRender] = useState(false)
    //let user = users.find(u => u.first_name.toLowerCase().split("")[0] + u.last_name.toLowerCase() === uname)

    const getDate = (e) => {
        return new Date(e.date);
    };
    let selected;
    if (tab === "UPCOMING_EVENTS") {
        selected = {
            upcoming: "selected",
            past: "",
            media: "",
            favorited: "",
        };
    } else if (tab === "PAST_EVENTS") {
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

    const update = (new_user) => {
        setCurrentUser(new_user)
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
        <div className="f-profile" style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            {user._id === undefined ? null : <SelfProfileComponent user={user}/>}
            <ProfileNav changeTab={changeTab} selected={selected}/>

            <div className="f-event-grid mt-3">
                {tab === "PAST_EVENTS" &&
                 (user._id === undefined ? null : user.past_events.map(event => <HomeEvent event={event}
                                                                                           page="Past"/>))}

                {tab === "UPCOMING_EVENTS" &&
                 (user._id === undefined ? null : user.upcoming_events.map(event => <HomeEvent event={event}
                                                                                               page="Upcoming"/>))}

                {tab === "FAVORITED_EVENTS" &&
                 (user._id === undefined ? null : user.favorited.map(event => <FavoriteEvent event={event}
                                                                                             logged_in={logged_in}
                                                                                             current_user={user}
                                                                                             setCurrentUser={setCurrentUser}
                                                                                             update={update}
                                                                                             page="Favorited"/>))}
                {tab === "MEDIA" &&
                 (user._id === undefined ? null : user.media.map(med => <MediaCard media={med}/>))}
            </div>

        </div>
    );
}

export default SelfProfileScreen;