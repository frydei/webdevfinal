import React, {useEffect, useRef, useState} from "react";
import SearchEvent from "../Components/SearchEvent";
import {getEvents} from "../../BACKEND/Services/EventsServices";
import {getTMEvent} from "../../BACKEND/APIServices";
import {useNavigate, useParams} from "react-router";

const SearchResultsScreen = () => {
    const {query} = useParams();
    const iref = useRef()
    const [searchEvent, setSearchEvent] = useState([]);
    const navigate = useNavigate();

    const isMatch = (e, input) => {
        return e.title.toLowerCase().includes(input.toLowerCase())
            || (e.desc && e.desc.toLowerCase().includes(input.toLowerCase()))
            || e.location.toLowerCase().includes(input.toLowerCase());

    };
    useEffect(() => {
        let str = query || iref.current.value
        if (query) {
            async function fetch() {
                getTMEvent(str).then(r => {
                    let filtered_events = [];
                    for (const ev of r) {
                        if (!filtered_events.find(f => f.name === ev.name)) {
                            filtered_events.push(ev);
                        }
                    }
                    setSearchEvent(filtered_events);
                });
            }

            fetch().then(() => {
                getEvents().then((r) => {
                    for (const de of r) {
                        if (!searchEvent.find(fe => fe.name === de.title) && isMatch(de, str)) {
                            searchEvent.push(de);
                        }
                    }

                });
            });
        } else {
            getEvents().then(r =>
                setSearchEvent(r));
        }
    }, [query]);

    const [s_in, setS] = useState();
    const searchHandlerChange = (value) => {
        setS(value);
        setSearchEvent(searchEvent.filter(e => isMatch(e, value)));
    };

    const searchHandlerSubmit = (e) => {
        e.preventDefault();
        navigate(`/frydei/search/${s_in}`);
    };
    if (!searchEvent) {
        return null;
    }

    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>

                <form action="" name="search-form" onSubmit={(e) => searchHandlerSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="search-bar" className="d-flex align-items-center f-search-bar">
                            <input id="search-bar"
                                   className="form-control border-0 ps-1 shadow-none"
                                   name="search"
                                   type="text"
                                   ref={iref}
                                   onChange={(e) => searchHandlerChange(e.target.value)}
                                   />
                            <i className="fa-solid fa-magnifying-glass form-control-feedback pe-1"/>
                        </label>

                    </div>
                </form>
                <div className="f-search-event-grid">
                    {
                        searchEvent.map && searchEvent.map(event => {
                            return <SearchEvent event={event}/>;
                        })
                    }
                </div>

            </div>
        </>

    );
};

export default SearchResultsScreen;
