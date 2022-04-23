import React from "react";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";
import {useLocation} from "react-router-dom";
import {useParams} from "react-router";
import {useSelector} from "react-redux";


const ViewEventScreen = ({logged_in}) => {
    const events = useSelector(state => state.events)
    const user = useSelector(state => state.users[0])
    let param = useParams();
    let eventid = param.eventid
    let  view;
    let event = events.find(e => e.event_id.toString() === eventid)
    if (logged_in) {
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