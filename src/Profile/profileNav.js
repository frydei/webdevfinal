import {Link} from "react-router-dom";
import React from "react";
import "./profile.css"

const ProfileNav = () => {
    // let upcomingEvents = [];
    // upcomingEvents = events.filter(param => new Date(param.event.date.day) - 5 > 0);
    return (
        <>
            <hr/>
            <nav id="f-profile-tabs" className="mt-2">
                <ul className="nav profile-tabs">
                    <li className="nav-item selected">
                        <Link className="nav-link active" to="#upcoming">Upcoming Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#past">Past Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#favoriyes">Favorited</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#media">Media</Link>
                    </li>
                </ul>
            </nav>

            {/*<div className="d-flex flex-wrap justify-content-between">*/}
            {/*    {*/}
            {/*        upcomingEvents.map(event => {*/}
            {/*            return <SearchEvent event={event}/>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}

        </>
    )

}

export default ProfileNav;