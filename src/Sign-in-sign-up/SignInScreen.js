import React from 'react';

import SignIn from './sign-in.component';
// import SignUp from './sign-up.component';

import HeaderGuest from "../Components/HeaderGuest";
import Footer from "../home-page/Footer";


const SignInScreen = () => (
    <div className='sign-in-sign-up'>
        <HeaderGuest/>
        <SignIn/>
        <Footer/>
    </div>
);

export default SignInScreen;