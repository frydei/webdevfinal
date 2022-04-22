import React from "react";
import FilledButton from "./FilledButton";
import Button from "./Button";
export const month_num = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    Septembet: "09",
    October: "10",
    November: "11",
    December: "12"
};

const Complaint = (param) => {
    const user = param.user;
    const event = param.event;
    const event_date = event.date;
    const month = month_num[event_date.month]
    const day = event_date.day < 10 ? "0" + event_date.day.toString() : event_date.day.toString()

    const string_date = "2022-" + month + "-" + day;
    let hour = event_date.hour < 10 ? "0" + event_date.hour : event_date.hour
    if (event_date.time === "PM") {
        hour = parseInt(hour) + 12;
    }
    const min = event_date.minute === 0 ? "00" : event_date.minute.toString();
    const string_time = hour + ":" + min  + ":00";
    console.log(string_time)

    return (
        <form action="" className="f-form mt-4">
            <div className="row f-form-content d-flex align-items-center">
                <div className="f-form-detail f-bg">
                    <div className="form-group f-form-group">
                        <label htmlFor="event-title-small">Event title<span className="f-orange-font">*</span></label>
                        <input type="text"
                               className="form-control f-disabled shadow-none"
                               id="event-title-small"
                               disabled={true}
                               value={event.title}/>
                    </div>

                    <div className="form-group f-form-group d-flex flex-column form-control p-0">
                        <label htmlFor="event-host">Host(s)</label>
                        <div>
                            <img src={`/images/${user.profile_picture}`} alt="" className="f-icon-small me-1"/>
                        </div>
                    </div>
                    <div className="form-group f-form-group">
                        <label htmlFor="event-location">Location<span className="f-orange-font">*</span>
                        </label>
                        <input type="text"
                               className="form-control f-disabled shadow-none" id="event-location"
                               disabled={true}
                               value={event.location}/>
                    </div>
                    <div className="form-group f-form-group">
                        <label htmlFor="event-date">Date<span className="f-orange-font">*</span></label>
                        <input type="date"
                               className="form-control f-disabled shadow-none"
                               id="event-date"
                               disabled={true}
                               value={string_date}/>
                    </div>
                    <div className="form-group f-form-group">
                        <label htmlFor="event-time">Time<span className="f-orange-font">*</span></label>
                        <input type="time"
                               className="form-control f-disabled shadow-none"
                               id="event-time"
                               disabled={true}
                               value={string_time}/>
                    </div>
                    <div className="form-group f-form-group">
                        <label htmlFor="event-violation">Type of violation<span
                            className="f-orange-font">*</span></label>
                        <select name="violation" id="violation" className="form-select shadow-none">
                            <option value="">Choose a type of violation</option>
                            <option value="safety">Safety</option>
                            <option value="legal">Legal</option>
                            <option value="privacy">Privacy</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                </div>
                <div className="form-group f-form-group f-bg">
                    <label htmlFor="event-violation">Report<span className="f-orange-font">*</span></label>
                    <textarea className="form-control shadow-none" id="event-restrictions" rows="4"
                              onFocus={(e) => e.target.value = ""}
                              value="Please describe your complaint"/>
                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <label htmlFor="form-submit" className="d-flex  justify-content-center" style={{"width": "130px"}}>

                        <Button name={"Cancel"}
                                type={"cancel"}
                        />
                    </label>
                    <label htmlFor="form-canel" className="d-flex  justify-content-center" style={{"width": "130px"}}>

                        <FilledButton name={"Submit"}
                                      type={"submit"}
                        />
                    </label>
                </div>
            </div>

        </form>

    );
};

export default Complaint;