import React, {useState} from "react";
import FilledButton from "./FilledButton";
import {REACT_APP_BASE} from "../App";


const CreateEvent = (param) => {
    const user = param.user;
    const [imageUploader, setImageUploader] = useState(true);
    const [image, setImage] = useState("anga.jpeg");

    return (
        <form action="" className="f-form mt-4">
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
                                <input id="image-upload" type="file" style={{"display": "none"}}/>
                            </label>}

                    </div>
                </div>
                <div className="col">
                    <div className="form-group f-form-group f-bg ">
                        <input type="text" className="form-control shadow-none" id="event-title"
                               placeholder="Enter title here"/>
                    </div>
                    <div className="form-group f-form-group f-bg">
                        <textarea className="form-control" id="event-desc shadow-none" rows="4"
                                  placeholder="Enter title here">Enter description here</textarea>
                    </div>
                    <div className="f-form-detail f-bg">
                        <div className="form-group f-form-group d-flex flex-column form-control p-0">
                            <label htmlFor="event-host">Host(s)</label>
                            <div><img src={`${REACT_APP_BASE}/${user.profile_picture}`} alt="" className="f-icon-small me-1"/>
                                <button className="f-add-button shadow-none">
                                    <i className="fa-solid fa-plus"/>
                                </button>
                            </div>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-cost">Cost<span className="f-orange-font">*</span></label>
                            <input type="text"
                                   className="form-control shadow-none" id="event-cost"
                                   placeholder="How much is the entrance fee for this event?"
                                   aria-describedby="cost-help"
                            />
                            <small id="cost-help" className="form-text text-muted">
                                Note: Type "0" if it's a free event
                            </small>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-location">Location<span className="f-orange-font">*</span></label>
                            <input type="text" className="form-control shadow-none" id="event-location"
                                   placeholder="Where will this event take place?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-date">Date<span className="f-orange-font">*</span></label>
                            <input type="date" className="form-control shadow-none" id="event-date"
                                   placeholder="What date will this event take place?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-time">Time<span className="f-orange-font">*</span></label>
                            <input type="time" className="form-control shadow-none" id="event-time"
                                   placeholder="What time will this event take place?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-attendee">Attendees<span className="f-orange-font">*</span></label>
                            <input type="text" className="form-control shadow-none" id="event-attendee"
                                   placeholder="How many people can attend, not including the host(s)?"/>
                        </div>
                        <div className="form-group f-form-group">
                            <label htmlFor="event-tags">Tags<span className="f-orange-font">*</span></label>
                            <input type="text" className="form-control shadow-none" id="event-tags"
                                   placeholder="Choose at least three appropriate tags for your event"
                                   aria-describedby="tag-help"
                            />
                            <small id="tag-help" className="form-text text-muted">
                                Note: Separate tags with commas
                            </small>
                        </div>


                    </div>
                    <div className="form-group f-form-group f-bg">
                        <textarea className="form-control shadow-none" id="event-restrictions" rows="4"
                                  value={"Special Restrictions"}
                                  onFocus={(e) => e.target.value = ""}
                        />
                    </div>
                    <div className="row d-flex justify-content-end">
                        <label htmlFor="form-submit" className="d-flex justify-content-end">
                            <FilledButton name={"Create"}/>
                        </label>
                        <input id="form-submit" type="submit" style={{"display": "none"}}/>
                    </div>
                </div>


            </div>


        </form>

    );
};

export default CreateEvent;