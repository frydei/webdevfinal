import React, {useRef, useState} from "react";
import FilledButton from "./FilledButton";
import {REACT_APP_BASE} from "../App";


const CreateEvent = (param) => {
    const user = param.user;
    const [imageUploader, setImageUploader] = useState(true);
    const [image, setImage] = useState("");

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

    const addEvent = (e) => {
        e.preventDefault()
        let event = {
            title: title.current.value,
            event_photo: image,
            desc: desc.current.value,
            hosts: [
                {
                    first_name: user.first_name,
                    last_name: user.last_name,
                    profile_picture: user.profile_picture,
                    username: user.username
                }
            ],
            cost: {type: String, default: "0"},
            location: String,
            date: Date,
            spots: {type: Number, required: true, default: 1},
            attendees: [],
            restrictions: String,
            tags: [],
            is_approved: {type: Boolean, default: false}

        }
    }

    return (
        <form action="" ref={form} className="f-form mt-4" onSubmit={(e) => addEvent(e)}>
            <div className="row f-form-content d-flex align-items-center">
                <div className="col f-image-upload d-flex align-items-center justify-content-center">
                    <div className="form-group f-form-group d-flex align-items-center justify-content-center position-relative">
                        {imageUploader ?
                            <>
                                <img src={`${REACT_APP_BASE}/${image}`} alt="" className="f-uploaded-img"/>
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
                                <input id="image-upload" ref={img} type="file" style={{"display": "none"}}/>
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
                                <img src={`${REACT_APP_BASE}/${user.profile_picture}`} alt="" className="f-icon-small me-1"/>
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
                            <label htmlFor="event-date">Date<span className="f-orange-font">*</span></label>
                            <input type="date"
                                   className="form-control shadow-none"
                                   id="event-date"
                                   ref={date}
                                   placeholder="What date will this event take place?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-time">Time<span className="f-orange-font">*</span></label>
                            <input type="time"
                                   ref={time}
                                   className="form-control shadow-none"
                                   id="event-time"
                                   placeholder="What time will this event take place?"/>
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
                            <FilledButton name={"Create"}/>
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