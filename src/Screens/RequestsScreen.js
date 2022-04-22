import user from "../Data/user.json";
import events from "../Data/events.json"
import React from "react";
import RequestEvent from "../Components/RequestEvent";
import {useSelector} from "react-redux";


const RequestScreen = () => {
    const events = useSelector(state => state.events)

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