import React, {useEffect, useRef, useState} from 'react';
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
import {uploadFile} from "../BACKEND/Services/FileServices";
import {signUp} from "../BACKEND/Services/AuthServices";
import axios from "axios";
import FormInput from "./FormInput";
import {REACT_APP_BASE} from "../App";
import {useNavigate} from "react-router";

const Details = ({user}) => {
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [imageUploader, setImageUploader] = useState(false);
    const [image, setImage] = useState("");
    const [file, setFile] = useState()

    const navigate = useNavigate()
    const city = useRef();
    const state = useRef();
    const profile = useRef()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((p) => {
            setLat(p.coords.latitude)
            setLng(p.coords.longitude)
        })
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        let new_user = {
            ...user,
            city: city.current.value,
            state: state.current.value,
            geolocation: {
                lat: lat,
                lng: lng
            }
        }

        const data = new FormData()
        data.append("file", file,  user.username + ".jpeg")
        uploadFile(data).then(() => {
            new_user = {
                ...new_user,
                profile_picture: new_user.username + ".jpeg"
            }
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
                {imageUploader ?
                    <div className="d-flex flex-column align-items-center">
                        <img className="f-user-image mt-3 mb-3" src={image} alt="" style={{"objectFit": "cover"}} onClick={() => setImageUploader(false)}/>
                        <h5 className="f-small-regular">Click the image to pick a different one.</h5>
                    </div>
                    :
                <label htmlFor="f-profile-upload"
                       className="f-user-image-upload mt-3 shadow-none d-flex align-items-center justify-content-center">
                        Upload Profile
                        <input className="f-profile-upload"
                               ref={profile}
                               id="f-profile-upload"
                               type="file"
                               style={{"display": "none"}}
                               onChange={(e) => {
                                   setImage(URL.createObjectURL(e.target.files[0]))
                                   setFile(e.target.files[0])
                                   setImageUploader(true)
                               }
                               }
                        />

                </label>}
                <Spacer size={20}/>

                <FilledButton name={"Sign Up"} handleSubmit={handleSubmit}/>
            </div>
        </form>
    );

};

export default Details;