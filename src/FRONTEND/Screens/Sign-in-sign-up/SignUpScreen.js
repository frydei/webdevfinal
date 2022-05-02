import React from 'react';

import SignUp from './sign-up.component';

import HeaderGuest from "../../Components/HeaderGuest";
import {Link} from "react-router-dom";
import Footer from "../../Components/Footer";


const SignUpScreen = () => (
    <div className="p-4">
        <HeaderGuest/>
        <div className='row f-sign-in-sign-up d-flex align-items-center'
             style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            <div className="col d-flex align-items-center flex-column justify-content-center" style={{"width": "100%"}}>
                <h3 className="f-form-header mb-5">Create an account</h3>
                <SignUp/>

                <h3 className="f-form-header mt-3"
                    style={{"fontSize": "13px"}}>
                <span style={{"fontWeight": "normal"}}>Already have an account?
                </span>
                    <Link to="/sign-in" className="f-link"> Log in</Link>
                </h3>

            </div>
        </div>
        <Footer/>
    </div>
);

export default SignUpScreen;