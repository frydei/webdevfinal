import React from "react";
import UserIconName from "./UserIconName";
import user from "../Data/user.json"
import UserDropdownMenu from "./Menu/UserDropdownMenu";


const HeaderUser = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title-small">Frydei</h1>

            <div className="d-flex justify-content-end">
                <UserDropdownMenu/>
            </div>
        </div>

    )
}

export default HeaderUser;