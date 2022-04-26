import React from "react";
import PastEventDetail from "../Components/PastEventDetail";
import {useOutletContext} from "react-router";


const PastEventDetailScreen = ({event}) => {
    const [logged_in, current_user] = useOutletContext()
    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <PastEventDetail event={event}/>
            </div>
        </>

    )
}

export default PastEventDetailScreen;