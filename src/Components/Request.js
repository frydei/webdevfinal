import React, {useState} from "react";
import {Link} from "react-router-dom";
import UserIconSmall from "./UserIconSmall";
import {useNavigate, useOutletContext} from "react-router";
import {getUserById, updateUser} from "../BACKEND/Actions/UsersActions";
import {updateSession} from "../BACKEND/Services/AuthServices";
import {updateEvent} from "../BACKEND/Actions/EventsActions";
import {useDispatch} from "react-redux";

const Request = ({user, event}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [logged_in, current_user, setCurrentUser] = useOutletContext();
    const [display, setDisplay] = useState();
    const [msg, setMsg] = useState("wants to join your event.");

    const acceptClick = async () => {
        const in_event = current_user.user_events.find(e => e._id === event._id || e.title === event.title);
        console.log(in_event)
        let db_user = await getUserById(dispatch, current_user._id);
        const is_added = in_event.attendees.find(u => u.username === user.username);
        let updated_user;

        if (!is_added) {
            let new_user = {
                name: user.name,
                image: user.profile_picture
            };
            let updated_event = {
                ...event, requests: event.requests.filter(u => u.username !== user.username),
                attendees: [...event.attendees, {...new_user}]
            };
            updated_user = {
                ...db_user,
                user_events: db_user.user_events.map(e => e._id === event._id ? updated_event : e)
            };

            updateUser(dispatch, updated_user).then(r => console.log(r));
            setCurrentUser(await updateSession(updated_user));
            updateEvent(dispatch, updated_event)
            setDisplay("none");
            setMsg("has been added to your event");
        }

    }

        const rejectClick = () => {
            setDisplay("none");
            setMsg("has been added to your event");
        };

        const navigateToProfile = () => {
            navigate(`/frydei/profile/${user.username}`, {
                state: {
                    user: "USER"
                }
            });

        };
        return (
            <div className="d-flex align-items-center justify-content-between f-request-box pb-3">
                <div className="d-flex align-items-center">
                    <button className="f-link-button" onClick={() => navigateToProfile}>
                        <UserIconSmall user={user}/>
                    </button>
                    <h3 className="ms-2 f-small-regular">{user.name} wants to join your event.</h3>
                </div>
                <div className="d-flex justify-content-between" style={{"width": "8%"}}>
                    <button className="f-icon-button f-orange-font"
                            id="accept" onClick={() => acceptClick()}
                            style={{"display": `${display}`}}
                    >
                        <i className="far fa-check-circle"/>
                    </button>
                    <button className="f-icon-button" id="reject" onClick={() => rejectClick()}
                            style={{"display": `${display}`}}
                    >
                        <i className="far fa-times-circle f-dark"/>
                    </button>
                </div>
            </div>

        );
    };

    export default Request;