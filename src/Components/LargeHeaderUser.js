import React from "react";
import UserDropdownMenu from "./Menu/UserDropdownMenu";
import {Link} from "react-router-dom";


const LargeHeaderUser = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <Link to="/frydei" className="f-link"><h1 className="f-title">Frydei</h1></Link>
            <div className="d-flex justify-content-end">
                <UserDropdownMenu/>
            </div>
        </div>

    )
}

export default LargeHeaderUser;