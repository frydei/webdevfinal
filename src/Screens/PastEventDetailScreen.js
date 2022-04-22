import React from "react";
import PastEventDetail from "../Components/PastEventDetail";


const PastEventDetailScreen = ({event}) => {
    return (
        <>
            <div style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
                <PastEventDetail event={event}/>
            </div>
        </>

    )
}

export default PastEventDetailScreen;