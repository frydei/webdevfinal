import React from "react";


const SearchBar =() => {
    return (
        <div className="d-flex align-items-center flex-column "
            style={{"paddingLeft": "400px", "paddingRight": "400px", "paddingTop": "25px"}}>
            <form action="" style={{"width": "100%"}} className="mb-5 f-form-home">
                <div className="form-group">
                    <label htmlFor="search-bar" className="d-flex align-items-center f-search-bar-home">
                        <input id="search-bar" className="form-control border-0" type="search"
                               placeholder="What are you in the mood for?"/>
                        <i className="fa-solid fa-magnifying-glass form-control-feedback pe-1"/>
                    </label>

                </div>
            </form>
            <div className={"f-search-note"}><h3 className="f-medium-medium" style={{"fontSize":"20px"}}>Events happening near you</h3></div>
        </div>
    )
}

export default SearchBar


// const searchBar = document.getElementById('searchBar');
//
// searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value;
// });

