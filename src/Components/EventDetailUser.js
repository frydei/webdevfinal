import React from "react";
import Tag from "./Tag";
import FilledButton from "./FilledButton";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const EventDetailUser = ({event}) => {
    let min;
    const user = useSelector(state => state.users[0]);

    if (event.date.minute === 0) {
        min = "";
    } else {
        min = ":" + event.date.minute;
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        console.log(user._id)
        dispatch(
                {
                    type: "join-event",
                    data: {
                        event: event,
                        user: user
                    }
                }
            )
        dispatch(
            {
                type: "add-attendee",
                data: {
                    event: event,
                    user: user
                }
            }
        )

    };


    return (
        <div className="container-fluid">
            <div className="row f-event-detail-content">
                <div className="col-6 f-event-detail-img">
                    <img src={`/Images/${event.event_photo}`} alt=""/>
                    <div className="f-event-detail-section">
                        <h3 className="f-event-detail-section-header mt-2">Attendees</h3>
                        <div className="f-event-attendees m-0">
                            {
                                event.attendees.map(att => {
                                    return <img src={`/Images/${att}`}
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
                            <h2 className="f-event-title">{event.title}</h2>
                            <p className="f-event-desc m-0">{event.desc}</p>
                        </div>
                    </div>

                    <div className="row f-event-detail-box p-2 mb-2">
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Host(s)</h3>
                            <div className="f-event-hosts">
                                <div className="f-event-attendees">
                                    {
                                        event.hosts.map(host => {
                                            return <Link className="f-link"
                                                         to={`/frydei/profile/${host.first_name.toLowerCase().split("")[0] + host.last_name.toLowerCase()}`}>
                                                <img src={`/Images/${host.profile_picture}`} alt=""
                                                     className="f-icon-small me-1"/>
                                            </Link>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Cost</h3>
                            <h3 className="f-event-cost">${event.cost}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Location</h3>
                            <h3 className="f-event-location">{event.location}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Date and Time</h3>
                            <h3 className="f-event-time">
                                {event.date.month} {event.date.day}th, {event.date.hour}{min} {event.date.time}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Spots Left</h3>
                            <span className="f-event-attendees d-flex align-items-center">
                                {event.spots - event.attendees.length}
                                <i className="fa-solid fa-user-group"/>
                            </span>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Special Restrictions</h3>
                            <p className="f-section-text m-0">{event.restrictions}</p>

                        </div>

                    </div>
                    <div className="row f-tag-box d-flex align-items-center justify-content-start ps-0 mb-2"
                         style={{"width": "100%"}}>
                        <div className="d-flex align-items-center justify-content-start ps-0"
                             style={{"width": "100%"}}>
                            {
                                event.tags.map(tag => {
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