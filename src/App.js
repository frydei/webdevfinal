//Libraries
import './style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";

import HeaderGuest from "./Components/HeaderGuest";
import HeaderUser from "./Components/HeaderUser";
import Menu from "./Components/Menu/Menu";
import UserIcon from "./Components/UserIcon";
import LargeHeaderGuest from "./Components/LargeHeaderGuest";
import LargeHeaderUser from "./Components/LargeHeaderUser";
import Tag from "./Components/Tag";
import SearchEvent from "./Components/SearchEvent";
import ExploreEvent from "./Components/ExploreEvent";
import event from "./Data/event.json"
import EventDetailGuest from "./Components/EventDetailGuest";

const tag = {
    name: "More",
    color: "grey"
};
const search_event = {
    "title": "Amine - The Best Tour",
    "event_photo": "/images/four.jpeg",
    "location": "Boston TD Garden",
    "date": {
        "day": 5,
        "month": "April"
    },
    "time": "6 PM",
    "cost": 31,
    "hosts": [{
        "first_name": "Julie",
        "last_name": "Harris",
        "profile_picture": "anga.jpeg"
    }],
    "attendees": 5
};

function App() {
    return (
        <div className="container-fluid">
            <HeaderGuest/>
            <HeaderUser/>
            <LargeHeaderGuest/>
            <LargeHeaderUser/>
            <UserIcon user={search_event.hosts[0]}/>
            <Menu/>
            <Tag tag={tag}/>
            <SearchEvent event={search_event}/>
            <ExploreEvent event={search_event}/>
            <EventDetailGuest event={event}/>
        </div>
    );
}

export default App;
