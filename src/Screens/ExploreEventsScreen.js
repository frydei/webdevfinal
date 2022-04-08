import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import events from "../Data/events.json"
import HeaderGuest from "../Components/HeaderGuest";
import React from "react";
import ExploreEvent from "../Components/ExploreEvent";
import Footer from "../Homepage/Footer";

const ExploreEventsScreen = (param) => {
    let header;
    if (param.logged_in) {
        header = <HeaderUser user={user}/>;
    } else {
        header = <HeaderGuest/>;
    }
    return (
        <>
            {header}
            <div style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
                {
                    events.map(event => {
                        return <ExploreEvent event={event}/>
                    })
                }
            </div>
            <Footer/>
        </>
    );

}

export default ExploreEventsScreen;