import React from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import user from "../../Data/user.json";

const ChatBox = ({chat}) => {

    return (
        <div className="f-chat-box box d-flex flex-column align-content-center justify-content-between p-3">
            <ChatHeader chat={chat}/>
            <Messages user={user}
                      messages={chat.messages}/>
            <form action="" className="f-msg-input">
                <div className="form-group">
                    <div className="input-group d-flex justify-content-between">
                        <textarea name="" id="chatmsg" rows="4" className="d-flex align-items-start">Begin typing you message here.</textarea>
                        <div className="input-group-append">
                            <button className="d-flex align-items-start"><i className="fa-solid fa-paper-plane"/></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ChatBox;