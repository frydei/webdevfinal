import {GET_EVENTS, GET_EVENT_BY_ID, UPDATE_EVENT, CREATE_EVENT, DELETE_EVENT} from "../../Actions/EventsActions";
const EventsReducer = (state = [], action) => {
    switch (action.type) {
        case GET_EVENTS:
            return state = [...action.all_events];
        case GET_EVENT_BY_ID:
            return action.event;
        case DELETE_EVENT:
            return state.filter(event => event._id !== action.event_id);
        case UPDATE_EVENT:
            return state.map(event => event._id === action.event._id ? action.event : event);
        case CREATE_EVENT:
            return [action.event, ...state];
        default:
            return state;
    }

};

export default EventsReducer;