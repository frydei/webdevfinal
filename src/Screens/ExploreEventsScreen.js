import events from "../Data/events.json"
import React from "react";
import ExploreEvent from "../Components/ExploreEvent";

const ExploreEventsScreen = (param) => {

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