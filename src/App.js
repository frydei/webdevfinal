//Libraries
import './style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";
import tags from "./Data/tags.json";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HeaderGuest from "./Components/HeaderGuest";
import HeaderUser from "./Components/HeaderUser";
import Menu from "./Components/Menu/Menu";
import UserIcon from "./Components/UserIcon";
import LargeHeaderGuest from "./Components/LargeHeaderGuest";
import LargeHeaderUser from "./Components/LargeHeaderUser";
import Tag from "./Components/Tag";
import SearchEvent from "./Components/SearchEvent";
import ExploreEvent from "./Components/ExploreEvent";
import event from "./Data/event.json";
import EventDetailGuest from "./Components/EventDetailGuest";
import EventDetailUser from "./Components/EventDetailUser";
import PastEventDetail from "./Components/PastEventDetail";
import CreateEvent from "./Components/CreateEvent";
import user from "./Data/user.json";
import SearchResultsScreen from "./Screens/SearchResultsScreen";
import ExploreEventsScreen from "./Screens/ExploreEventsScreen";
import CreateEventScreen from "./Screens/CreateEventScreen";
import ViewEventScreen from "./Screens/ViewEventScreen";

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
        <Router>
            <div className="container-fluid">
                <Routes>
                    <Route path="/frydei/search"
                           exact={true}
                           element={<SearchResultsScreen logged_in={true}/>}/>
                    <Route path="/frydei/explore"
                           exact={true}
                           element={<ExploreEventsScreen/>}/>
                    <Route path="/frydei/create"
                           exact={true}
                           element={<CreateEventScreen user={user}/>}/>
                    <Route path="/frydei/detail"
                           exact={true}
                           element={
                               <ViewEventScreen
                                   event={event}
                                   logged_in={true}
                               />}/>
                </Routes>
                {//<SearchResultsScreen logged_in={true}/>

                    /*<HeaderGuest/>
            <HeaderUser/>
            <LargeHeaderGuest/>
            <LargeHeaderUser/>
            <UserIcon user={search_event.hosts[0]}/>
            <Menu/>
            <Tag tag={tag}/>
            <SearchEvent event={search_event}/>
            <ExploreEvent event={search_event}/>
            <EventDetailGuest event={event}/>
            <EventDetailUser event={event}/>
            <PastEventDetail event={event}/>
            <CreateEvent user={user}/>*/
                }
            </div>
        </Router>
    );
}

export default App;
