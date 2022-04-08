import React from "react";


const SearchBar =() => {
    return (
        <div style={{"paddingLeft": "200px", "paddingRight": "200px", "paddingTop": "25px"}}>
            <form action="">
                <div className="form-group">
                    <label htmlFor="search-bar" className="d-flex align-items-center f-search-bar">
                        <input id="search-bar" className="form-control border-0 ps-1" type="search"
                               placeholder="What are you in the mood for..."/>
                        <i className="fa-solid fa-magnifying-glass form-control-feedback pe-1"/>
                    </label>

                </div>
            </form>
            <div className={"f-search-note"}>Events happening near you</div>
        </div>
    )
}

export default SearchBar


// const searchBar = document.getElementById('searchBar');
//
// searchBar.addEventListener("keyup", e => {
//     const searchString = e.target.value;
// });

