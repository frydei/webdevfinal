import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {useParams} from "react-router";

const UserEllipseDropdownMenu = () => {
    const param = useParams();
    const path = useLocation().pathname;

    const [dropdown, setDropdown] = useState(false);
    return (
        <Dropdown onClick={() => setDropdown(!dropdown)}
                  show={dropdown}
                  className="f-dropdown-title bg-transparent border-0"
                  style={{"width": "143px"}}
        >
            <Dropdown.Toggle className="f-dropdown-toggle bg-transparent border-0 shadow-none"
                             style={{"marginRight": "0px", "width": "100%", "padding": "0px"}}>
                <i className="fa-solid fa-ellipsis f-icon d-flex justify-content-end m-0"
                   style={{"width": "100%"}}/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="f-dropdown-menu bg-transparent border-0 p-0">
                <Dropdown.Item className="bg-transparent border-0 m-0 pt-0">
                    <button className="f-link-button">
                        <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 f-menu-item-title " style={{"width": "100%"}}>Delete Event</li>
                    </button>
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

    );
};

export default UserEllipseDropdownMenu;