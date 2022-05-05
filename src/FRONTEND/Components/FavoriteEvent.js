import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate, useOutletContext} from "react-router";
import {getUserById, updateUser} from "../../BACKEND/Actions/UsersActions";
import {useDispatch} from "react-redux";
import {updateSession} from "../../BACKEND/Services/AuthServices";
import {REACT_APP_BASE} from "../../App";

const FavoriteEvent = ({event, page, logged_in, current_user, setCurrentUser, update}) => {
    const [heart, setHeart] = useState(<i className="fa-solid fa-heart"/>)
    const [c_event, setEvent] = useState(event)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!event) {
        return null;
    }

    const date = new Date(c_event.date);
    let hour = date.getHours() % 12 || 12;
    let date_time = date.getHours() >= 12 ? "PM" : "AM"
    let month = date.toLocaleString('en-US', {month: 'long'});
    let time = month + " " + date.getDate() + ", " + hour + " " + date_time;


    const viewEvent = () => {
        navigate(`/frydei/explore/${c_event._id}`, {state: {logged_in: logged_in}})
    }

    const unlike = async () => {
        let db_user = await getUserById(dispatch, current_user._id);
        let updated_user = {
            ...db_user,
            favorited: db_user.favorited.filter(e => e._id !== c_event._id)
        };
        updateUser(dispatch, updated_user).then(() => console.log());
        updateSession(updated_user).then(r => {
            setCurrentUser(r)
            update(r)
            setHeart(<i className="fa-regular fa-heart"/>);
        })


    }


    return (
        <div className="f-event f-home d-flex flex-column align-items-center justify-content-center mt-3 me-1 ms-1">
            <div className="position-relative" style={{"width": "100%"}}>
                <button className="f-icon-button position-absolute top-0 end-0 pt-2 pe-2" onClick={unlike}>
                    {heart}
                </button>
                <button className="f-link f-link-button" onClick={() => viewEvent()}>
                    {c_event.hosts[0].username === "tmaster" ?<img className="f-event-img" src={`${c_event.event_photo}`} alt=""/> :<img className="f-event-img" src={`${REACT_APP_BASE}/${c_event.event_photo}`} alt=""/>}
                </button>
            </div>
            <div className="f-event-detail d-flex flex-column align-items-start justify-content-start">

                <div className="f-event-detail p-2 d-flex flex-column align-items-start justify-content-center">
                    <h3 className="f-event-title" style={{"textAlign": "left"}}>{c_event.title}</h3>
                    <div className="f-event-detail-section d-flex flex-column align-items-start justify-content-center">
                        <h3 className="f-event-location">{c_event.location}</h3>
                        <h3 className="f-event-time">{time}</h3>
                    </div>
                </div>
            </div>

        </div>

    );
};
export default FavoriteEvent;