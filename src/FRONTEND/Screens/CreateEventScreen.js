import React from "react";
import CreateEvent from "../Components/CreateEvent";
import {useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router";

const CreateEventScreen = () => {
    const [logged_in, current_user, setCurrentUser] = useOutletContext()
    const navigate = useNavigate()
    if(!current_user.admin_access) {
        navigate("/frydei")
    }

    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <CreateEvent user={current_user}/>
            </div>
        </>

    )
}

export default CreateEventScreen;