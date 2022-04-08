import React from 'react';

import Directory from './SearchBar';

import { HomePageContainer } from './homepage.styles';
import user from "../Data/user.json";
import SearchBar from "./SearchBar";
import events from "../Data/events.json";
import SearchEvent from "../Components/SearchEvent";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import Footer from "./Footer";

const HomePageScreen = (param) => {
    const homePageItems = [];

    for (let i = 0; i < 3; i++) {
        homePageItems.push(events[i]);
    }

    let header;
    if (param.logged_in) {
        header = <LargeHeaderUser user={user}/>;
    } else {
        header = <LargeHeaderGuest/>;
    }
    return (
        <>
            {header}
            <SearchBar/>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    homePageItems.map(event => {
                        return <SearchEvent event={event}/>
                    })
                }
            </div>

            <Footer/>
        </>
    );

}

export default HomePageScreen;