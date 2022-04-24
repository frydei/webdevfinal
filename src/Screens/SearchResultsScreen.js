import React, {useEffect, useState} from "react";
import tags from "../Data/tags.json";
import SearchEvent from "../Components/SearchEvent";
import {month_num} from "../Components/Complaints";
import ActionTag from "../Components/ActionTag";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../BACKEND/Actions/EventsActions";

const SearchResultsScreen = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events)
    const [searchEvent, setSearchEvent] = useState(events)
    useEffect(() => getEvents(dispatch), [])

    const [input, setInput] = useState();

    const date = new Date()

    const getDate = (e) => {
        return new Date(e.date)
    }

    const isTomorrow = (d) => {
        const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
        return d.getMonth() === tomorrow.getMonth() && d.getDate() === tomorrow.getDate() && d.getFullYear() === tomorrow.getFullYear();
    }

    const isToday = (d) => {
        return d.getMonth() === date.getMonth() && d.getDate() === date.getDate() && d.getFullYear() === date.getFullYear();
    }

    const isWeekend = (d) => {
        return d.getDay() === 6 ||  d.getDay() === 0;
    }

    const handleClick = (name) => {
       if (name === "Nearby") {
            setSearchEvent(events)
        } else if (name === "Tomorrow") {
            setSearchEvent(events.filter(
                e =>  isTomorrow(getDate(e))
            ))
        } else if (name === "Today") {
           setSearchEvent(events.filter(
               e =>  isToday(getDate(e))
           ))
       } else if (name === "Weekend") {
           setSearchEvent(events.filter(
               e =>  isWeekend(getDate(e))
           ))
       }

    }
    const isMatch = (e) => {
        return e.title.toLowerCase().includes(input.toString().toLowerCase())
            || e.desc.toLowerCase().includes(input.toString().toLowerCase())
            || e.location.toLowerCase().includes(input.toString().toLowerCase())
            || e.restrictions.toLowerCase().includes(input.toString().toLowerCase())
    }

    const searchHandlerChange = (value) => {
        setInput(value)
        setSearchEvent(events.filter(e => isMatch(e)))
        console.log(input)

    }

    const searchHandlerSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.search.value)
        setSearchEvent(events.filter(e => isMatch(e)))

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
                                   type="search"
                                   onChange={(e) => searchHandlerChange(e.target.value)}
                                   value={input}/>
                            <i className="fa-solid fa-magnifying-glass form-control-feedback pe-1"/>
                        </label>

                    </div>
                </form>
                <div className="d-flex justify-content-between flex-wrap align-items-center mt-3 mb-1 ms-1" style={{"width": "100%"}}>
                    {
                        tags.map(tag => {
                            return <ActionTag tag={tag} handleClick={handleClick}/>
                        })
                    }
                </div>
                <div className="f-event-grid container">
                    {
                        searchEvent.map && searchEvent.map(event => {
                            return <SearchEvent event={event}/>
                        })
                    }
                </div>

            </div>
        </>

    );
};

export default SearchResultsScreen;
