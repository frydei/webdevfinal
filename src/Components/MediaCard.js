import React from "react";
import {REACT_APP_BASE} from "../App";

const MediaCard = ({media}) => {
    return(
        <div className="f-media-card">
            <img src={`${REACT_APP_BASE}/${media.content}`} alt=""/>
        </div>
        );
}

export default MediaCard;