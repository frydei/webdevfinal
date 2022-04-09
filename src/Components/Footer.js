import React from "react";


const Footer = () => {
    return (
        <div className="f-footer d-flex align-items-start justify-content-between"
             style={{"paddingLeft": "350px", "paddingRight": "350px"}}>
            <div className="f-more-info">
                <h1 className="f-title-small" style={{"fontSize": "18px"}}>Frydei</h1>
                <ul className="list-group bg-transparent border-0">
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>More Information
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>About Us
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Contact Us
                    </li>
                    <h3 className="f-menu-item-title bg-transparent border-0 p-0 mt-2"
                        style={{"textAlign": "left"}}>Privacy Policy
                    </h3>
                    <h3 className="f-menu-item-title bg-transparent border-0 p-0"
                        style={{"textAlign": "left"}}>Help
                    </h3>
                    <h3 className="f-menu-item-title bg-transparent border-0 p-0 "
                        style={{"textAlign": "left"}}>Copyright Frydei
                    </h3>
                </ul>
            </div>


            <div className="d-flex flex-column align-items-start justify-content-start">
                <h3 className="f-medium-medium mb-2" style={{"textAlign": "left"}}>Connect With Us</h3>
                <div className="f-social-icons">
                    <i className="fa-brands fa-facebook f-social-icon"/>
                    <i className="fa-brands fa-instagram f-social-icon"/>
                    <i className="fa-brands fa-pinterest f-social-icon"/>
                </div>

            </div>


        </div>
    );
};

export default Footer;