import React from "react";
import CreateEvent from "../Components/CreateEvent";
import {useSelector} from "react-redux";

const CreateEventScreen = () => {
    const user = useSelector(state => state.users[0])
    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <CreateEvent user={user}/>
            </div>
        </>

    )
}

export default CreateEventScreen;