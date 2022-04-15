import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import events from "../Data/events.json"
import HeaderGuest from "../Components/HeaderGuest";
import React from "react";
import ExploreEvent from "../Components/ExploreEvent";
import Request from "../Components/Request";
import RequestEvent from "../Components/RequestEvent";


const RequestScreen = (param) => {

    return (
        <>
            <div className="d-flex flex-column align-items-center " style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
                {
                    events.map(event => {
                        return <RequestEvent event={event}
                                             user={user}
                        />
                    })
                }
            </div>
        </>
    );

}

export default RequestScreen;