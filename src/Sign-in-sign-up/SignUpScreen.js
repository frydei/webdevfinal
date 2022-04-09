import React from 'react';

import SignUp from './sign-up.component';

import HeaderGuest from "../Components/HeaderGuest";
import Footer from "../Homepage/Footer";


const SignUpScreen = () => (
    <div className='sign-in-sign-up'>
        <HeaderGuest/>
        <SignUp/>
        <Footer/>
    </div>
);

export default SignUpScreen;