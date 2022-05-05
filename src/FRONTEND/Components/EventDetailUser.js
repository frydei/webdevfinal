import React, {useEffect, useState} from "react";
import Tag from "./Tag";
import FilledButton from "./FilledButton";
import {useNavigate, useOutletContext} from "react-router";
import {updateUser, getUserById} from "../../BACKEND/Services/UsersServices";
import {createEvent, getEventsById, updateEvent} from "../../BACKEND/Services/EventsServices";
import {updateSession} from "../../BACKEND/Services/AuthServices";
import {REACT_APP_BASE} from "../../App";
import {useDispatch, useSelector} from "react-redux";


const EventDetailUser = ({event}) => {
    const [c_event, setEvent] = useState(event)
    const [button, setButton] = useState("Join")
    const current_user = useSelector(state => state.user)
    let time, min;
    const [cost, setCost] = useState()
    const dispatch = useDispatch()

    const [tags, setTags] = useState()
    const [location, setLocation] = useState()
    const [rest, setRest] = useState()

    const [date, setDate] = useState(new Date())
    const navigate = useNavigate();

    useEffect(() => {
        if (c_event._id) {
            setDate(new Date(c_event.date))
            setLocation(c_event.location)
            setCost(c_event.cost)
            setRest(c_event.restrictions)
            setTags(c_event.tags)
            if(c_event.attendees.find(a => a.username === current_user.username)) {
                setButton("Joined")
            }

        } else if (c_event.id) {
            setDate(new Date(c_event.dates.start.localDate))
            setLocation(c_event._embedded.venues[0].name)
            setCost(c_event.priceRanges ? c_event.priceRanges[0].min : 0)
            setRest(c_event._embedded.venues[0].generalInfo ? c_event._embedded.venues[0].generalInfo.generalRule : "")
            setTags([c_event.classifications[0].genre.name, c_event.classifications[0].subGenre.name !== c_event.classifications[0].genre.name ? c_event.classifications[0].subGenre.name : null])
        } else {
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(button === "Join") {
            if (!c_event._id) {
                let new_event = {
                    _id: c_event.id,
                    title: c_event.name,
                    event_photo: c_event.images[5].url,
                    desc: c_event.info,
                    hosts: {
                        first_name: "Ticket",
                        last_name: "Master",
                        username: "tmaster",
                        profile_picture: "tm.jpeg"
                    },
                    cost: cost,
                    location: location,
                    geolocation: {
                        lat: c_event._embedded.venues[0].location.latitude,
                        lng: c_event._embedded.venues[0].location.longitude
                    },
                    date: date,
                    attendees: [],
                    restrictions: rest,
                    tags: tags.filter(t => t !== null),
                    is_approved: true
                }

                createEvent(new_event).then(async () => {
                    setEvent(new_event)
                }).catch((err) => console.log(err))
            }
            addUser().then(() => {
                setButton("Joined")
                setEvent(getEventsById(c_event._id))
            })
        }

    };

    const addUser = async () => {
        let new_attendee = {
            name: current_user.first_name + " " + current_user.last_name,
            image: current_user.profile_picture,
            username: current_user.username
        }

        let user_added = c_event.attendees.find(u => u.username === new_attendee.username)
        let event_added = current_user.upcoming_events.find(e => e._id === c_event._id || e.title === c_event.title)

        if (!user_added && !event_added) {
            let db_user = await getUserById(current_user._id)
            let updated_user = {
                ...db_user,
                upcoming_events: [{...c_event},...db_user.upcoming_events],
                events_attended: db_user.events_attended + 1
            }
            updateUser(updated_user).then(async () => {
                updateSession(updated_user).then(r => {
                    dispatch({
                        type: "UPDATE_CURRENT_USER",
                        user: r
                    })
                })
            })

            let updated_event = {
                ...c_event, attendees: [...c_event.attendees, {...new_attendee}]
            }
            updateEvent(updated_event).then(() => {
                setEvent(updated_event)
            })
        }
    }

    const navigateToProfile = (host) => {
        if (host.username === current_user.username) {
            navigate("/frydei/profile");
        } else {
            navigate(`/frydei/profile/${host.username}`);
        }
    };

    return (
        <div className="container-fluid">

            <div className="row f-event-detail-content">
                <div className="col-12 col-lg-6 f-event-detail-img mb-5 mt-5">
                    {c_event._id ?
                        (c_event.hosts[0].username !== "tmaster"
                                ? <img src={`${REACT_APP_BASE}/${c_event.event_photo}`} alt=""/>
                                :
                                <img src={`${c_event.event_photo}`} alt=""/>
                        )
                        :
                        (c_event.id ? <img src={`${c_event.images[5].url}`} alt=""/> : null)
                    }
                    <div className="f-event-detail-section">
                        <h3 className="f-event-detail-section-header mt-2">Attendees</h3>
                        <div className="f-event-attendees m-0">

                            {
                                c_event.attendees && c_event.attendees.map(att => {
                                    return <button className="f-link-button"
                                                   onClick={() => navigateToProfile(att)}><img src={`${REACT_APP_BASE}/${att.image}`}
                                                alt=""
                                                className="f-user-icon-small me-1"
                                    /></button>;
                                })
                            }

                        </div>

                    </div>
                </div>
                <div className="col-12 col-lg-6 f-event-detail mt-5 mb-5">
                    <div className="row f-event-title-box p-2 mb-2">
                        {c_event.hosts ? <div className="f-event-title-content">
                                <h2 className="f-event-title">{c_event.title}</h2>
                                <p className="f-event-desc m-0">{c_event.desc}</p>
                            </div>
                            :
                            <div className="f-event-title-content">
                                <h2 className="f-event-title">{c_event.name}</h2>
                                <p className="f-event-desc m-0">{c_event.info}</p>
                            </div>
                        }
                    </div>

                    <div className="row f-event-detail-box p-2 mb-2">
                        {c_event.hosts ? <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Host(s)</h3>
                            <div className="f-event-hosts">
                                <div className="f-event-attendees">
                                    {
                                        c_event.hosts.map(host => {
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
                        {c_event.hosts ? <div className="f-event-detail-section">
                            <h3 className="f-event-detail-section-header">Spots Left</h3>
                            <span className="f-event-attendees d-flex align-items-center">
                                {c_event.spots - c_event.attendees.length}
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
                            <FilledButton name={button} handleSubmit={handleSubmit}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default EventDetailUser;