import {useOutletContext, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getUserByUsername, UPDATE_PROFILE, UPDATE_USER} from "../BACKEND/Actions/UsersActions";
import ProfileNav from "./profileNav";
import HomeEvent from "../Components/HomeEvent";
import FavoriteEvent from "../Components/FavoriteEvent";
import MediaCard from "../Components/MediaCard";
import SelfProfileItem from "./SelfProfileItem";
import EditProfile from "./EditProfile";

const SelfProfileScreen = () => {
    const {username} = useParams();
    let [editing, setEditing] = useState(false)
    const dispatch = useDispatch();
    const location = useLocation();
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    const [user, setUser] = useState(current_user);



    useEffect(async () => {
        if (location.state.user !== "CURRENT") {
            const url_user = await getUserByUsername(dispatch, username);
            setUser(url_user);
        }
    }, []);
    const [formValues, setFormValues] = useState({
                                                     username: user.username,
                                                     first_name: user.first_name,
                                                     last_name: user.last_name,
                                                     email: user.email,
                                                     biography: user.biography,
                                                     city: user.city,
                                                     state: user.state
                                                 })
    // const [user, updateUser] = useState({
    //                                                  username: user.username,
    //                                                  first_name: user.first_name,
    //                                                  last_name: user.last_name,
    //                                                  email: user.email,
    //                                                  biography: user.biography,
    //                                                  city: user.city,
    //                                                  state: user.state
    //                                              })
    const submitForm = (values) => {
        console.log(values)

        dispatch({
                     type: UPDATE_PROFILE,
                     profileData: values
                 });
    }

    // const submitForm = (user) => {
    //     console.log(user)
    //
    //     dispatch({
    //                  type: UPDATE_USER,
    //                  profileData: user
    //              });
    // }


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
    } else if (tab === "PAST_EVENTS") {
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
            {/*<div className="f-profile-view">*/}
            {/*    {user._id === undefined ? null : <SelfProfileItem user={user}/>}*/}
            {/*</div>*/}
            <div className='me-4'>
                {editing ?
                 <i
                     className="fas fa-times"
                     onClick={() => {
                         setEditing(false)
                     }}
                 /> :
                 <i/>
                }
            </div>
            {editing ?
             <div>
                 <h5 className='profile-header'>Edit profile</h5>
                 {/*<EditProfile formValues={formValues} setFormValues={setFormValues} /> :*/}
             </div>
              :
                <div className="f-profile-view">
                    {user._id === undefined ? null : <SelfProfileItem user={user}/>}
                </div>
            }
            {editing &&
             <button
                 onClick={() => {
                     submitForm(formValues)
                     setEditing(false)
                 }}
                 className='btn btn-light'
             >
                 Save
             </button>
            }

            {!editing &&
             <button
                 onClick={() => setEditing(true)}
                 className='btn btn-secondary'
             >
                 Edit profile
             </button>
            }

            <ProfileNav changeTab={changeTab} selected={selected}/>

            <div className="f-event-grid mt-3">
                {tab === "PAST_EVENTS" &&
                 (user._id === undefined ? null : user.past_events.map(event => <HomeEvent event={event}
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

        </div>
    );
}

export default SelfProfileScreen;