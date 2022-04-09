import user from "../Data/user.json";
import React from "react";
import HeaderUser from "../Components/HeaderUser";
import HeaderGuest from "../Components/HeaderGuest";
import Footer from "../Homepage/Footer";
import "./privacy-policy.css";

const PrivacyPolicyScreen = (param) => {
    let header;
    if (param.logged_in) {
        header = <HeaderUser user={user}/>;
    } else {
        header = <HeaderGuest/>;
    }

    return (
        <>
            {header}
            <div className="f-privacy-policy">
                <p><br/></p>
                <h2><strong>Privacy Policy for My Website</strong></h2>
                <p><br/></p>
                <p>My Website one of our main priorities is the privacy of our visitors. This
                    Privacy Policy document contains types of information that is collected and
                    recorded by My Website and how we use it.</p>
                <p><br/></p>
                <p>If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us.</p>

                <p><br/></p>
                <p><strong>Information we collect</strong></p>
                <p>The personal information that you are asked to provide, and the reasons why you
                    are asked to provide it, will be made clear to you at the point we ask you to
                    provide your personal information.</p>
                <p><br/></p>
                <p>When you register for an Account, we may ask for your contact information,
                    including items such as name, company name, address, email address, and
                    telephone number.</p>
                <p><br/></p>
                <p><strong>How we use your information</strong></p>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners,
                        including for customer service, to provide you with updates and other
                        information relating to the website, and for marketing and promotional
                        purposes
                    </li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                    <li>Log Files</li>
                </ul>
                <p>My Website follows a standard procedure of using log files. These files log
                    visitors when they visit websites. All hosting companies do this and a part of
                    hosting services' analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                    date and time stamp, referring/exit pages, and possibly the number of clicks.
                    These are not linked to any information that is personally identifiable. The
                    purpose of the information is for analyzing trends, administering the site,
                    tracking users' movement on the website, and gathering demographic
                    information.</p>
                <p><br/></p>
                <p><strong>Cookies and Web Beacons</strong></p>
                <p>Like any other website, My Website uses "cookies". These cookies are used to
                    store information including visitors' preferences, and the pages on the website
                    that the visitor accessed or visited. The information is used to optimize the
                    users' experience by customizing our web page content based on visitors' browser
                    type and/or other information.</p>
                <p>Note that My Website has no access to or control over these cookies that are used
                    by third-party advertisers.</p>
                <p><br/></p>

                <p><strong>CCPA Privacy Policy (Do Not Sell My Personal Information)</strong></p>
                <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                <ul>
                    <li>Request that a business that collects a consumer's personal data disclose
                        the categories and specific pieces of personal data that a business has
                        collected about consumers.
                    </li>
                    <li>Request that a business delete any personal data about the consumer that a
                        business has collected.
                    </li>
                    <li>Request that a business that sells a consumer's personal data, not sell the
                        consumer's personal data.
                    </li>
                </ul>
                <p>If you make a request, we have one month to respond to you. If you would like to
                    exercise any of these rights, please contact us.</p>
                <p><br/></p>

                <p><strong>Questions</strong></p>
                <p>If you have any questions about this Privacy Policy, please contact us.</p>
            </div>
            <Footer/>
        </>
    )
}

export default PrivacyPolicyScreen