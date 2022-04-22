import React from "react";
import DashHeader from "../Components/Dashboard/DashHeader";
import events from "../Data/events.json"
import complaints from "../Data/complaints.json"
import EventCard from "../Components/Dashboard/EventCard";
import SearchEvent from "../Components/SearchEvent";
import ComplaintCard from "../Components/Dashboard/ComplaintCard";

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
    console.log(complaints)
    return (
        <div className="f-dash row d-flex flex-column align-content-center justify-content-center" style={{"paddingLeft": "150px", "paddingRight": "150px", "paddingTop": "25px"}}>
            <DashHeader data={data}/>
            <div className="row p-0 d-flex justify-content-evenly mt-4" style={{"width": "100%"}}>
                <div className="col f-dash-box justify-content-start me-3">
                    <h3>Events</h3>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            events.slice(0,3).map(e => {
                                return <SearchEvent event={e}/>
                            })
                        }
                    </div>

                </div>
                <div className="col f-dash-box justify-content-start me-3">
                    <h3>Needs Approval</h3>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                        events.slice(0,3).map(e => {
                            return <EventCard event={e}/>
                        })
                    }
                    </div>

                </div>

                <div className="col f-dash-box  justify-content-start">
                        <h3>Recent Complaints</h3>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            complaints.map(c => {
                                return <ComplaintCard complaint={c}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardScreen;