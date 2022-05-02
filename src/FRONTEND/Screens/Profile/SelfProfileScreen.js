import {useOutletContext, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {
    getUserByUsername,
    UPDATE_PROFILE,
    UPDATE_USER,
    updateUser
} from "../../../BACKEND/Actions/UsersActions";
import ProfileNav from "./profileNav";
import HomeEvent from "../../Components/HomeEvent";
import FavoriteEvent from "../../Components/FavoriteEvent";
import MediaCard from "../../Components/MediaCard";
import SelfProfileItem from "./SelfProfileItem";
import {Modal} from "react-bootstrap";
import {updateSession} from "../../../BACKEND/Services/AuthServices";
import FilledButton from "../../Components/FilledButton";
import Button from "../../Components/Button"
const SelfProfileScreen = () => {
    const navigate = useNavigate();
    const {username} = useParams();
    let [editing, setEditing] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    let [user, setUser] = useState(current_user);
    const [modal, setModal] = useState(false);

    const uname = useRef();
    const fname= useRef();
    const lname= useRef();
    const email= useRef();
    const city= useRef();
    const state= useRef();
    const bio= useRef();

    useEffect(async () => {
        if (location.state.user !== "CURRENT") {
            const url_user = await getUserByUsername(dispatch, username);
            setUser(url_user);
        }
    }, []);

    const updateItem = (e) => {
        // e.preventDefault();
        let updated_user;
        updated_user = {
            ...user,
            username : uname.current.value,
            first_name: fname.current.value,
            last_name: lname.current.value,
            email: email.current.value,
            city: city.current.value,
            state: state.current.value,
            biography : bio.current.value

        }
        updateUser(dispatch, updated_user).then(r => console.log(r));
        setCurrentUser(updateSession(updated_user));
        // console.log (uname.current.value)
        // setModal(false);
    }

    const showModal = () => {
        setModal(true);
    };
    const hideModal = () => {
        setModal(false);
    };



    const [tab, changeTab] = useState("UPCOMING_EVENTS");
    const [render, setRender] = useState(false)
    //let user = users.find(u => u.first_name.toLowerCase().split("")[0] + u.last_name.toLowerCase() === uname)

    const getDate = (e) => {
        return new Date(e.date);
    };
    let selected;
    if (tab === "UPCOMING_EVENTS") {
        selected = {
            upcoming: "selected",
            past: "",
            media: "",
            favorited: "",
        };
    } else if (tab === "MY_EVENTS") {
        selected = {
            upcoming: "",
            past: "selected",
            media: "",
            favorited: "",
        };
    } else if (tab === "FAVORITED_EVENTS") {
        selected = {
            upcoming: "",
            past: "",
            media: "",
            favorited: "selected",
        };
    } else {
        selected = {
            upcoming: "",
            past: "",
            media: "selected",
            favorited: "",
        };
    }

    const update = (new_user) => {
        setCurrentUser(new_user)
    }

    /*const cleanUp = () => {
        dispatch({
            type: "user-clean-up",
            past: past
        })
    }

    const past = user.upcoming_events.filter(event => getDate(event) < new Date() ? cleanUp(event) : event)

*/
    return (


        <div className="f-profile" style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            <div className="f-profile-view">
                {user._id === undefined ? null : <SelfProfileItem user={user}/>}
            </div>
            {!editing &&
             <Button handleSubmit={showModal} name={"Edit Profile"}/>

            }



            <ProfileNav changeTab={changeTab} selected={selected}/>

            <div className="f-event-grid mt-3">
                {tab === "MY_EVENTS" &&
                 (user._id === undefined ? null : user.user_events.map(event => <HomeEvent event={event}
                                                                                           page="Past"/>))}

                {tab === "UPCOMING_EVENTS" &&
                 (user._id === undefined ? null : user.upcoming_events.map(event => <HomeEvent event={event}
                                                                                               page="Upcoming"/>))}

                {tab === "FAVORITED_EVENTS" &&
                 (user._id === undefined ? null : user.favorited.map(event => <FavoriteEvent event={event}
                                                                                             logged_in={logged_in}
                                                                                             current_user={user}
                                                                                             setCurrentUser={setCurrentUser}
                                                                                             update={update}
                                                                                             page="Favorited"/>))}
                {tab === "MEDIA" &&
                 (user._id === undefined ? null : user.media.map(med => <MediaCard media={med}/>))}
            </div>

            <Modal className="f-modal d-flex justify-content-center align-content-start " show={modal} onHide={hideModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="f-medium-medium f-header">Edit Profile</h4>
                    <form className="f-form d-flex flex-column align-items-center justify-content-center" onSubmit={(e) => updateItem(e)}>
                        <label className="f-label" htmlFor="username">
                            Username
                            <input className="f-input" id="name" type="text" form="user-form" ref={uname}
                                   placeholder={user.username}
                                   // onChange={updateItem}
                            />
                        </label>
                        <label htmlFor="first_name">
                            First Name
                            <input id="first_name" ref={fname}
                                   type="text" form="user-form" placeholder={user.first_name}
                                   onChange={updateItem}
                            />
                        </label>
                        <label htmlFor="last_name">
                            Last Name
                            <input id="last_name" ref={lname}
                                   type="text" form="user-form" placeholder={user.last_name}
                                   onChange={updateItem}
                            />
                        </label>
                        <label htmlFor="email"> Email
                            <input ref={email}
                                   id="email" type="tel" form="user-form" placeholder={user.email}
                                   onChange={updateItem}
                            />
                        </label>
                        <label htmlFor="city"> City
                            <input id="city" ref={city}
                                   placeholder={user.city} form="item-form" onChange={updateItem}/>
                        </label>
                        <label htmlFor="state"> State
                            <input id="state" ref={state}
                                   placeholder={user.state} form="item-form" onChange={updateItem}/>
                        </label>

                        <label className="mb-3" htmlFor="biography"> Biography
                            <textarea id="biography" ref={bio}
                                      placeholder={user.biography} onChange={updateItem}
                                      rows="5" form="item-form"/>
                        </label>

                        <div className="d-flex justify-content-center">
                            <FilledButton handleSubmit={updateItem} name={"Update Profile"}/>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </div>
    );
}

export default SelfProfileScreen;