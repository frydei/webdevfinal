import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import Footer from "./../Components/Footer";
import HomeEvent from "../Components/HomeEvent";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../BACKEND/Actions/EventsActions";

const HomePageScreen = ({logged_in}) => {
    const [test, setTest] = useState([])
    const db_events = useSelector(state => state.events)
    const dispatch = useDispatch()
    useEffect(() => getEvents(dispatch), [])

    const homePageItems = [];

    for (let i = 0; i < 3; i++) {
        homePageItems.push(db_events[i]);
    }

    let header, footer;
    if (logged_in) {
        header = ""
        footer = ""
    } else {
        header = <LargeHeaderGuest/>;
        footer = <Footer/>
    }
    return (
        <>
            <div className="p-4">
                {header}
                <SearchBar/>
                <div className="d-flex flex-wrap justify-content-center mt-2">
                    {
                        homePageItems.map(event => {
                            return <HomeEvent event={event} page={"Home"}/>;
                        })
                    }
                </div>
            </div>
            {footer}</>

    );

};

export default HomePageScreen;