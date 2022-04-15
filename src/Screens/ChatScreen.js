import React, {useState} from "react";
import ChatLabel from "../Components/Messenger/ChatLabel";
import EmptyChat from "../Components/Messenger/EmptyChat"
import chats from "../Data/chats.json"

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
        <>
            {
                chats.map(chat => {
                    return <ChatLabel chat={chat}
                                      handleClick={switchChat}
                    />
                })
            }
        </>
    );

}

export default ChatScreen;