//REACT AND ROUTER
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

//COMPONENTS
import HeaderUser from "./HeaderUser";
import HeaderGuest from "./HeaderGuest";
import Footer from "../Components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {getUserByUsername, getUsers} from "../BACKEND/Actions/UsersActions";


const Frydei = ({logged_in}) => {
    const [current_user, setCurrentUser] = useState([])
    const dispatch = useDispatch()
    const user = useSelector((state) => state.users)
    useEffect(() =>
        getUserByUsername(dispatch, "jmoore").then(r => setCurrentUser(r)), [])
    console.log("FRYDEI___" + current_user.first_name)
    return (
            <div>
                <div className="container-fluid p-4">
                    {logged_in ? current_user && <HeaderUser user={current_user}/> : <HeaderGuest/>}
                    {user._id === undefined ? null : <Outlet/>}
                </div>
                <Footer/>
            </div>

    );

};

export default Frydei;