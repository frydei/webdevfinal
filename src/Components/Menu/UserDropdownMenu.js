import React, {useEffect, useState} from "react";
import {Dropdown} from "react-bootstrap";
import menu from "../../Data/menu.json";
import more_menu from "../../Data/more_menu.json";
import MenuItem from "./MenuItem";
import UserIconName from "../UserIconName";
import {Link} from "react-router-dom";
import {signOut} from "../../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";

const UserDropdownMenu = ({user}) => {
    const navigate = useNavigate();
    //const [current_user, setCurrentUser] = useState([])
    let more;
    if (user.admin_access) {
        const admin = {menu: "Admin Dashboard", link: "admin"};
        more = [...more_menu, admin];
    } else {
        more = more_menu;
    }
    //console.log("MENU___" + user)
    let username = user.first_name.toLowerCase().split("")[0] + user.last_name.toLowerCase();
    const [dropdown, setDropdown] = useState(false);

    const signUserOut = () => {
        console.log("clicked!")
        signOut().then(r => {
            navigate("/")
        });
    }

    const navigateToProfile = () => {

        navigate(`/frydei/profile/${user.username}`, {
            state: {
                user: "CURRENT"
            }
        });

    };

    return (
        <Dropdown onMouseLeave={() => setDropdown(false)}
                  onMouseEnter={() => setDropdown(true)}
                  show={dropdown}
                  className="f-dropdown-title bg-transparent border-0 me-3"
        >
            <Dropdown.Toggle className="f-dropdown-toggle bg-transparent border-0 shadow-none">
                <button className="f-link f-link-button" onClick={() => navigateToProfile()}><UserIconName user={user}/></button>
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
                    <button className="d-flex align-items-center justify-content-end p-0 list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-1 f-menu-item-title "
                            style={{"backgroundColor": "transparent", "border": "1px solid transparent"}}
                            onClick={() => {
                                signOut().then(r => {
                                    navigate("/")
                                });;
                            }}
                    >Sign out
                    </button>
                </Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>

    );
};

export default UserDropdownMenu;