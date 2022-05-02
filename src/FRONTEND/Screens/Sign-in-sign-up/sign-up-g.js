import React, {useRef, useState} from 'react';


import {CustomButtonContainer, SignUpContainer, SignUpTitle} from "./sign-up.styles";
import FilledButton from "../../Components/FilledButton";
import Spacer from "../../Components/Spacer";
import {useNavigate} from "react-router";
import FormInput from "./FormInput";
import {getUserByUsername} from "../../../BACKEND/Actions/UsersActions";
import {useDispatch} from "react-redux";
import HeaderGuest from "../../Components/HeaderGuest";
import SignUp from "./sign-up.component";
import {Link} from "react-router-dom";
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
const SignUpG = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [error_msg, setErrorMsg] = useState(false);
    const [content, setContent] = useState("");

    const email = useRef();
    const form = useRef()
    const username = useRef();
    const first_name = useRef();
    const last_name = useRef();


    const handleContinue = (e) => {
        e.preventDefault();
        let check_un;
        getUserByUsername(dispatch, username.current.value).then(r => {
            check_un = r;
        })
        console.log(check_un)
        if (check_un) {
            setContent("Please try a different username.")
            setErrorMsg(true)
            form.current.reset()
        } else {
            let user = {
                username: username.current.value,
                first_name: first_name.current.value,
                last_name: last_name.current.value,
                password: "",
                email: email.current.value,
            }
            navigate("/details", {state: {user: user}})
        }
    };


    return (
        <form className="f-form d-flex align-items-center justify-content-center " ref={form} onSubmit={handleContinue}>
            <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                <FormInput
                    type={"text"}
                    name={"firstName"}
                    placeholder={"First Name"}

                    ref={first_name}
                />
                <FormInput
                    type={"text"}
                    name={"lastName"}
                    ref={last_name}
                    placeholder={"Last Name"}
                />
                <FormInput
                    type={"text"}
                    name={"username"}
                    ref={username}
                    placeholder={"Username"}

                />
                <FormInput
                    type={"email"}
                    name={"email"}
                    ref={email}
                    placeholder={"Email"}

                />

                <Spacer size={24}/>

                <FilledButton name={"Continue"} handleSubmit={handleContinue}/>
            </div>
            {error_msg ? <div className="f-invalid mb-1"> {content} </div> : null}

        </form>
    );

};

export default SignUpG;