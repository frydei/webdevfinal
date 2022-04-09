import React from "react";
import FilledButton from "./FilledButton";
import Button from "./Button";
import Spacer from "./Spacer";


const LargeHeaderGuest = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title large">Frydei</h1>
            <div className="d-flex justify-content-end">
                <a href="/frydei/sign-in">
                    <FilledButton name="Log In"/>
                </a>
                <Spacer size={15}/>
                <a href="/frydei/sign-up">
                    <Button name="Sign Up"/>
                </a>
            </div>
        </div>

    )
}

export default LargeHeaderGuest;