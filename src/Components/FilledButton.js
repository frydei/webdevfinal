import React from "react";

const FilledButton = (param) => {
    return(
        <button type="submit"
                onSubmit={param.handleSubmit}
                className="f-button f-orange shadow-none">{param.name}
        </button>
    );
}

export default FilledButton;