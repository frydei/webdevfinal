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
import RequestEvent from "./Components/RequestEvent";
import RequestScreen from "./Screens/RequestsScreen";
import UserDropdownMenu from "./Components/Menu/UserDropdownMenu";
import Footer from "./Homepage/Footer";
import HomePageScreen from "./Homepage/HomePageScreen";
import SignInScreen from "./Sign-in-sign-up/SignInScreen";
import SignUpScreen from "./Sign-in-sign-up/SignUpScreen";
import PrivacyPolicyScreen from "./PrivacyPolicy/PrivacyPolicyScreen";
import ProfileScreen from "./Profile/ProfileScreen";

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
            <div className="container-fluid p-3">
                <Routes>
                    <Route path="/"
                           exavt={true}
                           element={<Footer/>}
                    />
                    <Route path="/frydei/home"
                           exact={true}

                           element={<HomePageScreen/>}/>
                    <Route path="/frydei/sign-in"
                           exact={true}
                           element={<SignInScreen/>}/>
                    <Route path="/frydei/sign-up"
                           exact={true}
                           element={<SignUpScreen/>}/>
                    <Route path="/frydei/profile"
                           exact={true}
                           element={<ProfileScreen/>}/>
                    <Route path="/frydei/search"
                           exact={true}
                           element={<SearchResultsScreen logged_in={true}/>}/>
                    <Route path="/frydei/privacy-policy"
                           exact={true}
                           element={<PrivacyPolicyScreen/>}/>
                    <Route path="/frydei/explore"
                           exact={true}
                           element={<ExploreEventsScreen logged_in={true}
                           />}/>
                    <Route path="/frydei/requests"
                           exact={true}
                           element={<RequestScreen logged_in={true}/>}/>
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
            </div>
        </Router>
    );
}

export default App;

                {/*
              <SearchResultsScreen logged_in={true}/>

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
            <EventDetailUser event={event}/>
            <PastEventDetail event={event}/>
            <CreateEvent user={user}/>

            </div>*/  }


