//Libraries
import './Style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import SearchResultsScreen from "./FRONTEND/Screens/SearchResultsScreen";
import ExploreEventsScreen from "./FRONTEND/Screens/ExploreEventsScreen";
import CreateEventScreen from "./FRONTEND/Screens/CreateEventScreen";
import ViewEventScreen from "./FRONTEND/Screens/ViewEventScreen";
import HomePageScreen from "./FRONTEND/Screens/Homepage/HomePageScreen";
import SignInScreen from "./FRONTEND/Screens/Sign-in-sign-up/SignInScreen";
import SignUpScreen from "./FRONTEND/Screens/Sign-in-sign-up/SignUpScreen";
import PrivacyPolicyScreen from "./FRONTEND/Screens/PrivacyPolicy/PrivacyPolicyScreen";
import ProfileScreen from "./FRONTEND/Screens/Profile/ProfileScreen";
import Frydei from "./FRONTEND/Components/Frydei";
import ComplaintsScreen from "./FRONTEND/Screens/ComplaintsScreen";
import ChatScreen from "./FRONTEND/Screens/ChatScreen";
import DashboardScreen from "./FRONTEND/Screens/DashboardScreen";
import PastEventDetailScreen from "./FRONTEND/Screens/PastEventDetailScreen";
import AboutUs from "./FRONTEND/Screens/AboutUs";
import DetailsScreen from "./FRONTEND/Screens/Sign-in-sign-up/DetailsScreen";
import SignUpGScreen from "./FRONTEND/Screens/Sign-in-sign-up/SignUpGScreen";
import SelfProfileScreen from "./FRONTEND/Screens/Profile/SelfProfileScreen";
import EditProfile from "./FRONTEND/Screens/Profile/EditProfile";

export const REACT_APP_BASE = process.env.REACT_APP_SERVER_BASE || "http://localhost:4000"

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
            <div className="f-main container-fluid p-0">
                <Routes>
                    <Route path=""
                           element={<Navigate replace to="frydei"/>}/>
                    <Route path="sign-in"
                           exact={true}
                           element={<SignInScreen/>}/>
                    <Route path="sign-up"
                           exact={true}
                           element={<SignUpScreen/>}/>
                    <Route path="sign-up-g"
                           exact={true}
                           element={<SignUpGScreen/>}/>
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
                               element={<SelfProfileScreen/>}/>
                        <Route path="profile/edit"
                               exact={true}
                               element={<EditProfile/>}/>
                        <Route path="profile/:username"
                               exact={true}
                               element={<ProfileScreen/>}/>
                        <Route path="search"
                               exact={true}
                               element={<SearchResultsScreen logged_in={true}/>}/>
                        <Route path="search/:query"
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


