import React from "react";
import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import CreateEvent from "../Components/CreateEvent";
import Footer from "../Homepage/Footer";



const CreateEventScreen = () => {
    return (
        <>
            <HeaderUser user={user}/>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <CreateEvent user={user}/>
            </div>
            <Footer/>
        </>

    )
}

export default CreateEventScreen;