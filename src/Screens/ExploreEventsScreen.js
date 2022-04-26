import React from "react";
import ExploreEvent from "../Components/ExploreEvent";
import {useSelector} from "react-redux";
import {useOutletContext} from "react-router";

const ExploreEventsScreen = () => {
    const [logged_in, current_user, setCurrentUser] = useOutletContext()
    const events = useSelector(state => state.events)
    return (
        <>
            <div className="d-flex flex-column align-items-center " style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
                {
                    events.map(event => {
                        return <ExploreEvent event={event}/>
                    })
                }
            </div>
        </>
    );

}

export default ExploreEventsScreen;