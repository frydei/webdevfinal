import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import Footer from "./../Components/Footer";
import HomeEvent from "../Components/HomeEvent";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../BACKEND/Actions/EventsActions";
import {getCurrentUser} from "../BACKEND/Services/AuthServices";
import HeaderGuest from "../Components/HeaderGuest";
import HeaderUser from "../Components/HeaderUser";
import {useOutletContext} from "react-router";
import {useLocation} from "react-router-dom";

const GuestHomePageScreen = () => {
    const dispatch = useDispatch();

    useEffect(async () => {
        await getEvents(dispatch);
    }, []);

    const events = useSelector(state => state.events);

    const homePageItems = [];
    for (let i = 0; i < 3; i++) {
        homePageItems.push(events[i]);
    }

    return (
        <>
            <div className="p-4">
                <LargeHeaderGuest/>
                <SearchBar/>
                <div className="d-flex flex-wrap justify-content-center mt-2">
                    {
                        events.map && homePageItems.map(event => {
                            return <HomeEvent event={event} page={"Home"}/>;
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>

    );

};

export default GuestHomePageScreen;