import React from "react";
import "./footer.css"


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
                                    <li><a href="/frydei/privacy-policy">Privacy Policy</a></li>

                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Frydei</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                                    tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                                    in justo.</p>
                            </div>
                            <div className="col item social"><a href="#"><i
                                className="icon ion-social-facebook"></i></a><a href="#"><i
                                className="icon ion-social-twitter"></i></a><a href="#"><i
                                className="icon ion-social-snapchat"></i></a><a href="#"><i
                                className="icon ion-social-instagram"></i></a></div>
                        </div>
                        <p className="copyright">Frydei © 2022</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;