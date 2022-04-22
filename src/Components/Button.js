import React from "react";

const Button = (param) => {
    return(
        <button className="f-button shadow-none">{param.name}</button>
    );
}

export default Button;