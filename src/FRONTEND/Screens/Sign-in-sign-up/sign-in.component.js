import React, {useEffect, useRef, useState} from 'react';

import FilledButton from "../../Components/FilledButton";
import Spacer from "../../Components/Spacer";
import FormInput from "./FormInput";
import {updateUser} from "../../../BACKEND/Actions/UsersActions";
import {signIn, signInWithGoogle} from "../../../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import GoogleLogin from "react-google-login";

const SignIn = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error_msg, setErrorMsg] = useState(false);

    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((p) => {
            setLat(p.coords.latitude)
            setLng(p.coords.longitude)
        })
    })


    const handleSubmit = async (event) => {
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
               r = {
                   ...r,
                   password: creds.password,
                   geolocation: {
                       ...r.geolocation,
                       lat: lat,
                       lng: lng
                   }
               }
               updateUser(dispatch, r)

               dispatch({
                   type: "UPDATE_USER",
                   user: r
               })
               localStorage.setItem("user_logged_in", "TRUE")
               navigate("/frydei/profile/")
           }
        }).catch((err) => {
            if(err.response.status === 403) {
                setErrorMsg(true);
                formRef.current.reset()
            }
        })
    };

    const responseGoodGoogle = (response) => {
        const creds = {
            id_token: response.tokenId
        }

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
            <Spacer size={12}/>
            <h3 className="f-form-header mt-3" style={{"fontSize": "13px"}}>Or</h3>
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