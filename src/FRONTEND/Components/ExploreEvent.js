import React from "react";
import EventContent from "./EventContent";
import {useOutletContext} from "react-router";
import {useSelector} from "react-redux";

const ExploreEvent = ({event}) => {
    const current_user = useSelector(state => state.user)
    if (current_user._id === undefined) {
        return null;
    }
    let is_favorite = current_user.favorited.find(e => e._id === event._id)
    let is_favorited = is_favorite ? "solid" : "regular"


    return (
        <div className="f-event f-explore d-flex flex-column align-items-center justify-content-center mb-5">
            <EventContent event={event} is_favorite={is_favorited} menu={null}/>
        </div>
    );
};
export default ExploreEvent;