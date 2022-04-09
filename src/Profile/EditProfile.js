import React from 'react'


const EditProfile = ({ formValues, setFormValues }) => {
    const { name, biography, location } = formValues
    const updateFormValue = (e) => {
        setFormValues({ ...formValues, ...{ [e.target.id]: e.target.value } })
    }

    return (
        <div
            id="wd-profile-edit"
        >
            <div className='profile-edit-field'>
                <label htmlFor="name">Name</label>
                <textarea
                    id="name"
                    value={name}
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

        </div>
    )
}

export default EditProfile