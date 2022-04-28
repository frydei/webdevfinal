import React from "react";
import {REACT_APP_BASE} from "../../App";

const ChatHeader = ({chat}) => {
    const date = new Date(chat.most_recent_activity)
    const event_date = new Date(chat.event.date)
    return (
        <div className="f-chat-header d-flex flex-column align-items-center">
            <div>
                {
                    chat.participants.map(p => {
                            return <img className="f-cover-img me-1 ms-1 mb-3 mt-3" src={`${REACT_APP_BASE}/${p.profile_picture}`} alt=""/>;
                        }
                    )
                }
            </div>
            <h5><span>{chat.event.title}</span>, {event_date.toLocaleDateString("en-US", {month: "long"})} {event_date.getDate()}, {event_date.getHours() % 12 || 12} {event_date.getHours() >= 12 ? "PM" : "AM"}, {chat.event.location}</h5>

        </div>
    );
};

export default ChatHeader;