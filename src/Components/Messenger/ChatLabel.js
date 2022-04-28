import React from "react";
import UserIconSmall from "../UserIconSmall";
import {REACT_APP_BASE} from "../../App";

const ChatLabel = ({chat, handleClick, active}) => {
    let cover, title;
    const event = chat.event;
    if (chat.type === "single") {
        const user = chat.participants[0];
        cover = <img className="f-cover-img" src={`${REACT_APP_BASE}/${user.profile_picture}`} alt=""/>;
        title = user.first_name + " " + user.last_name;
    } else {
        cover = <div className="f-chat-cover d-flex align-items-center justify-content-center">
            <h3 className="d-flex justify-content-center align-items-center p-0 m-0">{event.title.substring(0, 2)}</h3>
        </div>;
        title = event.title;
    }
    const labelClick = () => {
        handleClick({id: chat.chat_id});
    };
    return (
        <button className="f-chat-label mb-3 d-flex align-items-center justify-content-between"
             style={{"backgroundColor": `${active ? "#ffffff": "transparent"}`}}
                onClick={labelClick}
        >
            {cover}
            <div className="f-chat-info d-flex justify-content-between ">
                <div className="f-chat-title">
                    <h4 >{title}</h4>
                    <h5>{chat.last_message}</h5>
                </div>
                <div className="f-chat-time d-flex flex-column align-items-end justify-content-center">
                    <h5>{chat.recent_activity.hh}:{chat.recent_activity.mm}{chat.recent_activity.time}</h5>
                    {chat.new_messages === 0 ? <i className="fa-solid fa-check" style={{"fontSize": "12px", "color": "#2D3142", "padding": "4px"}}/> :
                        <div className="d-flex justify-content-center align-items-center f-chat-time-circle">
                            <h5  className="d-flex justify-content-center align-items-center">{chat.new_messages}</h5></div>}
                </div>

            </div>
        </button>
    );
};


export default ChatLabel;