import React from "react";

const ActionTag = ({tag, handleClick}) => {
    let bgcolor, fcolor;
    if (tag.color === "grey") {
        bgcolor = "#4F5D75"
        fcolor = "#f7f7f7";
    } else if (tag.color === "orange") {
        bgcolor = "#EF8354"
        fcolor = "#f7f7f7";
    } else if (tag.color === "white") {
        bgcolor = "#F7F7F7"
        fcolor = "#2D3142";
    }  else {
        bgcolor = "#DBDBDB"
        fcolor = "#2D3142";
    }
    return(
        <button className="f-tag d-flex align-items-center justify-content-center mb-2"
                style={{"backgroundColor": `${bgcolor}`, "color": `${fcolor}`, "border": "1px" +
                " solid transparent"}}
                onClick={() => handleClick(tag.name)}
        >{tag.name}</button>
    );
}

export default ActionTag;