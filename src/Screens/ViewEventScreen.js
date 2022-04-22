import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import CreateEvent from "../Components/CreateEvent";
import events from "../Data/events.json"
import React from "react";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import HeaderGuest from "../Components/HeaderGuest";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router";


const ViewEventScreen = () => {
    let path = useLocation();
    let param = useParams();
    let eventid = param.eventid
    console.log(path)
    let  view;
    let event = events.find(e => e.event_id.toString() === eventid)
    if (param.logged_in) {
        view = <EventDetailUser event={event}/>;
    } else {
        view = <EventDetailGuest event={event}/>
    }
    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                {view}
            </div>
        </>

    )
}

export default ViewEventScreen;