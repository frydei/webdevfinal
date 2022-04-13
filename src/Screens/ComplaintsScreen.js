import React from "react";
import HeaderUser from "../Components/HeaderUser";
import user from "../Data/user.json";
import CreateEvent from "../Components/CreateEvent";
import Footer from "../Homepage/Footer";
import Complaints from "../Components/Complaints";
import {Link} from "react-router-dom";



const CreateEventScreen = (param) => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"paddingLeft": "350px", "paddingRight": "350px", "paddingTop": "25px"}}>
                <h3 className="f-form-header mb-1">Submit a complaint</h3>
                <h3 className="f-form-header" style={{"fontSize": "13px"}}><span style={{"fontWeight": "normal"}}>We take all violations very seriously.</span> </h3>

                <Complaints user={param.user}
                            event={param.event}
                />
            </div>
        </>

    )
}

export default CreateEventScreen;