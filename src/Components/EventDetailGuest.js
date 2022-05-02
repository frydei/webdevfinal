import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import FilledButton from "./FilledButton";
import {Link} from "react-router-dom";
import {getCurrentUser} from "../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";
import {REACT_APP_BASE} from "../App";
import button from "./Button";

const EventDetailGuest = ({event}) => {
    let time, min;
    const [cost, setCost] = useState()
    const [tags, setTags] = useState()
    const [location, setLocation] = useState()
    const [rest, setRest] = useState()

    const [date, setDate] = useState(new Date())
    const navigate = useNavigate();

   useEffect(() => {
       if (event.hosts) {
           setDate(new Date(event.date))
           setLocation(event.location)
           setCost(event.cost)
           setRest(event.restrictions)
           setTags(event.tags)
       } else {
           setDate(new Date(event.dates.start.localDate))
           setLocation(event._embedded.venues[0].name)
           setCost(event.priceRanges ? event.priceRanges[0].min : 0)
           setRest(event._embedded.venues[0].generalInfo ? event._embedded.venues[0].generalInfo.generalRule : "")
           setTags([event.classifications[0].genre.name, event.classifications[0].subGenre.name !== event.classifications[0].genre.name ? event.classifications[0].subGenre.name : null])
       }

   }, [])

    time = date.getHours() >= 12 ? "PM" : "AM"

    if (date.getMinutes() === 0) {
        min = ""
    } else {
        min = ":" + date.getMinutes()
    }

    if (!event) {
        return null
    }

    const navigateToProfile = (host) => {

        navigate(`/frydei/profile/${host.username}`, {
            state: {
                user: "USER"
            }
        });
    };
    console.log(event)

    return (
        <div className="container-fluid">
            <div className="row f-event-detail-content">
                <div className="col-12 col-lg-6 f-event-detail-img mt-5 mb-5">
                    {event.hosts ?
                        (event.hosts[0].username !== "tmaster"
                                ? <img src={`${REACT_APP_BASE}/${event.event_photo}`} alt=""/>
                                :
                                <img src={`${event.event_photo}`} alt=""/>
                        )
                        :
                        <img src={`${event.images[5].url}`} alt=""/>
                    }
                    <div className="f-event-detail-section">
                        <h3 className="f-event-detail-section-header mt-2">Attendees</h3>
                        <div className="f-event-attendees m-0">
                            {
                               event.attendees && event.attendees.map(att => {
                                    return <button  className="f-link-button" onClick={() => navigateToProfile(att)}>
                                        <img src={`${REACT_APP_BASE}/${att.image}`}
                                             alt=""
                                             className="f-user-icon-small me-1"
                                        />

                                    </button>
                                })
                            }

                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-6 f-event-detail mt-5">
                    <div className="row f-event-title-box p-2 mb-2">
                        {event.hosts ? <div className="f-event-title-content">
                            <h2 className="f-event-title">{event.title}</h2>
                            <p className="f-event-desc m-0">{event.desc}</p>
                        </div>
                            :
                            <div className="f-event-title-content">
                                <h2 className="f-event-title">{event.name}</h2>
                                <p className="f-event-desc m-0">{event.info}</p>
                            </div>
                        }
                    </div>

                    <div className="row f-event-detail-box p-2 mb-2">
                        {event.hosts ? <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Host(s)</h3>
                            <div className="f-event-hosts">
                                <div className="f-event-attendees">
                                    {
                                        event.hosts.map(host => {
                                            return <button className="f-link-button"
                                                           onClick={() => navigateToProfile(host)}>
                                                <img src={`${REACT_APP_BASE}/${host.profile_picture}`} alt=""
                                                     className="f-icon-small me-1"/>
                                            </button>;
                                        })
                                    }

                                </div>
                            </div>

                        </div> : null }
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Cost</h3>
                            <h3 className="f-event-cost">${cost}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Location</h3>
                            <h3 className="f-event-location">{location}</h3>

                        </div>
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Date and Time</h3>
                            <h3 className="f-event-time">
                                {date.toLocaleDateString("en-US", {month: "long"})} {date.getDate()}th, {date.getHours() % 12 || 12}{min} {time}</h3>

                        </div>
                        {event.hosts ? <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Spots Left</h3>
                            <span className="f-event-attendees d-flex align-items-center">
                                {event.spots - event.attendees.length}
                                <i className="fa-solid fa-user-group ms-1"/>
                            </span>

                        </div> : null}
                        <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Special Restrictions</h3>
                            <p className="f-section-text m-0">{rest}</p>

                        </div>

                    </div>
                    <div className="row f-tag-box d-flex align-items-center justify-content-start ps-0 mb-2" style={{"width": "100%"}}>
                        <div className="d-flex align-items-center justify-content-start ps-0 mt-2" style={{"width": "100%"}}>
                            {
                                tags && tags.map(tag => {
                                    if(tag === null) {
                                        return null
                                    } else {
                                        return <Tag tag={tag}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="row f-button-box">
                        <div className="p-0">
                            <Link to="/sign-in" className="f-link"><FilledButton name={"Please log in to join events"}/></Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default EventDetailGuest;