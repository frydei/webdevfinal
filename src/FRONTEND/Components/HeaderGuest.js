import React from "react";
import {Link} from "react-router-dom";
import MenuDropdownMenu from "./Menu/MenuDropdownMenu";


const HeaderGuest = () => {


    return(
        <div className="d-flex justify-content-between align-items-center pt-1">
            <Link to="/" className="f-link"><h1 className="f-title-small">Frydei</h1></Link>
            <div className="d-flex justify-content-end">
                <MenuDropdownMenu/>
            </div>
        </div>

    )
}

export default HeaderGuest;