import React, {useEffect, useState} from 'react'
import SelfProfileComponent from "./SelfProfileComponent";
import {useNavigate, useOutletContext, useParams} from "react-router";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {getUserByUsername} from "../BACKEND/Actions/UsersActions";
import FilledButton from "../Components/FilledButton";

const EditProfile = ({ formValues, setFormValues }) => {
    // const { first_name, last_name, username, email, biography, location } = formValues
    const updateFormValue = (e) => {
        setFormValues({ ...formValues, ...{ [e.target._id]: e.target.value } })
    }
    const {first_name, last_name, username, email, biography} = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const [logged_in, current_user, setCurrentUser] = useOutletContext()

    const [user, setUser] = useState(current_user);

    useEffect(async () => {
        if (location.state.user !== "CURRENT") {
            const url_user = await getUserByUsername(dispatch, username);
            setUser(url_user);
        }
    }, []);
    console.log(user)
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [error_msg, setErrorMsg] = useState(false);
    const handleSaveUpdates = (e) => {
        e.preventDefault();
        let check_un;
        getUserByUsername(dispatch, username.current.value).then(r => {
            check_un = r;
        })
        console.log(check_un)
        if (check_un) {
            setContent("Please try a different username.")
            setErrorMsg(true)
        }
            navigate("/profile", {state: {user: user}})
        }

    return (
        <div
            id="wd-profile-edit"
        >
            {user._id === undefined ? null : <SelfProfileComponent user={user}/>}
            <div className='profile-edit-field'>
                <label htmlFor="username">Username</label>
                <textarea
                    id="username"
                    value={username}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="firstname">First Name</label>
                <textarea
                    id="firstname"
                    value={first_name}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="lasttname">Last Name</label>
                <textarea
                    id="last_name"
                    value={last_name}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="email">Email</label>
                <textarea
                    id="email"
                    value={email}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="bio">Biography</label>
                <textarea
                    id="bio"
                    value={biography}
                    onChange={updateFormValue}
                    rows={3}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="location">Location</label>
                <textarea
                    id="location"
                    value={location}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <FilledButton name={"Save Updates"} handleSubmit={handleSaveUpdates}/>

        </div>
    )
}

export default EditProfile