import React from "react";
import {Link} from "react-router-dom";


const SearchBar =() => {
    return (
        <div className="d-flex align-items-center flex-column mt-5"
            style={{"paddingLeft": "300px", "paddingRight": "300px", "paddingTop": "25px", "width": "100%"}}>
            <form action="" style={{"width": "100%"}} className="mb-5 mt-5 f-form-home">
                <div className="form-group d-flex justify-content-center mt-5" style={{"width": "100%"}}>
                    <label htmlFor="search-bar" className="d-flex align-items-center justify-content-center f-search-bar-home"
                    style={{"width": "90%"}}>
                        <input id="search-bar" className="form-control border-0 ps-2 shadow-none" type="search"
                               placeholder="What are you in the mood for?"
                               style={{"width": "100%"}}/>
                        <Link to="search" className="f-link"><i className="fa-solid fa-magnifying-glass form-control-feedback pe-2" /></Link>
                    </label>

                </div>
            </form>
            <div className={"f-search-note"}><h3 className="f-medium-medium mt-4" style={{"fontSize":"20px"}}>Events happening near you</h3></div>
        </div>
    )
}

export default SearchBar

