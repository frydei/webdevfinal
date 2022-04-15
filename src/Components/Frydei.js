import React from "react";
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer";
import MenuHeader from "./Menu/MenuHeader";

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