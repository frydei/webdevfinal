import events from "../../../Data/events.json";

const EventsReducer = (state = events, action) => {
    switch (action.type) {
        case "create-event":
            return state;
        case "delete-event":
            return state;
        case "update-event":
            return state;
        default:
            return events;
    }

}

export default EventsReducer;