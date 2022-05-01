import React, {useEffect, useState} from "react";
import DashHeader from "../Components/Dashboard/DashHeader";
import EventCard from "../Components/Dashboard/EventCard";
import SearchEvent from "../Components/SearchEvent";
import ComplaintCard from "../Components/Dashboard/ComplaintCard";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router";
import {getEvents} from "../BACKEND/Services/EventsServices";
import {deleteUser, deleteUserByUsername, getUsers} from "../BACKEND/Services/UsersServices";
import UserIcon from "../Components/UserIcon";
import HomeEvent from "../Components/HomeEvent";


const DashboardScreen = () => {
    const [logged_in, current_user, setCurrentUser] = useOutletContext();
    const [events, setEvents] = useState();
    const [users, setUsers] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetch() {
            getEvents().then(r => {
                    r = r.sort((a, b) => new Date(a.date) - new Date(b.date));
                    setEvents(r);
                }
            );
        }

        fetch();
    }, []);

    useEffect(() => {
        async function fetch() {
            getUsers().then(r => {
                    console.log(r);
                    setUsers(r);
                }
            );
        }

        fetch();
    }, []);

    let data;
    if (users) {
        data = [
            {
                title: "Users",
                size: users.length,
            },
            {
                title: "Hosts",
                size: users.filter(u => u.events_hosted > 0).length,
            },
            {
                title: "Events",
                size: events.length,
            },
        ];
    }

    console.log(users);
    console.log(events);
    if (!events || !users) {
        return null;
    }

    const navigateToProfile = (host) => {

        if(host.username === current_user.username) {
            navigate("/frydei/profile/");
        } else {
            navigate(`/frydei/profile/${host.username}`, {
                state: {
                    user: "USER"
                }
            });
        }
    };

    const removeUser = (u) => {
        console.log(u)
        deleteUserByUsername(u.username).then(() => {
            getUsers().then((r) => {
                setUsers(r)
                u = null
            })
        })

    };

    return (
        <div className="f-dash row d-flex flex-column align-content-center justify-content-center "
             style={{"paddingLeft": "150px", "paddingRight": "150px", "paddingTop": "25px"}}>
            <DashHeader data={data}/>
            <div className="row p-0 d-flex justify-content-evenly mt-4" style={{"width": "100%"}}>
                <div className="col-md-6 col-sm-12 f-dash-box justify-content-start m-4">
                    <h3>Events</h3>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            events.map && events.map(e => {
                                return <HomeEvent event={e} page={"Past"}/>;
                            })
                        }
                    </div>

                </div>
                <div className="col-md-5 col-sm-12 f-dash-box justify-content-start m-4">
                    <h3>Registered Users</h3>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            users && users.map(u => {
                                return <div className="f-user-card d-flex align-items-center justify-content-between"
                                            style={{"width": "100%"}}>
                                    <button className="f-link-button"
                                            onClick={() => navigateToProfile(u)}>
                                        <UserIcon user={u}/>
                                    </button>
                                    <div className="d-flex d-flex justify-content-between" style={{"width": "90%"}}>

                                        <div className="d-flex ms-3 d-flex flex-column justify-content-between">
                                            <h4 className="f-title-small mb-0 d-flex align-items-center">{u.first_name} {u.last_name}</h4>

                                            <h5 className="f-medium-medium m-0 d-flex align-items-center"><span
                                                className="f-medium-regular">Events Hosted: </span>&nbsp;{u.events_hosted}&nbsp;&nbsp;&nbsp;
                                            </h5>
                                            <h5 className="f-medium-medium m-0 d-flex align-items-center"><span
                                                className="f-medium-regular">Events Attended: </span>&nbsp;{u.events_attended}
                                            </h5>


                                        </div>

                                        <button className="f-icon-button" onClick={() => removeUser(u)}>
                                            <i className={`fa-solid fa-times f-dark`}/>
                                        </button>

                                    </div>
                                </div>;
                            })
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};
export default DashboardScreen;