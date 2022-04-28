import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import FilledButton from "./FilledButton";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router";
import {updateUser, getUserById} from "../BACKEND/Actions/UsersActions";
import {updateEvent} from "../BACKEND/Actions/EventsActions";
import {updateSession} from "../BACKEND/Services/AuthServices";
import {REACT_APP_BASE} from "../App";


const EventDetailUser = ({event}) => {
    let min;
    const navigate = useNavigate()
    const [current_event, setCurrentEvent] = useState(event)
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    const date = new Date(current_event.date)

    if (date.getMinutes() === 0) {
        min = "";
    } else {
        min = ":" + date.getMinutes();
    }

    const dispatch = useDispatch();
    let new_attendee = {
        name: current_user.first_name + " " + current_user.last_name,
        image: current_user.profile_picture
    }

    const handleSubmit = async () => {

        let user_added = current_event.attendees.find(u => u.name === new_attendee.name)

        if (!user_added) {
            let db_user = await getUserById(dispatch, current_user._id)
            let updated_user = {
                ...db_user,
                upcoming_events: [{...current_event},...db_user.upcoming_events]

            }
            updateUser(dispatch, updated_user).then(r =>  console.log(r))
            setCurrentUser(await updateSession(updated_user))
        }

        let event_added = current_user.upcoming_events.find(e => e._id === current_event._id || e.title === current_event.title)
        if (!event_added) {
            let updated_event = {
                ...current_event, attendees: [...current_event.attendees, {...new_attendee}]

            }
            updateEvent(dispatch, updated_event)
            setCurrentEvent(updated_event)
        }

    };
    const navigateToProfile = (host) => {
        navigate(`/frydei/profile/${host.username}`, {
            state: {
                user: "USER"
            }
        });

    };

    if (current_event._id === undefined) {
        return null
    }


    return (
        <div className="container-fluid">
            <div className="row f-event-detail-content">
                <div className="col-6 f-event-detail-img">
                    <img src={`${REACT_APP_BASE}/${current_event.event_photo}`} alt=""/>
                    <div className="f-event-detail-section">
                        <h3 className="f-event-detail-section-header mt-2">Attendees</h3>
                        <div className="f-event-attendees m-0">
                            {
                                current_event.attendees.map(att => {
                                    return <img src={`${REACT_APP_BASE}/${att.profile_picture}`}
                                                alt=""
                                                className="f-user-icon-small me-1"
                                    />;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-6 f-event-detail">
                    <div className="row f-event-title-box p-2 mb-2">
                        <div className="f-event-title-content">
                            <h2 className="f-event-title">{current_event.title}</h2>
                            <p className="f-event-desc m-0">{current_event.desc}</p>
                        </div>
                    </div>

                    <div className="row f-event-detail-box p-2 mb-2">
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Host(s)</h3>
                            <div className="f-event-hosts">
                                <div className="f-event-attendees">
                                    {
                                        current_event.hosts.map(host => {
                                            return <button className="f-link-button" onClick={() => navigateToProfile((host))}>
                                                <img src={`${REACT_APP_BASE}/${host.profile_picture}`} alt=""
                                                     className="f-icon-small me-1"/>
                                            </button>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Cost</h3>
                            <h3 className="f-event-cost">${current_event.cost}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Location</h3>
                            <h3 className="f-event-location">{current_event.location}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Date and Time</h3>
                            <h3 className="f-event-time">
                                {date.toLocaleDateString("en-US", {month: "long"})} {date.getDate()}th, {date.getHours() % 12 || 12}{min} {date.getHours() >= 12 ? "PM" : "AM"}</h3>

                        </div>
                        <div className="f-event-detail-section ">
                            <h3 className="f-event-detail-section-header">Spots Left</h3>
                            <span className="f-event-attendees d-flex align-items-center">
                                {current_event.spots - current_event.attendees.length}
                                <i className="fa-solid fa-user-group ms-1"/>
                            </span>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Special Restrictions</h3>
                            <p className="f-section-text m-0">{current_event.restrictions}</p>

                        </div>

                    </div>
                    <div className="row f-tag-box d-flex align-items-center justify-content-start ps-0 mb-2"
                         style={{"width": "100%"}}>
                        <div className="d-flex align-items-center justify-content-start ps-0 mt-2"
                             style={{"width": "100%"}}>
                            {
                                current_event.tags.map(tag => {
                                    return <Tag tag={tag}/>;
                                })
                            }
                        </div>
                    </div>
                    <div className="row f-button-box">
                        <div className="p-0">
                            <FilledButton name={"Join"} handleSubmit={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailUser;