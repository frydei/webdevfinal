import React from "react";
import Complaints from "../Components/Complaints";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const CreateEventScreen = () => {
    const param = useParams();
    const eventid = param.eventid;
    const events = useSelector(state => state.events)
    const user = useSelector(state => state.users[0])

    let event = events.find(f => f.event_id.toString() === eventid);
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"paddingLeft": "350px", "paddingRight": "350px", "paddingTop": "25px"}}>
                <h3 className="f-form-header mb-1">Submit a complaint</h3>
                <h3 className="f-form-header" style={{"fontSize": "13px"}}><span style={{"fontWeight": "normal"}}>We take all violations very seriously.</span> </h3>

                <Complaints user={user}
                            event={event}
                />
            </div>
        </>

    )
}

export default CreateEventScreen;