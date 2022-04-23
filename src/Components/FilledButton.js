import React from "react";

const FilledButton = (props) => {
    const name = props.name;
    const handleSubmit = props.handleSubmit
    return(
        <button type="submit"
                onClick={handleSubmit}
                className="f-button f-orange shadow-none">{name}
        </button>
    );
}

export default FilledButton;