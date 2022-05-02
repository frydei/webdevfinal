import React from "react";
import menu from "../../../Data/menu.json";
import more_menu from "../../../Data/more_menu.json";
import MenuItem from "./MenuItem";

const Menu = () => {
    return (
        <ul className="list-group d-flex justify-content-end f-menu-list">
            {
                menu.map(item => {
                    return <MenuItem item={item}/>;
                })
            }
            <hr className="f-divider"/>

            <h3 className="f-section-header mt-3">More Information</h3>
            {
                more_menu.map(item => {
                    return <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-2 f-menu-item-title ">{item}</li>;
                })
            }

        </ul>

    );
};

export default Menu;