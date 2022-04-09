import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import events from "../Data/events.json"
import HeaderGuest from "../Components/HeaderGuest";
import React from "react";
import ExploreEvent from "../Components/ExploreEvent";
import Request from "../Components/Request";
import UserDropdownMenu from "../Components/Menu/UserDropdownMenu";
import Footer from "../Homepage/Footer";

const ExploreEventsScreen = (param) => {
    let header;
    if (param.logged_in) {
        header = <UserDropdownMenu/>
    } else {
        header = <HeaderGuest/>;
    }
    return (
        <>
            {header}
            <div className="d-flex flex-column align-items-center " style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
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