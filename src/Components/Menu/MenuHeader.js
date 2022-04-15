import React from "react";
import MenuDropdownMenu from "./MenuDropdownMenu";


const MenuHeader = ({user}) => {
    return (
        <div className="d-flex justify-content-between align-items-center pt-1">
            <h1 className="f-title-small">Frydei</h1>

            <div className="d-flex justify-content-end">
                <MenuDropdownMenu user={user}/>
            </div>
        </div>

    );
};

export default MenuHeader;