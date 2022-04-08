import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import CreateEvent from "../Components/CreateEvent";
import React from "react";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import HeaderGuest from "../Components/HeaderGuest";
import EventDetailUser from "../Components/EventDetailUser";
import EventDetailGuest from "../Components/EventDetailGuest";
import Footer from "../Homepage/Footer";


const ViewEventScreen = (param) => {
    let header, view;
    if (param.logged_in) {
        header = <HeaderUser user={user}/>;
        view = <EventDetailUser event={param.event}/>;
    } else {
        header = <HeaderGuest/>;
        view = <EventDetailGuest event={param.event}/>
    }
    return (
        <>
            {header}
            <div style={{"paddingLeft": "100px", "paddingRight": "100px", "paddingTop": "25px"}}>
                {view}
            </div>
            <Footer/>
        </>

    )
}

export default ViewEventScreen;