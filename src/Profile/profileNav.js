import {Link} from "react-router-dom";
import React from "react";
import "./profile.css"

const ProfileNav = ({changeTab, selected}) => {

    return (
        <>
            <hr/>
            <nav className="f-profile-tabs">
                <ul className="nav justify-content-center profile-tabs">
                    <li className={`nav-item f-nav ${selected.upcoming}`}>
                        {/*<Link className="nav-link active" to="#upcoming">Upcoming Events</Link>*/}
                        <button className="nav-link f-link" onClick={() => changeTab("UPCOMING_EVENTS")}>Upcoming Events</button>

                    </li>
                    <li className={`nav-item f-nav ${selected.past}`}>
                        {/*<Link className="nav-link" to="#past">Past Events</Link>*/}
                        <button className="nav-link f-link" onClick={() => changeTab("PAST_EVENTS")}>Past Events</button>

                    </li>
                    <li className={`nav-item f-nav ${selected.favorited}`}>
                        {/*<Link className="nav-link" to="#favoriyes">Favorited</Link>*/}
                        <button className="nav-link f-link" onClick={() => changeTab("FAVORITED_EVENTS")}>Favorited</button>
                    </li>
                    <li className={`nav-item f-nav ${selected.media}`}>
                        <button className="nav-link f-link" onClick={() => changeTab("MEDIA")}>Media</button>
                    </li>
                </ul>
            </nav>

        </>
    )

}

export default ProfileNav;