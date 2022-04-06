import React from "react";
import FilledButton from "./FilledButton";
import Button from "./Button";
import Spacer from "./Spacer";


const LargeHeaderGuest = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title large">Frydei</h1>
            <div className="d-flex justify-content-end">
                <FilledButton name="Log In"/>
                <Spacer size={15}/>
                <Button name="Sign Up"/>
            </div>
        </div>

    )
}

export default LargeHeaderGuest;