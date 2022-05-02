import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {searchByString} from "../../../BACKEND/APIServices";
import {useNavigate} from "react-router";


const SearchBar =() => {
    const search = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate(`/frydei/search/${search.current.value}`)

    }


    return (
        <div className="col d-flex align-items-center flex-column mt-5"
            style={{"paddingLeft": "150px", "paddingRight": "150px", "paddingTop": "25px", "width": "100%"}}>
            <form action="" style={{"width": "100%"}} className="mb-5 mt-5 f-form-home" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group d-flex justify-content-center mt-5" style={{"width": "100%"}}>
                    <label htmlFor="search-bar" className="d-flex align-items-center justify-content-center f-search-bar-home"
                    style={{"width": "90%"}}>
                        <input id="search-bar"
                               className="form-control border-0 ps-2 shadow-none"
                               type="text"
                               placeholder="What are you in the mood for?"
                               ref={search}
                               onSubmit={(e) => handleSubmit(e)}
                               style={{"width": "100%"}}/>
                        <Link to="search" className="f-link"><i className="fa-solid fa-magnifying-glass form-control-feedback pe-2" /></Link>
                    </label>

                </div>
            </form>
            <div className={"f-search-note"}><h3 className="f-medium-medium mt-4 mb-5" style={{"fontSize":"20px"}}>Upcoming Events</h3></div>
        </div>
    )
}

export default SearchBar

