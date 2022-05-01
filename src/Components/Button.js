import React from "react";

const Button = ({name, handleSubmit}) => {
    return(
        <button
            type="submit"
            className="f-button shadow-none"
            onClick={(e) => handleSubmit(e)}
        >{name}</button>
    );
}

export default Button;