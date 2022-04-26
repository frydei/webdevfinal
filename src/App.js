//Libraries
import './Style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import SearchResultsScreen from "./Screens/SearchResultsScreen";
import ExploreEventsScreen from "./Screens/ExploreEventsScreen";
import CreateEventScreen from "./Screens/CreateEventScreen";
import ViewEventScreen from "./Screens/ViewEventScreen";
import RequestScreen from "./Screens/RequestsScreen";
import HomePageScreen from "./Homepage/HomePageScreen";
import SignInScreen from "./Sign-in-sign-up/SignInScreen";
import SignUpScreen from "./Sign-in-sign-up/SignUpScreen";
import PrivacyPolicyScreen from "./PrivacyPolicy/PrivacyPolicyScreen";
import ProfileScreen from "./Profile/ProfileScreen";
import Frydei from "./Components/Frydei";
import ComplaintsScreen from "./Screens/ComplaintsScreen";
import ChatScreen from "./Screens/ChatScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import PastEventDetailScreen from "./Screens/PastEventDetailScreen";
import AboutUs from "./Screens/AboutUs";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserByUsername} from "./BACKEND/Actions/UsersActions";
import DetailsScreen from "./Sign-in-sign-up/DetailsScreen";
import GuestHomePageScreen from "./Homepage/GuestHomePageScreen";

const search_event = {
    "title": "Amine - The Best Tour",
    "event_photo": "four.jpeg",
    "location": "Boston TD Garden",
    "date": {
        "day": 5,
        "month": "April"
    },
    "time": "6 PM",
    "cost": 32,
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
            <div className="container-fluid p-0">
                <Routes>
                    <Route path=""
                           element={<Navigate replace to="frydei"/>}/>
                    <Route path="sign-in"
                           exact={true}
                           element={<SignInScreen/>}/>
                    <Route path="sign-up"
                           exact={true}
                           element={<SignUpScreen/>}/>
                    <Route path="details"
                           exact={true}
                           element={<DetailsScreen/>}/>
                    <Route path="frydei"
                           element={<Frydei/>}>
                        <Route index element={<HomePageScreen/>}/>
                        <Route path="home"
                               extact={true}
                               element={<HomePageScreen logged_in={true}/>}/>
                        <Route path="profile"
                               exact={true}
                               element={<ProfileScreen/>}/>
                        <Route path="profile/:username"
                               exact={true}
                               element={<ProfileScreen/>}/>
                        <Route path="profile/pastevents/:eventid"
                               element={<PastEventDetailScreen/>}/>
                        <Route path="search"
                               exact={true}
                               element={<SearchResultsScreen logged_in={true}/>}/>
                        <Route path="privacy-policy"
                               exact={true}
                               element={<PrivacyPolicyScreen/>}/>
                        <Route path="about-us"
                               exact={true}
                               element={<AboutUs/>}/>
                        <Route path="explore"
                               exact={true}
                               element={<ExploreEventsScreen logged_in={true}/>}/>
                        <Route path="requests"
                               exact={true}
                               element={<RequestScreen logged_in={true}/>}/>
                        <Route path="create"
                               exact={true}
                               element={<CreateEventScreen/>}/>
                        <Route path="explore/:eventid"
                               element={<ViewEventScreen/>}/>
                        <Route path="profile/pastevents/:eventid/complaint"
                               exact={true}
                               element={<ComplaintsScreen/>}/>
                        <Route path="messages"
                               exact={true}
                               element={<ChatScreen/>}/>
                        <Route path="admin"
                               exact={true}
                               element={<DashboardScreen/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;


