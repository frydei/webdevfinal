
import React from "react";
import HeaderUser from "../Components/HeaderUser";
import ProfileComponent from "./profile-component";
import Footer from "../Homepage/Footer";
import ProfileNav from "./profileNav";

const ProfileScreen = () => (
    <div className='profile'>
        <ProfileComponent/>
        <ProfileNav/>

    </div>
);

export default ProfileScreen;