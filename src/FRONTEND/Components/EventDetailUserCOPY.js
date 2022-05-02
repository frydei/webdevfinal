import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import FilledButton from "./FilledButton";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router";
import {updateUser, getUserById} from "../../BACKEND/Actions/UsersActions";
import {createEvent, updateEvent} from "../../BACKEND/Actions/EventsActions";
import {getCurrentUser, updateSession} from "../../BACKEND/Services/AuthServices";
import {REACT_APP_BASE} from "../../App";
import {getUserSession} from "../../BACKEND/Actions/AuthActions";


const EventDetailUser = ({event}) => {
    const [button, setButton] = useState("Join")
    const [logged_in, current_user, setCurrentUser] = useOutletContext()
    let time, min;
    const [cost, setCost] = useState()
    const [tags, setTags] = useState()
    const [location, setLocation] = useState()
    const [rest, setRest] = useState()

    const [date, setDate] = useState(new Date())
    const navigate = useNavigate()

    useEffect(() => {
        if (event._id) {
            setDate(new Date(event.date))
            setLocation(event.location)
            setCost(event.cost)
            setRest(event.restrictions)
            setTags(event.tags)
        } else if (event.id) {
            setDate(new Date(event.dates.start.localDate))
            setLocation(event._embedded.venues[0].name)
            setCost(event.priceRanges ? event.priceRanges[0].min : 0)
            setRest(event.priceRanges ? event.priceRanges[0].min : 0)
            setTags([event.classifications[0].genre.name, event.classifications[0].subGenre.name !== event.classifications[0].genre.name ? event.classifications[0].subGenre.name : null])
        }
    }, [])
    useEffect(() => {
        async function fetch() {
            getCurrentUser().then(r => {
                setCurrentUser(r)
            })
        }
        fetch()
    }, [])

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
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!event.hosts) {
            let new_event = {
                _id: event.id,
                title: event.name,
                event_photo: event.images[5].url,
                desc: event.info,
                hosts: {
                    first_name: "Ticket",
                    last_name: "Master",
                    username: "tmaster",
                    profile_picture: "tm.jpeg"
                },
                cost: cost,
                location: location,
                geolocation: {
                    lat: event._embedded.venues[0].location.latitude,
                    lng: event._embedded.venues[0].location.longitude
                },
                date: date,
                attendees: [],
                restrictions: rest,
                tags: tags.filter(t => t !== null),
                is_approved: true
            }

            createEvent(dispatch, new_event).then(() => console.log()).catch((err) => console.log(err))
            await addUser()
        }
    };

    const addUser = async () => {
        console.log("here")
        let user_added = event.attendees.find(u => u.name === new_attendee.name)

        if (!user_added) {
            let db_user = await getUserById(dispatch, current_user._id)
            let updated_user = {
                ...db_user,
                upcoming_events: [{...event},...db_user.upcoming_events]

            }
            updateUser(dispatch, updated_user).then(async () => {
                setCurrentUser(await updateSession(updated_user))
            })
        }

        let event_added = current_user.upcoming_events.find(e => e._id === event._id || e.title === event.title)
        if (!event_added) {
            let updated_event = {
                ...event, attendees: [...event.attendees, {...new_attendee}]

            }
            updateEvent(dispatch, updated_event).then(() => {
                setButton("Joined")
            })
        }

    }


    const navigateToProfile = (host) => {
        navigate(`/frydei/profile/${host.username}`, {
            state: {
                user: "USER"
            }
        });
    };
    if (!event.id || !event._id) {
        return null
    }

    return (
        <div className="container-fluid">
            <div className="row f-event-detail-content">
                <div className="col-6 f-event-detail-img">
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
                                {date.toLocaleDateString("en-US", {month: "long"})} {date.getDate()}th, {date.getHours() % 12 || 12}{min} {date.getHours() >= 12 ? "PM" : "AM"}</h3>

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
                    <div className="row f-tag-box d-flex align-items-center justify-content-start ps-0 mb-2"
                         style={{"width": "100%"}}>
                        <div className="d-flex align-items-center justify-content-start ps-0 mt-2"
                             style={{"width": "100%"}}>
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
                            <FilledButton name={button} handleSubmit={handleSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailUser;