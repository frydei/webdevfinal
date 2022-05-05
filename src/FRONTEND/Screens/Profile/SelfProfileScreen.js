import {useOutletContext, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {
    getUserByUsername,
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
import Button from "../../Components/Button";
import {uploadFile} from "../../../BACKEND/Services/FileServices";
import {getUserById} from "../../../BACKEND/Services/UsersServices";


const SelfProfileScreen = () => {
    let [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [modal, setModal] = useState(false);


    const uname = useRef();
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const city = useRef();
    const state = useRef();
    const bio = useRef();

    const updateItem = async (e) => {
        e.preventDefault();
        let updated_user;
        console.log(user)
        let u_user = await getUserById(user._id);
        console.log(u_user)
        updated_user = {
            ...user,
            username: uname.current.value ? uname.current.value : user.username,
            first_name: fname.current.value ? fname.current.value : user.first_name,
            last_name: lname.current.value ? lname.current.value : user.last_name,
            email: email.current.value ? email.current.value : user.email,
            city: city.current.value ? city.current.value : user.city,
            state: state.current.value ? state.current.value : user.state,
            biography: bio.current.value ? bio.current.value : user.biography,
            password: u_user.password

        };
        console.log("HERE")
        await updateUser(dispatch, updated_user);
        updateSession(updated_user).then(r => {
            dispatch({
                type: "UPDATE_CURRENT_USER",
                user: r
            });
            hideModal();
        });


    };

    const showModal = () => {
        setModal(true);
    };
    const hideModal = () => {
        setModal(false);
    };

    const [tab, changeTab] = useState("UPCOMING_EVENTS");

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
        dispatch({
            type: "UPDATE_CURRENT_USER",
            user: new_user
        });
    };

    const uploadMedia = async (file) => {
        const data = new FormData();
        data.append("file", file);
        let u_user = await getUserById(user._id);
        await uploadFile(data).then(() => {
            let med = {
                content: file.name
            };
            let updated_user = {
                ...user,
                media: [med, ...user.media],
                password: u_user.password
            };
            updateUser(dispatch, updated_user);
            updateSession(updated_user).then(r => {
                dispatch({
                    type: "UPDATE_CURRENT_USER",
                    user: r
                });
            });


        });

    };

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
                                                                                                update={update}
                                                                                                page="Favorited"/>))}
                {tab === "MEDIA" &&
                    <>
                        <div className="f-media-card d-flex justify-content-center">
                            <label htmlFor="f-media-upload"
                                   className="shadow-none d-flex align-items-center justify-content-center">
                                Add New Media
                                <input id="f-media-upload"
                                       type="file"
                                       style={{"display": "none"}}
                                       onChange={async (e) => {
                                           await uploadMedia(e.target.files[0]);
                                       }
                                       }
                                />

                            </label>
                        </div>
                    </>
                }
                {tab === "MEDIA" &&
                    (user._id === undefined ? null : user.media.map(med => <MediaCard media={med}/>))}

            </div>

            <Modal className="f-modal d-flex justify-content-center align-content-start " show={modal}
                   onHide={hideModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="f-medium-medium f-header">Edit Profile</h4>
                    <form className="f-form d-flex flex-column align-items-center justify-content-center"
                          onSubmit={(e) => updateItem(e)}>
                        <label className="f-label" htmlFor="username">
                            Username
                            <input className="f-input" id="name" type="text" form="user-form" ref={uname}
                                   placeholder={user.username}
                            />
                        </label>
                        <label htmlFor="first_name">
                            First Name
                            <input id="first_name" ref={fname}
                                   type="text" form="user-form"
                                   placeholder={user.first_name}
                            />
                        </label>
                        <label htmlFor="last_name">
                            Last Name
                            <input id="last_name" ref={lname}
                                   type="text" form="user-form"
                                   placeholder={user.last_name}
                            />
                        </label>
                        <label htmlFor="email"> Email
                            <input ref={email}
                                   id="email" type="tel" form="user-form"
                                   placeholder={user.email}
                            />
                        </label>
                        <label htmlFor="city"> City
                            <input id="city" ref={city}
                                   placeholder={user.city} form="item-form"/>
                        </label>
                        <label htmlFor="state"> State
                            <input id="state" ref={state}
                                   placeholder={user.state} form="item-form"/>
                        </label>

                        <label className="mb-3" htmlFor="biography"> Biography
                            <textarea id="biography" ref={bio}
                                      placeholder={user.biography}
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
};

export default SelfProfileScreen;