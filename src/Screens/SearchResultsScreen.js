import React from "react";
import events from "../Data/events.json";
import tags from "../Data/tags.json";
import LargeHeaderUser from "../Components/LargeHeaderUser";
import user from "../Data/user.json";
import LargeHeaderGuest from "../Components/LargeHeaderGuest";
import Tag from "../Components/Tag";
import SearchEvent from "../Components/SearchEvent";
import Footer from "../Homepage/Footer";

const SearchResultsScreen = (param) => {
    return (
        <>
            <div style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>

                <form action="">
                    <div className="form-group">
                        <label htmlFor="search-bar" className="d-flex align-items-center f-search-bar">
                            <input id="search-bar" className="form-control border-0 ps-1" type="search"
                                   value="indie concert"/>
                            <i className="fa-solid fa-magnifying-glass form-control-feedback pe-1"/>
                        </label>

                    </div>
                </form>
                <div className="d-flex justify-content-between mt-3 mb-1 ms-1">
                    {
                        tags.map(tag => {
                            return <Tag tag={tag}/>
                        })
                    }
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    {
                        events.map(event => {
                            return <SearchEvent event={event}/>
                        })
                    }
                </div>

            </div>
        </>

    );
};

export default SearchResultsScreen;