//REACT AND ROUTER
import React from "react";
import {Outlet} from "react-router-dom";

//REDUX AND REDUCERS
import {legacy_createStore as createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import UsersReducer from "../BACKEND/Redux/Reducers/UsersReducer";
import EventsReducer from "../BACKEND/Redux/Reducers/EventsReducer";
import ChatsReducer from "../BACKEND/Redux/Reducers/ChatsReducer";
import ComplaintReducer from "../BACKEND/Redux/Reducers/ComplaintReducer";

//COMPONENTS
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Footer from "../Components/Footer";

export const reducers = combineReducers({
    chats: ChatsReducer,
    events: EventsReducer,
    complaint: ComplaintReducer,
    users: UsersReducer
})

export const store = createStore(reducers)


const Frydei = (param) => {
    let header;

    if (param.logged_in === true) {
        header = <HeaderUser user={param.user}/>;
    } else if (param.logged_in === false) {
        header = <HeaderGuest/>;
    }

    return (
        <Provider store={store}>
            <div>
                <div className="container-fluid p-4">
                    {header}
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </Provider>

    );

};

export default Frydei;