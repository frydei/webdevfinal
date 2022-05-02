import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import more_menu from "../../../Data/more_menu.json";
import {Link} from "react-router-dom";

const MenuDropdownMenu = () => {
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
                <i className="fa-solid fa-bars f-icon d-flex justify-content-end m-0"
                   style={{"width": "100%"}}/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="f-dropdown-menu bg-transparent border-0">
                {
                    more_menu.map(item => {
                        return <Dropdown.Item >
                            <Link to={`/frydei/${item.link}`} className="f-link">
                                <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title ">{item.menu}</li>
                            </Link>
                        </Dropdown.Item>;
                    })
                }
                <Dropdown.Item>
                    <Link className="f-link" to={"/sign-in"}><li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title ">Log In</li></Link>
                </Dropdown.Item>
                <Dropdown.Item>
                    <Link className="f-link f-link-button" to={"/sign-up"}><li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title"
                                                                 style={{"fontWeight": "500"}}
                    >Sign Up</li></Link>
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

    );
};

export default MenuDropdownMenu;