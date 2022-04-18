import React from "react";
import "./footer.css"
import {Link} from "react-router-dom";


const Footer =() => {
    return (
        <>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <Link to="/frydei/privacy">Privacy Policy</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li>
                                        <Link to="#">Company</Link>
                                    </li>
                                    <li><Link to="#">Team</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Frydei</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                                    tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                                    in justo.</p>
                            </div>
                            <div className="col item social"><Link to="#"><i
                                className="icon ion-social-facebook"></i></Link><Link to="#"><i
                                className="icon ion-social-twitter"></i></Link><Link to="#"><i
                                className="icon ion-social-snapchat"></i></Link><Link to="#"><i
                                className="icon ion-social-instagram"></i></Link></div>
                        </div>
                        <p className="copyright">Frydei © 2022</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;