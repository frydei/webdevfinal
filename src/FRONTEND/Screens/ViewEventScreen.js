import React, {useEffect, useState} from "react";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";
import {useLocation} from "react-router-dom";
import {useOutletContext, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getEventsById} from "../../BACKEND/Services/EventsServices";
import {getTMEventById} from "../../BACKEND/APIServices";


const ViewEventScreen = () => {
    const location = useLocation();
    const [logged_in, current_user] = useOutletContext()
    const [event, setEvent] = useState()

    let param = useParams();
    let eventid = param.eventid
    useEffect( async () => {
        getEventsById(eventid).then((r) => {
            setEvent(r)
        }).catch((err) => {
            if(err.response && err.response.status === 404) {
                getTMEventById(eventid).then((r) => {
                    setEvent(r[0])
                })
            }
        })
    }, [])


    if (!event) {
        return null
    }

    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                {event && (logged_in ? <EventDetailUser event={event}/> : <EventDetailGuest event={event}/>)}
            </div>
        </>

    )
}

export default ViewEventScreen;