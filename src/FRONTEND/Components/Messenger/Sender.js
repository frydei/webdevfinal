import React from "react";

const Sender = ({msg}) => {
    return (
        <div className="f-msg-content d-flex align-items-start mb-3">
            <div className="f-msg-cover d-flex align-items-center justify-content-center me-2">{msg.cover}</div>
            <div className="f-msg d-flex flex-column justify-content-start a">
                <h6>{msg.sender}</h6>
                <h5>{msg.message}</h5>
            </div>
        </div>
    );

}

export default Sender;