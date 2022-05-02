import React from 'react';

import SignUp from './sign-up.component';

import HeaderGuest from "../../Components/HeaderGuest";
import Footer from "../Homepage/Footer";
import Details from "./details.component";
import {Link, useLocation} from "react-router-dom";


const DetailsScreen = () => {
    const location = useLocation()
    const user = location.state.user;
    return (
        <div className="p-4">
            <HeaderGuest/>
            <div className='row f-sign-in-sign-up d-flex align-items-center'
                 style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <div className="col d-flex align-items-center flex-column justify-content-center" style={{"width": "100%"}}>
                    <h3 className="f-form-header mb-5">Create an account</h3>
                    <Details user={user}/>

                    <h3 className="f-form-header mt-3"
                        style={{"fontSize": "13px"}}>
                <span style={{"fontWeight": "normal"}}>Already have an account?
                </span>
                        <Link to="/sign-in" className="f-link"> Log in</Link>
                    </h3>

                </div>
            </div>
        </div>

);
}

export default DetailsScreen;