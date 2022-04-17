import {Link} from "react-router-dom";
import React from "react";
import "./profile.css"

const ProfileNav = ({changeTab}) => {

    return (
        <>
            <hr/>
            <nav className="f-profile-tabs">
                <ul className="nav justify-content-center profile-tabs">
                    <li className="nav-item selected">
                        {/*<Link className="nav-link active" to="#upcoming">Upcoming Events</Link>*/}
                        <a className="nav-link" onClick={() => changeTab("UPCOMING_EVENTS")}>Upcoming Events</a>

                    </li>
                    <li className="nav-item">
                        {/*<Link className="nav-link" to="#past">Past Events</Link>*/}
                        <a className="nav-link" onClick={() => changeTab("PAST_EVENTS")}>Past Events</a>

                    </li>
                    <li className="nav-item">
                        {/*<Link className="nav-link" to="#favoriyes">Favorited</Link>*/}
                        <a className="nav-link" onClick={() => changeTab("FAVORITED_EVENTS")}>Favorited</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#media">Media</Link>
                    </li>
                </ul>
            </nav>

        </>
    )

}

export default ProfileNav;