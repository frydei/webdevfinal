import React from "react";

const Sender = ({msg}) => {
    return (
        <div className="f-msg-content d-flex align-items-start justify-content-end mb-3">
            <div className="f-msg d-flex flex-column justify-content-end a">
                <h6 className="" style={{"textAlign": "right"}}>{msg.sender}</h6>
                <h5 style={{"textAlign": "right"}}>{msg.message}</h5>
            </div>
            <div className="f-msg-cover d-flex align-items-center justify-content-center ms-2">{msg.cover}</div>

        </div>
    );

}

export default Sender;