import React, {useRef} from 'react';


import {CustomButtonContainer, SignUpContainer, SignUpTitle} from "./sign-up.styles";
import FilledButton from "../Components/FilledButton";
import Spacer from "../Components/Spacer";
import {uploadFile} from "../BACKEND/Services/FileServices";
const Details = ({user}) => {
    const city = useRef();
    const state = useRef();
    const profile = useRef()


    const handleSubmit = (event) => {
        event.preventDefault()
       /* event.preventDefault();
        let new_user = {
            ...user,
            city: city.current.value,
            state: state.current.value
        }
        console.log(new_user)*/
        const data = new FormData()
        console.log(profile.current.files[0])
        data.append("file", profile.current.files[0])
        uploadFile(data).then(r => console.log(r))
        //console.log(data)

    };

    const handleChange = (event) => {

    };

    return (
        <form className="f-form d-flex align-items-center justify-content-center " onSubmit={handleSubmit}>
            <div className="f-form-content-sign d-flex flex-column align-items-center justify-content-center">
                <label htmlFor="f-profile-upload"
                       className="f-user-image-upload shadow-none d-flex align-items-center justify-content-center mt-3"
               >
                    Upload Profile
                    <input className="f-profile-upload"
                           ref={profile}
                           id="f-profile-upload"
                           type="file"
                           style={{"display": "none"}}/>
                </label>


                <Spacer size={24}/>

                <FilledButton name={"Sign Up"} handleSubmit={handleSubmit}/>
            </div>
        </form>
    );

};

export default Details;