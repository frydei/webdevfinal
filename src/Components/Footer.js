import React from "react";


const Footer = () => {
    return (
        <div className="f-footer d-flex flex-column align-items-center justify-content-between"

             style={{"paddingLeft": "250px", "paddingRight": "250px", "marginTop": "150px"}}>


            <div className="f-more-info d-flex align-items-start justify-content-between mb-3" style={{"width": "100%"}}>
                <ul className="list-group bg-transparent border-0">
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left", "fontSize": "14px", "fontWeight": "500"}}>Services
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Privacy Policy
                    </li>
                </ul>
                <ul className="list-group bg-transparent border-0">
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left", "fontSize": "14px", "fontWeight": "500"}}>About
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Company
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Team
                    </li>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Careers
                    </li>
                </ul>
                <ul className="list-group bg-transparent border-0" style={{"width": "350px"}}>
                    <h1 className="f-title-small" style={{"fontSize": "18px"}}>Frydei</h1>
                    <li className="list-group-item f-menu-item-title bg-transparent border-0 p-0 mb-2"
                        style={{"textAlign": "left"}}>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
                        ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget
                        velit pulvinar dictum vel in justo.
                    </li>
                </ul>
            </div>


            <div className="d-flex flex-column align-items-center justify-content-start">
                <h3 className="f-medium-medium mb-2" style={{"textAlign": "left"}}>Connect With Us</h3>
                <div className="f-social-icons">
                    <i className="fa-brands fa-facebook f-social-icon"/>
                    <i className="fa-brands fa-twitter f-social-icon"/>
                    <i className="fa-brands fa-snapchat f-social-icon"/>
                    <i className="fa-brands fa-instagram f-social-icon"/>

                </div>
                <h3 className="f-menu-item-title bg-transparent border-0 p-0 mt-2"
                    style={{"textAlign": "left"}}> Frydei © 2022
                </h3>

            </div>


        </div>
    );
};

export default Footer;