import React from "react";

const ChatHeader = ({chat}) => {
    console.log(chat);
    return (
        <div className="f-chat-header d-flex flex-column align-items-center">
            <div>
                {
                    chat.participants.map(p => {
                            return <img className="f-cover-img me-1 ms-1 mb-3 mt-3" src={`/images/${p.profile_picture}`} alt=""/>;
                        }
                    )
                }
            </div>
            <h5><span>{chat.event.title}</span>, {chat.event.date.month} {chat.event.date.day}, {chat.event.time}, {chat.event.location}</h5>

        </div>
    );
};

export default ChatHeader;