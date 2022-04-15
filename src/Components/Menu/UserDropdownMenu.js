import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import user from "../../Data/user.json";
import menu from "../../Data/menu.json";
import more_menu from "../../Data/more_menu.json";
import MenuItem from "./MenuItem";
import UserIconName from "../UserIconName";
import {Link} from "react-router-dom";

const UserDropdownMenu = () => {
    let more;
    if (user.admin_access) {
        const admin = {menu: "Admin Dashboard", link: "admin"};
        more = [...more_menu, admin];
    }

    const [dropdown, setDropdown] = useState(true);
    return (
        <Dropdown onMouseLeave={() => setDropdown(true)}
                  onMouseEnter={() => setDropdown(true)}
                  show={dropdown}
                  className="f-dropdown-title bg-transparent border-0 me-3"
        >
            <Dropdown.Toggle className="f-dropdown-toggle bg-transparent border-0">
                <Link to="/frydei/profile" className="f-link"><UserIconName user={user}/></Link>
            </Dropdown.Toggle>
            <Dropdown.Menu className="f-dropdown-menu bg-transparent border-0">
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
                <Dropdown.Item className="d-flex align-items-center justify-content-end bg-transparent border-0">
                    <button className="d-flex align-items-center justify-content-end p-0"
                        style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}>
                        <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title ">Sign out</li>
                    </button>
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

    );
};

export default UserDropdownMenu;