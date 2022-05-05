import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import LargeHeaderGuest from "../../Components/LargeHeaderGuest";
import Footer from "../../Components/Footer";
import HomeEvent from "../../Components/HomeEvent";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../../BACKEND/Services/EventsServices";
import {useOutletContext} from "react-router";
import {useLocation} from "react-router-dom";

const HomePageScreen = () => {
    const [events, setEvents] = useState()

    useEffect(() => {
        async function fetch() {
            getEvents().then(r => {
                setEvents(r.reverse());
            })
        }
        fetch()
    }, []);

    if(!events) {
        return null
    }

    const homePageItems = [];

    for (let i = 0; i < 3; i++) {
        homePageItems.push(events[i]);
    }

    let header, footer;
    if (localStorage.getItem("user_logged_in")) {
        header = "";
        footer = "";
    } else {
        header = <LargeHeaderGuest/>;
        footer = <Footer/>;
    }
    return (
        <>
            <div className="row p-4">
                {header}
                <SearchBar/>
                <div className="d-flex flex-wrap justify-content-center mt-2">
                    {
                        events.map && homePageItems.map(event => {
                            return <HomeEvent event={event} page={"Home"}/>;
                        })
                    }
                </div>
            </div>
        </>

    );

};

export default HomePageScreen;