import React from "react";
import UserIconSmall from "../UserIconSmall";

const ChatLabel = ({chat, handleClick}) => {
    let cover, title;
    const event = chat.event;
    if (chat.type === "single") {
        const user = chat.participants[0];
        cover = <img className="f-cover-img" src={`/images/${user.profile_picture}`} alt=""/>
        title = user.first_name + " " + user.last_name;
    } else {
        cover = <div className="f-chat-cover d-flex align-items-center justify-content-center">
            <h3 className="p-0 m-0">{event.title.substring(0, 2)}</h3>
        </div>;
        title = event.title;
    }

    const labelClick = () => {
        handleClick({id: chat.chat_id});
    };
    return (
        <div className="f-chat-label mb-3 d-flex align-items-center ps-2">
            {cover}
            <div className="f-chat-info">
                <div className="f-chat-title">
                    <h4>{title}</h4>
                    <h5>{chat.last_message}</h5>
                </div>
                <div className="f-chat-time">
                    <h5>{chat.recent_activity.hh}:{chat.recent_activity.mm} {chat.recent_activity.time}</h5>
                </div>

            </div>
        </div>
    );
};


export default ChatLabel;