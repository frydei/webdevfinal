import React from "react";

const NumberCard = ({data}) => {
    return (
        <div className="f-number-card d-flex align-content-center flex-column justify-content-center">
            <h6>{data.title}</h6>
            <div className="f-num-card d-flex justify-content-center">{data.size}</div>
        </div>
    );
}

export default NumberCard;