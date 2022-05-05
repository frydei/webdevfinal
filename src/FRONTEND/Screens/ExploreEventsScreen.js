import React, {useEffect} from "react";
import ExploreEvent from "../Components/ExploreEvent";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../BACKEND/Actions/EventsActions";

const ExploreEventsScreen = () => {
    const dispatch = useDispatch()
    useEffect(async () => {
        await getEvents(dispatch);
    }, []);
    const events = useSelector(state => state.events)
    return (
        <>
            <div className="d-flex flex-column align-items-center " style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
                {
                    events.map && events.map(event => {
                        return <ExploreEvent event={event}/>
                    })
                }
            </div>
        </>
    );

}

export default ExploreEventsScreen;