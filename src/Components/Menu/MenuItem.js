import React from "react";

const MenuItem = (param) => {
    return(
        <li className="list-group-item d-flex align-items-center justify-content-end f-menu-item p-0 mb-3">
            <h3 className="f-menu-item-title mb-0 pe-2">{param.item.title}</h3>
            <i className={`${param.item.icon} f-icon` }/>

        </li>

    );
}

export default MenuItem;