//Libraries
import './style/css/main.css';
import "./Libraries/bootstrap/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import event from "./Data/event.json";
import user from "./Data/user.json";
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
import MenuHeader from "./Components/Menu/MenuHeader";
import ComplaintsScreen from "./Screens/ComplaintsScreen";
import ChatScreen from "./Screens/ChatScreen";
import DashboardScreen from "./Screens/DashboardScreen";

const search_event = {
    "title": "Amine - The Best Tour",
    "event_photo": "/images/four.jpeg",
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
                           element={<MenuHeader user={user}/>}/>
                    <Route path="frydei"
                           element={<Frydei logged_in={true}
                                            user={user}/>}>
                        <Route index element={<HomePageScreen/>}/>
                        <Route path="home"
                               extact={true}
                               element={<HomePageScreen/>}/>
                        <Route path="sign-in"
                               exact={true}
                               element={<SignInScreen />}/>
                        <Route path="sign-up"
                               exact={true}
                               element={<SignUpScreen />}/>
                        <Route path="profile"
                               exact={true}
                               element={<ProfileScreen user={user}/>}/>
                        <Route path="search"
                               exact={true}
                               element={<SearchResultsScreen logged_in={true}/>}/>
                        <Route path="privacy-policy"
                               exact={true}
                               element={<PrivacyPolicyScreen/>}/>
                        <Route path="explore"
                               exact={true}
                               element={<ExploreEventsScreen logged_in={true}/>}/>
                        <Route path="requests"
                               exact={true}
                               element={<RequestScreen logged_in={true}/>}/>
                        <Route path="create"
                               exact={true}
                               element={<CreateEventScreen user={user}/>}/>
                        <Route path="complaints"
                               exact={true}
                               element={<ComplaintsScreen user={user}
                                                          event={event}
                               />}/>
                        <Route path="messages"
                               exact={true}
                               element={<ChatScreen user={user}
                               />}/>
                        <Route path="admin"
                               exact={true}
                               element={<DashboardScreen/>}/>
                        <Route path="detail"
                               exact={true}
                               element={
                                   <ViewEventScreen
                                       event={event}
                                       logged_in={false}
                                   />}/>


                    </Route>


                </Routes>
            </div>
        </Router>
    );
}

export default App;


