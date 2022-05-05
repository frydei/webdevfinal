import React, {useEffect, useState} from "react";
import UserIcon from "./UserIcon";
import UserIconSmall from "./UserIconSmall";
import {Link} from "react-router-dom";
import {getCurrentUser, updateSession} from "../../BACKEND/Services/AuthServices";
import {useNavigate, useOutletContext} from "react-router";
import {getUserById, updateUser} from "../../BACKEND/Actions/UsersActions";
import {useDispatch} from "react-redux";
import {REACT_APP_BASE} from "../../App";

const EventContent = ({event, is_favorite, menu}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logged_in, current_user, setCurrentUser] = useOutletContext();
    const host = event.hosts[0];
    const [heart, setHeart] = useState(is_favorite);

    //const [favorite, setFavorite] = useState("solid");
    const date = new Date(event.date);
    if (current_user._id === undefined) {
        return null;
    }

    const likeHandler = async () => {
        heart === "regular" ? setHeart("solid") : setHeart("regular")
        let in_favorited = current_user.favorited.find(e => e._id === event._id || e.title === event.title);
        let db_user = await getUserById(dispatch, current_user._id);
        let updated_user;
        if (!in_favorited) {
            updated_user = {
                ...db_user,
                favorited: [{...event}, ...db_user.favorited]
            };
            updateUser(dispatch, updated_user).then(() => console.log());
            setCurrentUser(await updateSession(updated_user));

        } else {
            updated_user = {
                ...db_user,
                favorited: db_user.favorited.filter(e => e._id !== event._id)
            };
            updateUser(dispatch, updated_user).then(() => console.log());
            setCurrentUser(await updateSession(updated_user));
        }

    };

    let user;
    if (current_user.username === host.username) {
        user = "CURRENT";
    } else {
        user = "USER";
    }

    const navigateToProfile = () => {
        if (host.username === current_user.username) {
            navigate("/frydei/profile");
        } else {
            navigate(`/frydei/profile/${host.username}`, {
                state: {
                    user: "USER"
                }
            });
        }

    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-3">
            <div
                className="f-event-header f-explore-header d-flex align-items-center justify-content-between ps-1 pe-1 mb-3">
                <button className="f-link-button" onClick={() => navigateToProfile}>
                    <UserIconSmall user={host}/>
                </button>
                {menu}
            </div>
            <div
                className="f-event-img-container mb-2 d-flex flex-column align-items-center justify-content-center position-relative">
                <Link to={`/frydei/explore/${event._id}`} className="f-link">
                    {event.hosts[0].username === "tmaster" ? <img className="f-event-img" src={`${event.event_photo}`} alt=""/> : <img className="f-event-img" src={`${REACT_APP_BASE}/${event.event_photo}`} alt=""/>}
                </Link>
            </div>
            <div className="f-event-detail">
                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-time f-medium mb-1">{date.toLocaleDateString("en-US", {month: "long"})} {date.getDate()}th, {date.getHours() >= 12 ? "PM" : "AM"}</h3>
                    <button className="f-icon-button" onClick={likeHandler}>
                        <i className={`fa-${heart} fa-heart f-dark`}/>
                    </button>
                </div>

                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-title f-medium-title mb-1">{event.title}</h3>
                    <span className="f-event-attendees f-medium mb-1">{event.spots} <i
                        className="fa-solid fa-user-group"/></span>
                </div>
                <div className="f-event-detail-section d-flex align-items-center justify-content-between">
                    <h3 className="f-event-location f-medium mb-1">{event.location}</h3>
                    <h3 className="f-event-cost f-medium mb-1">$ {event.cost}</h3></div>
            </div>
        </div>

    );
};
export default EventContent;