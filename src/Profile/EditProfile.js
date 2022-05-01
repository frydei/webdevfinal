import React, {useEffect, useState} from 'react'

import SelfProfileItem from "./SelfProfileItem";


const EditProfile = ({formValues, setFormValues }) => {
    const { username, first_name, last_name,biography, email, city, state } = formValues
    const updateFormValue = (e) => {
        setFormValues({ ...formValues, ...{ [e.target.id]: e.target.value } })
    }

    return (
        <div
            id="fr-profile-edit"
        >
            <SelfProfileItem/>}
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
                <label htmlFor="city">City</label>
                <textarea
                    id="city"
                    value={city}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

            <div className='profile-edit-field'>
                <label htmlFor="state">State</label>
                <textarea
                    id="state"
                    value={state}
                    onChange={updateFormValue}
                    rows={1}
                />
            </div>

        </div>
    )
}

export default EditProfile