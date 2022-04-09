import React from "react";
import FilledButton from "./FilledButton";
import Button from "./Button";
import Spacer from "./Spacer";
import {Link} from "react-router-dom";


const HeaderGuest = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title-small">Frydei</h1>
            <div className="d-flex justify-content-end">
                <Link to="/frydei/sign-in">
                    <FilledButton name="Log In"/>
                </Link>
                <Spacer size={15}/>
                <Link to="/frydei/sign-up">
                    <Button name="Sign Up"/>
                </Link>
            </div>
        </div>

    )
}

export default HeaderGuest;