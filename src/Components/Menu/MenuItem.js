import React from "react";
import {Link} from "react-router-dom";

const MenuItem = (param) => {
    const link = param.item.title.toLowerCase();
    return(
        <Link to={`/frydei/${link.split(" ")[0]}`} className="f-menu-link">
            <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-2">
                <h3 className="f-menu-item-title mb-0 pe-3">{param.item.title}</h3>
                <i className={`${param.item.icon} f-icon` }/>
            </li>
        </Link>
    );
}

export default MenuItem;