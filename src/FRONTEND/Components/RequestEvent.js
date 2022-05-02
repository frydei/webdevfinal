import React from "react";
import EventContent from "./EventContent";
import Request from "./Request";
import Spacer from "./Spacer";
import AcceptedRequest from "./AcceptedRequest";
import {useNavigate, useOutletContext} from "react-router";
import {getUserById, updateUser} from "../../BACKEND/Actions/UsersActions";
import {useDispatch} from "react-redux";
import {updateSession} from "../../BACKEND/Services/AuthServices";
import {deleteEvent} from "../../BACKEND/Actions/EventsActions";

const RequestEvent = ({event}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [logged_in, current_user, setCurrentUser] = useOutletContext()


    const removeEvent = async () => {
        let db_user = await getUserById(dispatch, current_user._id);
        deleteEvent(dispatch, event._id)
        let updated_user = {
            ...db_user,
            user_events: db_user.user_events.filter(e => e._id !== event._id)
        };
        updateUser(dispatch, updated_user).then(r => console.log(r));
        setCurrentUser(await updateSession(updated_user));
        navigate(`/frydei/profile/${current_user.username}`, {
            state: {
                user: "CURRENT"
            }
        });

    }


    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EventContent event={event} is_favorite={"solid"} menu={<button className="f-icon-button" onClick={() => removeEvent()}><i className="fas fa-times"/></button>}/>
            <h3 className="f-medium-medium ps-4" style={{"width": "100%", "marginBottom": "20px"}}>Requests</h3>
            {
                event.requests.map && event.requests.map(user => {
                    return <Request user={user} event={event}/>
                })
            }
            <Spacer size={10}/>
            <h3 className="f-medium-medium ps-4" style={{"width": "100%", "marginBottom": "20px"}}>Accepted</h3>

            {
                event.attendees.map && event.attendees.map(user => {
                    return <AcceptedRequest user={user} event={event}/>
                })
            }
        </div>
    );
};
export default RequestEvent;