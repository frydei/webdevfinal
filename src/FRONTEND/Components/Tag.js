import React from "react";

const Tag = ({tag}) => {
    return(
        <button className="f-tag d-flex align-items-center justify-content-center mb-2 "
                style={{"backgroundColor": `#2D3142`, "color": `#DBDBDB`, "border": "1px" +
                " solid transparent"}}
        >{tag}</button>
    );
}

export default Tag;