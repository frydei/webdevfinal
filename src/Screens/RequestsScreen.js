import user from "../Data/user.json";
import events from "../Data/events.json"
import React from "react";
import RequestEvent from "../Components/RequestEvent";
import {useSelector} from "react-redux";
import {useOutletContext} from "react-router";


const RequestScreen = () => {
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    return (
        <>
            <div className="d-flex flex-column align-items-center " style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
                {
                    current_user.user_events.map(event => {
                        return <RequestEvent event={event}/>
                    })
                }
            </div>
        </>
    );

}

export default RequestScreen;