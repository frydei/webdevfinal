import event from "../../../Data/event.json";

const EventReducer = (state = event, action) => {
    switch(action.type) {
        default:
            return event;
    }
}

export default EventReducer;