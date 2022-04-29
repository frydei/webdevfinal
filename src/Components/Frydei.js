//REACT AND ROUTER
import React, {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";

//COMPONENTS
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Footer from "../Components/Footer";
import {getCurrentUser} from "../BACKEND/Services/AuthServices";


const Frydei = () => {
    const [current_user, setCurrentUser] = useState([])
    const location = useLocation();
    //const user = useSelector((state) => state.users)
    useEffect(async () => {
        const user = await getCurrentUser();
        setCurrentUser(user)
    }, [])

    let header, logged_in;
    if (current_user._id !== undefined) {
        header = <HeaderUser user={current_user}/>

        logged_in = localStorage.getItem("user_logged_in",);

    } else {
        if (location.pathname === "/frydei" || location.pathname === "" ) {
            header = null
        } else {
            header = <HeaderGuest/>
        }
        logged_in = localStorage.getItem("user_logged_in");
    }

    return (
            <div>
                <div className="container-fluid p-4">
                    {header}
                    {<Outlet context={[logged_in, current_user, setCurrentUser]}/>}
                </div>
                <Footer/>
            </div>

    );

};

export default Frydei;