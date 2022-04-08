import React from "react";
import UserIconName from "./UserIconName";
import user from "../Data/user.json"


const LargeHeaderUser = () => {
    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title">Frydei</h1>
            <div className="d-flex justify-content-end">
                <UserIconName user={user}/>
            </div>
        </div>

    )
}

export default LargeHeaderUser;