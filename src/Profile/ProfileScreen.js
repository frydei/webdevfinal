
import React from "react";
import HeaderUser from "../Components/HeaderUser";
import ProfileComponent from "./profile-component";
import Footer from "../Homepage/Footer";

const ProfileScreen = () => (
    <div className='profile'>
        <HeaderUser/>
        <ProfileComponent/>
        <Footer/>
    </div>
);

export default ProfileScreen;