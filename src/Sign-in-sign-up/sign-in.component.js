import React, {useRef, useState} from 'react';

import {CustomButtonContainer, SignUpContainer} from './sign-up.styles';
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
import FormInput from "./FormInput";
import {getUserByCredentials} from "../BACKEND/Actions/UsersActions";
import {getCurrentUser, signIn} from "../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

const SignIn = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState();
    const [error_msg, setErrorMsg] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const creds = {
            username: usernameRef.current.value,
            password: passwordRef.current.value

        }
        signIn(creds).then(r => {
           if (!r) {
               setErrorMsg(true);
               formRef.current.reset()
           } else {
               navigate(`/frydei/profile/${r.username}`, {state: {from: "CURRENT"}})
           }
        })
    };


    return (
        <form onSubmit={handleSubmit} className="f-form d-flex  flex-column align-items-center justify-content-center"
              ref={formRef}
              style={{"width": "100%"}}>
            <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                <FormInput
                    name={"username"}
                    type={"text"}
                    ref={usernameRef}
                    placeholder={"Username"}
                    required/>

                <FormInput
                    name={"password"}
                    type={"password"}
                    ref={passwordRef}
                    // label='password'
                    placeholder={"Password"}
                    required
                />
                <Spacer size={24}/>
                <FilledButton name={"Log in"} handleSubmit={handleSubmit}/>
            </div>
            {error_msg ? <div className="f-invalid mb-1"> Please check your username and password and try again. </div> : null}

        </form>
    );
};

export default SignIn;