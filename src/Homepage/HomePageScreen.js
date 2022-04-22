import React from 'react';
import user from "../Data/user.json";
import SearchBar from "./SearchBar";
import events from "../Data/events.json";
import SearchEvent from "../Components/SearchEvent";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import Footer from "./../Components/Footer";
import HomeEvent from "../Components/HomeEvent";

const HomePageScreen = ({logged_in}) => {
    const homePageItems = [];

    for (let i = 0; i < 3; i++) {
        homePageItems.push(events[i]);
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