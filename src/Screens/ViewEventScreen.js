import React, {useEffect, useState} from "react";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";
import {useLocation} from "react-router-dom";
import {useOutletContext, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getEventById} from "../BACKEND/Actions/EventsActions";


const ViewEventScreen = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [logged_in, current_user] = useOutletContext()
    const [state, setState] = useState(false)
    console.log(logged_in)

    let param = useParams();
    let eventid = param.eventid
    let  view;
    useEffect( async () => {
        await getEventById(dispatch, eventid)
    }, [])
    const events = useSelector(state => state.events)

    if (!events) {
        return null
    }

    console.log(events)
    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                {logged_in ? <EventDetailUser event={events}/> : <EventDetailGuest event={events}/>}
            </div>
        </>

    )
}

export default ViewEventScreen;