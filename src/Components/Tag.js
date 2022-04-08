import React from "react";

const Tag = (param) => {
    let bgcolor, fcolor;
    if (param.tag.color === "grey") {
        bgcolor = "#4F5D75"
        fcolor = "#f7f7f7";
    } else if (param.tag.color === "orange") {
        bgcolor = "#EF8354"
        fcolor = "#f7f7f7";
    } else if (param.tag.color === "white") {
        bgcolor = "#F7F7F7"
        fcolor = "#2D3142";
    }  else {
        bgcolor = "#DBDBDB"
        fcolor = "#2D3142";
    }
    return(
        <button className="f-tag" style={{"backgroundColor": `${bgcolor}`, "color": `${fcolor}`, "border": "1px solid transparent"}}>{param.tag.name}</button>
    );
}

export default Tag;