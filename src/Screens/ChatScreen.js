import React, {useState} from "react";
import ChatLabel from "../Components/Messenger/ChatLabel";
import EmptyChat from "../Components/Messenger/EmptyChat"
import chats from "../Data/chats.json"
import ChatSearch from "../Components/Messenger/ChatSearch";
import ChatBox from "../Components/Messenger/ChatBox";

const ChatScreen = (param) => {
    const user = param.user;
    let [activeChat, setActiveChat] = useState({})

    const switchChat = (params) => {
        for (let chat of chats) {
            if (chat.chat_id === params.id) {
                setActiveChat(chat);
            }
        }
    }
    console.log("Current Active Chat " + activeChat.chat_id);

    return (
        <div className="row" style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            <div className="col-4">
                <ChatSearch/>

                {
                    chats.map(chat => {
                        return <ChatLabel chat={chat}
                                          handleClick={switchChat}
                                          active={chat.chat_id === activeChat.chat_id}
                        />
                    })
                }
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center">
                {Object.keys(activeChat).length === 0 ? <EmptyChat/> : <ChatBox chat={activeChat}/>}
            </div>
        </div>
    );

}

export default ChatScreen;