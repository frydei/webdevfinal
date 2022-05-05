//REACT AND ROUTER
import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

//COMPONENTS
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Footer from "./Footer";
import {getCurrentUser} from "../../BACKEND/Services/AuthServices";
import {useSelector} from "react-redux";


const Frydei = () => {
    const user = useSelector((state) => state.user)
    const location = useLocation();

    let header;

    if (user._id) {
        header = <HeaderUser user={user}/>;

    } else {
        if (location.pathname === "/frydei" || location.pathname === "") {
            header = null;
        } else {
            header = <HeaderGuest/>;
        }
    }

    return (
        <>
            <div className="container-fluid p-4">
                {header}
                <Outlet />
            </div>
            <Footer/>
        </>

    );

};

export default Frydei;