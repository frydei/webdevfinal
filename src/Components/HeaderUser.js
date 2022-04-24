import React from "react";
import UserDropdownMenu from "./Menu/UserDropdownMenu";
import {Link} from "react-router-dom";


const HeaderUser = ({user}) => {
    //if (user) { return null}
    //console.log("HEADER___" + user.first_name)
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <Link to="/frydei" className="f-link"><h1 className="f-title-small">Frydei</h1></Link>
            <div className="d-flex justify-content-end">
                {user._id === undefined ? null : <UserDropdownMenu user={user}/>}
            </div>
        </div>

    )
}

export default HeaderUser;