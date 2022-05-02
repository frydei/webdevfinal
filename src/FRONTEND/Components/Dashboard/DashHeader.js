import React from "react";
import NumberCard from "./NumberCard";

const DashHeader = ({data}) => {
    return (
        <div className="d-flex align-content-center justify-content-between p-0">
            {
                data.map(d => {
                    return <NumberCard data={d}/>
                })
            }
        </div>

    );
}
export default DashHeader;