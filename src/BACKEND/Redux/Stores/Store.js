import {combineReducers, legacy_createStore as createStore} from "redux";
import EventsReducer from "../Reducers/EventsReducer";
import ComplaintReducer from "../Reducers/ComplaintReducer";
import UsersReducer from "../Reducers/UsersReducer";

const reducers = combineReducers({
    events: EventsReducer,
    complaint: ComplaintReducer,
    users: UsersReducer
})

export const store = createStore(reducers)
