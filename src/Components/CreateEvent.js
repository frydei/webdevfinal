import React, {useRef, useState} from "react";
import FilledButton from "./FilledButton";
import {REACT_APP_BASE} from "../App";
import {uploadFile} from "../BACKEND/Services/FileServices";
import {createEvent} from "../BACKEND/Services/EventsServices";
import {getUserById, updateUser} from "../BACKEND/Services/UsersServices";
import {updateSession} from "../BACKEND/Services/AuthServices";
import {useNavigate} from "react-router";


const CreateEvent = ({user}) => {
    const [current_user, setCurrentUser] = useState(user)
    const [imageUploader, setImageUploader] = useState(false);
    const [image, setImage] = useState("");
    const [file, setFile] = useState()
    const navigate = useNavigate()

    const title = useRef()
    const desc = useRef()
    const cost = useRef()
    const form = useRef()
    const location = useRef()
    const date = useRef()
    const time = useRef()
    const spots = useRef()
    const tags = useRef()
    const restrictions = useRef()
    const img = useRef()
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")

    const addEvent = async (e) => {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition((p) => {
            setLat(p.coords.latitude)
            setLng(p.coords.longitude)
        })

        const data = new FormData()
        data.append("file", file)
        await uploadFile(data)
        let new_attendee = {
            name: current_user.first_name + " " + current_user.last_name,
            image: current_user.profile_picture,
            username: current_user.username
        }
        let event = {
            _id: new Date().getTime(),
            title: title.current.value,
            event_photo: file.name,
            desc: desc.current.value,
            hosts: [
                {
                    first_name: current_user.first_name,
                    last_name: current_user.last_name,
                    profile_picture: current_user.profile_picture,
                    username: current_user.username
                }
            ],
            cost: cost.current.value,
            location: location.current.value,
            geolocation: {
                lat: lat,
                lng: lng
            },
            date: new Date(date.current.value),
            spots: spots.current.value,
            attendees: [new_attendee],
            restrictions: restrictions.current.value,
            tags: [tags.current.value.split(",").map(t => t.trim())]
        }
        await createEvent(event).then(async () => {
            let db_user = await getUserById(current_user._id)

            let updated_user = {
                ...db_user,
                user_events: [{...event},...db_user.user_events],
                events_hosted: db_user.events_hosted + 1,
                upcoming_events: [{...event}, ...db_user.upcoming_events]

            }
            updateUser(updated_user).then(async () => {
                updateSession(updated_user).then(r => {
                    setCurrentUser(r)
                })

            })
            navigate("/frydei/profile")
        })
    }

    return (
        <form action="" ref={form} className="f-form mt-4" onSubmit={(e) => addEvent(e)}>
            <div className="row f-form-content d-flex align-items-center">
                <div className="col f-image-upload d-flex align-items-center justify-content-center">
                    <div className="form-group f-form-group d-flex align-items-center justify-content-center position-relative">
                        {imageUploader ?
                            <>
                                <img src={image} alt="" className="f-uploaded-img" style={{"objectFit": "cover"}}/>
                                <button
                                    className="position-absolute top-0 end-0 shadow-none"
                                    onClick={() => setImageUploader(false)}
                                >
                                    <i className="fa-solid fa-xmark"/>
                                </button>
                            </>
                            :
                            <label htmlFor="image-upload"
                                   className="shadow-none d-flex align-items-center justify-content-center">
                                Add Image
                                <input id="image-upload"
                                       ref={img}
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

                    </div>
                </div>
                <div className="col">
                    <div className="form-group f-form-group f-bg ">
                        <input
                            type="text"
                            id="event-title"
                            ref={title}
                            className="form-control shadow-none"
                            placeholder="Enter title here"/>
                    </div>
                    <div className="form-group f-form-group f-bg">
                        <textarea className="form-control shadow-none"
                                  id="event-desc"
                                  ref={desc}
                                  rows="4"
                                  placeholder="Enter description"/>
                    </div>
                    <div className="f-form-detail f-bg">
                        <div className="form-group f-form-group d-flex flex-column form-control p-0">
                            <label htmlFor="event-host">Host(s)</label>
                            <div>
                                <img src={`${REACT_APP_BASE}/${current_user.profile_picture}`} alt="" className="f-icon-small me-1"/>
                                <button className="f-add-button shadow-none">
                                    <i className="fa-solid fa-plus"/>
                                </button>
                            </div>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-cost">Cost<span className="f-orange-font">*</span></label>
                            <input type="text"
                                   className="form-control shadow-none"
                                   id="event-cost"
                                   ref={cost}
                                   placeholder="How much is the entrance fee for this event?"
                                   aria-describedby="cost-help"
                            />
                            <small id="cost-help" className="form-text text-muted">
                                Note: Type "0" if it's a free event
                            </small>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-location">Location<span className="f-orange-font">*</span></label>
                            <input type="text"
                                   ref={location}
                                   className="form-control shadow-none"
                                   id="event-location"
                                   placeholder="Where will this event take place?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-date">Date and Time<span className="f-orange-font">*</span></label>
                            <input type="datetime-local"
                                   className="form-control shadow-none"
                                   id="event-date"
                                   ref={date}
                                   defaultValue={new Date().toISOString().split(".")[0]}
                                   placeholder="When will this event take place?"
                            />
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-attendee">Attendees<span className="f-orange-font">*</span></label>
                            <input type="text"
                                   ref={spots}
                                   className="form-control shadow-none"
                                   id="event-attendee"
                                   placeholder="How many people can attend, not including the host(s)?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-tags">Tags<span className="f-orange-font">*</span></label>
                            <input type="text"
                                   ref={tags}
                                   className="form-control shadow-none"
                                   id="event-tags"
                                   placeholder="Choose at least three appropriate tags for your event"
                                   aria-describedby="tag-help"
                            />
                            <small id="tag-help" className="form-text text-muted">
                                Note: Separate tags with commas
                            </small>
                        </div>


                    </div>
                    <div className="form-group f-form-group f-bg">
                        <textarea className="form-control shadow-none"
                                  id="event-restrictions"
                                  rows="4"
                                  ref={restrictions}
                                  placeholder="Special Restrictions"
                        />
                    </div>
                    <div className="row d-flex justify-content-end">
                        <label htmlFor="form-submit" className="d-flex justify-content-end">
                            <FilledButton name={"Create"} handleSubmit={addEvent}/>
                        </label>
                        <input id="form-submit"
                               type="submit"
                               style={{"display": "none"}}/>
                    </div>
                </div>


            </div>


        </form>

    );
};

export default CreateEvent;