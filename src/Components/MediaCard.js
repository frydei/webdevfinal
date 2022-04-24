import React from "react";

const MediaCard = ({media}) => {

    return(
        <div className="f-media-card">
            <img src={`/Images/${media.content}`} alt=""/>
        </div>
        );
}

export default MediaCard;