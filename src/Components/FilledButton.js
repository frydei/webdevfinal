import React from "react";

const FilledButton = ({name, handleSubmit}) => {

    return(
        <button type="submit"
                onClick={(e) => handleSubmit(e)}
                className="f-button f-orange shadow-none">{name}
        </button>
    );
}

export default FilledButton;