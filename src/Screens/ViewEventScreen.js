import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import CreateEvent from "../Components/CreateEvent";
import React from "react";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import HeaderGuest from "../Components/HeaderGuest";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";


const ViewEventScreen = (param) => {
    let  view;
    if (param.logged_in) {
        view = <EventDetailUser event={param.event}/>;
    } else {
        view = <EventDetailGuest event={param.event}/>
    }
    return (
        <>
            <div style={{"paddingLeft": "350px", "paddingRight": "350px", "paddingTop": "25px"}}>
                {view}
            </div>
        </>

    )
}

export default ViewEventScreen;