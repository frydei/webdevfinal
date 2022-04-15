import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import menu from "../../Data/menu.json";
import more_menu from "../../Data/more_menu.json";
import MenuItem from "./MenuItem";
import {Link} from "react-router-dom";

const MenuDropdownMenu = ({user}) => {
    let more;
    if (user.admin_access) {
        const admin = {menu: "Admin Dashboard", link: "admin"};
        more = [...more_menu, admin]
    }
    const [dropdown, setDropdown] = useState(false);
    return (
        <Dropdown onMouseLeave={() => setDropdown(false)}
                  onMouseEnter={() => setDropdown(true)}
                  show={dropdown}
                  className="f-dropdown-title bg-transparent border-0 me-3 "
                  style={{"width": "143px"}}
        >
            <Dropdown.Toggle className="f-dropdown-toggle bg-transparent border-0"
                             style={{"marginRight": "0px", "width": "100%", "padding": "0px"}}>
                <i className="fa-solid fa-bars f-icon d-flex justify-content-end mb-2 mt-2 pe-4"
                   style={{"width": "100%"}}/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="f-dropdown-menu bg-transparent border-0 mt-2">
                {
                    menu.map(item => {
                        return <Dropdown.Item className="bg-transparent border-0"><MenuItem
                            item={item}/></Dropdown.Item>;
                    })
                }
                <hr className="f-divider me-3 mb-3"/>

                <h3 className="f-section-header mt-4 pe-3 ">More Information</h3>
                {
                    more.map(item => {
                        return <Dropdown.Item className="bg-transparent border-0">
                            <Link to={`/frydei/${item.link}`} className="f-link">
                                <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title ">{item.menu}</li>
                            </Link>
                        </Dropdown.Item>;
                    })
                }
            </Dropdown.Menu>

        </Dropdown>

    );
};

export default MenuDropdownMenu;