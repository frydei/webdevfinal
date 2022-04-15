import React from "react";

const EmptyChat = () => {
    return(
        <div className="f-empty-box box d-flex flex-column align-items-center justify-content-center"
        >
            <i className="fa-solid fa-comments mb-2"/>
            <h3 className="f-medium-regular">Your messages will appear here.</h3>
        </div>
    );
}

export default EmptyChat;