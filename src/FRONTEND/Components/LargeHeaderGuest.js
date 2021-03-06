import React from "react";
import FilledButton from "./FilledButton";
import Button from "./Button";
import Spacer from "./Spacer";
import {Link} from "react-router-dom";


const LargeHeaderGuest = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <Link to="/" className="f-link"><h1 className="f-title large">Frydei</h1></Link>
            <div className="d-flex justify-content-end">
                <Link to="/sign-in">
                    <FilledButton name="Log In"/>
                </Link>
                <Spacer size={15}/>
                <Link to="/sign-up">
                    <Button name="Sign Up"/>
                </Link>
            </div>
        </div>

    )
}

export default LargeHeaderGuest;