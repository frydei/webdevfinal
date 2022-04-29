import React, {useRef, useState} from 'react';

import {CustomButtonContainer, SignUpContainer} from './sign-up.styles';
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
import FormInput from "./FormInput";
import {getUserByCredentials} from "../BACKEND/Actions/UsersActions";
import {getCurrentUser, signIn, signInWithGoogle} from "../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import GoogleLogin from "react-google-login";

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
               localStorage.setItem("user_logged_in", "TRUE")
               navigate(`/frydei/profile/${r.username}`, {state: {from: "CURRENT"}})
           }
        })
    };

    const responseGoodGoogle = (response) => {

        console.log(response)
        const creds = {
            id_token: response.tokenId
        }
        // console.log("creds: ")
        // console.log(creds)

        signInWithGoogle(creds).then ( r => {
                                           if (r.state) {
                                               navigate(`/profile/${r.id_token}`, {state: {from: "CURRENT"}})
                                           } else {
                                               //new user
                                               navigate(`/sign-up-g`)
                                           }
                                       }
        )
    }

    const responseBadGoogle = (response) => {
        console.log(response)
    }


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
                    label='password'
                    placeholder={"Password"}
                    required
                />
                <Spacer size={24}/>
                <FilledButton name={"Log in"} handleSubmit={handleSubmit}/>
            </div>
            {error_msg ? <div className="f-invalid mb-1"> Please check your username and password and try again. </div> : null}
            <Spacer size={24}/>
            <GoogleLogin
                clientId="349790869284-jls9koectaa5ujhp40nchp8svu0co0k3.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoodGoogle}
                onFailure={responseBadGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </form>
    );
};

export default SignIn;