import React, {useRef, useState} from 'react';
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
import {uploadFile} from "../BACKEND/Services/FileServices";
import {signUp} from "../BACKEND/Services/AuthServices";
import axios from "axios";
import FormInput from "./FormInput";
import {REACT_APP_BASE} from "../App";
import {useNavigate} from "react-router";

const Details = ({user}) => {
    const navigate = useNavigate()
    const city = useRef();
    const state = useRef();
    const profile = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()
        let new_user = {
            ...user,
            city: city.current.value,
            state: state.current.value
        }
        const data = new FormData()
        data.append("file", profile.current.files[0],  user.username + ".jpeg")
        uploadFile(data).then(() => {
            signUp(new_user).then(() => {
                localStorage.setItem("user_logged_in", "TRUE")
                navigate(`/frydei/profile/${new_user.username}`, {state: {from: "CURRENT"}})
            })
        })

    };

    return (
        <form className="f-form d-flex align-items-center justify-content-center " onSubmit={handleSubmit}>
            <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                <FormInput
                    type={"text"}
                    name={"city"}
                    placeholder={"City"}

                    ref={city}
                />
                <FormInput
                    type={"text"}
                    name={"state"}
                    ref={state}
                    placeholder={"State"}
                />
                <label htmlFor="f-profile-upload"
                       className="f-user-image-upload shadow-none d-flex align-items-center justify-content-center "
                >
                    {profile.current ? "Upload Picture" : user.username + ".jpeg"}
                    <input className="f-profile-upload"
                           ref={profile}
                           id="f-profile-upload"
                           type="file"
                           style={{"display": "none"}}
                    />
                </label>
                <Spacer size={24}/>

                <FilledButton name={"Sign Up"} handleSubmit={handleSubmit}/>
            </div>
        </form>
    );

};

export default Details;