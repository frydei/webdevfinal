//Libraries
import './Style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";
import tags from "./Data/tags.json";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HeaderGuest from "./FRONTEND/Components/HeaderGuest";
import HeaderUser from "./FRONTEND/Components/HeaderUser";
import Menu from "./FRONTEND/Components/Menu/Menu";
import UserIcon from "./FRONTEND/Components/UserIcon";
import LargeHeaderGuest from "./FRONTEND/Components/LargeHeaderGuest";
import LargeHeaderUser from "./FRONTEND/Components/LargeHeaderUser";
import Tag from "./FRONTEND/Components/Tag";
import SearchEvent from "./FRONTEND/Components/SearchEvent";
import ExploreEvent from "./FRONTEND/Components/ExploreEvent";
import event from "./Data/event.json";
import EventDetailGuest from "./FRONTEND/Components/EventDetailGuest";
import EventDetailUser from "./FRONTEND/Components/EventDetailUser";
import PastEventDetail from "./FRONTEND/Components/PastEventDetail";
import CreateEvent from "./FRONTEND/Components/CreateEvent";
import user from "./Data/user.json";
import SearchResultsScreen from "./FRONTEND/Screens/SearchResultsScreen";
import ExploreEventsScreen from "./FRONTEND/Screens/ExploreEventsScreen";
import CreateEventScreen from "./FRONTEND/Screens/CreateEventScreen";
import ViewEventScreen from "./FRONTEND/Screens/ViewEventScreen";
import RequestEvent from "./FRONTEND/Components/RequestEvent";
import RequestScreen from "./FRONTEND/Screens/RequestsScreen";
import UserDropdownMenu from "./FRONTEND/Components/Menu/UserDropdownMenu";
import Footer from "./FRONTEND/Components/Footer";
import HomePageScreen from "./FRONTEND/Screens/Homepage/HomePageScreen";
import SignInScreen from "./FRONTEND/Screens/Sign-in-sign-up/SignInScreen";
import SignUpScreen from "./FRONTEND/Screens/Sign-in-sign-up/SignUpScreen";
import PrivacyPolicyScreen from "./FRONTEND/Screens/PrivacyPolicy/PrivacyPolicyScreen";
import ProfileScreen from "./FRONTEND/Screens/Profile/ProfileScreen";

const search_event = {
    "title": "Amine - The Best Tour",
    "event_photo": "four.jpeg",
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


