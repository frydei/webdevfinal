//REACT AND ROUTER
import React from "react";
import {Outlet} from "react-router-dom";

//COMPONENTS
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Footer from "../Components/Footer";


const Frydei = (param) => {
    let header;

    if (param.logged_in === true) {
        header = <HeaderUser user={param.user}/>;
    } else if (param.logged_in === false) {
        header = <HeaderGuest/>;
    }

    return (
            <div>
                <div className="container-fluid p-4">
                    {header}
                    <Outlet/>
                </div>
                <Footer/>
            </div>

    );

};

export default Frydei;