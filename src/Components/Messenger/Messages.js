import React from "react";
import Recipient from "./Recipient";
import Sender from "./Sender";


const Messages = ({messages, user}) => {
    return (
        <div className="">
            {
                messages.map((msg) => {
                    return msg._id === user._id ? <Recipient msg={msg}/> : <Sender msg={msg}/>

                })

            }
            </div>
    );
}

export default Messages;