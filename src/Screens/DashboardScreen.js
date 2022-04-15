import React from "react";
import DashHeader from "../Components/Dashboard/DashHeader";
import events from "../Data/events.json"
import EventCard from "../Components/Dashboard/EventCard";
import SearchEvent from "../Components/SearchEvent";

const data = [
    {
        "title": "Users",
        "size": 213,
    },
    {
        "title": "Hosts",
        "size": 120,
    },
    {
        "title": "Daily Views",
        "size": 322,
    },
    {
        "title": "Complaints",
        "size": 14,
    }
];

const DashboardScreen = () => {
    return (
        <div className="row" style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
            <DashHeader data={data}/>
            <div className="row p-0 d-flex justify-content-between" style={{"width": "100%"}}>
                <div className="col f-dash-box d-flex flex-wrap justify-content-start me-3">
                    Events
                    {
                        events.slice(0,3).map(e => {
                            return <SearchEvent event={e}/>
                        })
                    }

                </div>
                <div className="col f-dash-box d-flex flex-wrap justify-content-start me-3">
                    Needs Approval
                    {
                        events.slice(0,3).map(e => {
                            return <EventCard event={e}/>
                        })
                    }

                </div>

                <div className="col f-dash-box  d-flex flex-wrap justify-content-start">
                        Complaints
                </div>
            </div>
        </div>
    );
};
export default DashboardScreen;