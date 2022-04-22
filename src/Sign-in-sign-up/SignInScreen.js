import React from 'react';

import SignIn from './sign-in.component';

import HeaderGuest from "../Components/HeaderGuest";
import {Link} from "react-router-dom";


const SignInScreen = () => (
   <div className="p-4">
       <HeaderGuest/>
       <div className='row f-sign-in-sign-up d-flex align-items-center pt-5' style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
           <div className="col d-flex align-items-center flex-column justify-content-center" style={{"width": "100%"}}>
               <h3 className="f-form-header mb-5">Log in</h3>
               <SignIn/>
               <h3 className="f-form-header mt-3" style={{"fontSize": "13px"}}><span style={{"fontWeight": "normal"}}>New?</span> <Link to="/frydei/sign-up" className="f-link"> Sign up</Link></h3>

           </div>
           <div className="col f-event-img-container">
               <img src="/images/picn.jpeg" style={{"width": "100%", "objectFit": "cover", "borderRadius": "15px"}} alt=""/>

           </div>


       </div>
   </div>
);

export default SignInScreen;