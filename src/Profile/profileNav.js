import {Link} from "react-router-dom";
import React from "react";
import "./profile.css"

const ProfileNav = ({changeTab}) => {

    return (
        <>
            <hr/>
            <nav className="f-profile-tabs">
                <ul className="nav justify-content-center profile-tabs">
                    <li className="nav-item f-nav selected">
                        {/*<Link className="nav-link active" to="#upcoming">Upcoming Events</Link>*/}
                        <Link to="/" className="nav-link f-link" onClick={() => changeTab("UPCOMING_EVENTS")}>Upcoming Events</Link>

                    </li>
                    <li className="nav-item f-nav">
                        {/*<Link className="nav-link" to="#past">Past Events</Link>*/}
                        <Link to="/" className="nav-link f-link" onClick={() => changeTab("PAST_EVENTS")}>Past Events</Link>

                    </li>
                    <li className="nav-item f-nav">
                        {/*<Link className="nav-link" to="#favoriyes">Favorited</Link>*/}
                        <Link to="/" className="nav-link f-link" onClick={() => changeTab("FAVORITED_EVENTS")}>Favorited</Link>
                    </li>
                    <li className="nav-item f-nav">
                        <Link className="nav-link f-link" to="#media">Media</Link>
                    </li>
                </ul>
            </nav>

        </>
    )

}

export default ProfileNav;