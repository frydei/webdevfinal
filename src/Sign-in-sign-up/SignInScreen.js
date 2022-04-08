import React from 'react';

import SignIn from './sign-in.component';
// import SignUp from './sign-up.component';

import HeaderGuest from "../Components/HeaderGuest";


const SignInScreen = () => (
    <div className='sign-in-sign-up'>
        <HeaderGuest/>
        <SignIn/>
        {/*<SignUp/>*/}
    </div>
);

export default SignInScreen;